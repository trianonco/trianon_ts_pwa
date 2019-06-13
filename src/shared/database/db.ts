import firebaseDB from './firebase.db';
import localDB from './local.db';
import IShopProduct from "../models/IShopProduct.model";
import { toIShopProduct } from "../models/toIShopProduct.model";
import { toIShopProducts } from "../models/toIShopProduct.model";

export default class TrianonDB {
    public firebaseDB: any = new firebaseDB();
    public localDB: any = new localDB();
    constructor() { }

    public async init() {

    }




    public getHeaderTitleText(): Promise<string> {
        return new Promise((resolve, reject) => {
            const isInSessionStorage = sessionStorage.getItem("header_title_text");
            if (isInSessionStorage) {
                resolve(JSON.parse(isInSessionStorage));
            } else {
                this.firebaseDB.getHeaderTitleText().then((title: string) => {
                    sessionStorage.setItem("header_title_text", JSON.stringify(title));
                    resolve(title);
                });
            }
        });
    }


    public getUserFromDB(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.firebaseDB.getUserFromDB(email)
                .then((user: any) => {
                    resolve(user);
                })
                .catch((error: any) => {
                    reject(error);
                })
        });
    }

    public getAuthorizedDistributors(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.firebaseDB.getAuthorizedDistributors()
                .then((user: any) => {
                    resolve(user);
                })
                .catch((error: any) => {
                    reject(error);
                })
        });
    }

    public setAuthorizedDistributors(places: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this.firebaseDB.setAuthorizedDistributors(places)
                .then((user: any) => {
                    resolve(user);
                })
                .catch((error: any) => {
                    reject(error);
                })
        });
    }








    public getHomeSwiperSlides(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const isInSessionStorage = sessionStorage.getItem("home_swiper_slides");
            if (isInSessionStorage) {
                resolve(JSON.parse(isInSessionStorage));
            } else {
                this.firebaseDB.getHomeSwiperSlides().then((slides: any[]) => {
                    sessionStorage.setItem("home_swiper_slides", JSON.stringify(slides));
                    resolve(slides);
                });
            }
        });

    }
    public getHomeGenderButtonsGategories(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const isInSessionStorage = sessionStorage.getItem("home_gender_buttons_categories");
            if (isInSessionStorage) {
                resolve(JSON.parse(isInSessionStorage));
            } else {
                this.firebaseDB.getHomeGenderButtonsGategories().then((categories: any[]) => {
                    sessionStorage.setItem("home_gender_buttons_categories", JSON.stringify(categories));
                    resolve(categories);
                });
            }
        });

    }


    public setShopProducts(products: IShopProduct[]) {
        return new Promise(async (resolve, reject) => {
            const categoriesAsObj: any[] = await this.getHomeGenderButtonsGategories();
            const categoriesAsArray: string[] = categoriesAsObj.map(obj => obj.title);
            const gendersAsArray: string[] = ['HOMBRE', 'DAMA'];

            gendersAsArray.map(async gender => {
                categoriesAsArray.map(async category => {
                    const products_gender = products.filter(product => product.gender === gender);
                    const products_gender_category = products_gender.filter(product => product.category === category);
                    console.log(' Gender : ' + gender);
                    console.log(' Category : ' + category)
                    const isUploaded = await this.firebaseDB.setShopProducts(products_gender_category, gender, category)
                });
            });
            resolve(true)
        })


    }

    public getShopProductsByCategoryAndGender(category: string, gender: string): Promise<any[]> {
        return new Promise((resolve, reject) => {


            const db_gender: string = gender;
            const db_category: string = category.toUpperCase().replace(' ', '-').replace(' ', '-');
            const db_shop_doc_name: string = `db_shop_gender_${db_gender}_category_${db_category}`;

            const isInSessionStorage = sessionStorage.getItem(db_shop_doc_name);
            if (isInSessionStorage) {
                resolve(JSON.parse(isInSessionStorage));
            } else {
                this.firebaseDB.getShopProductsByCategoryAndGender(category, gender).then((products: any[]) => {
                    sessionStorage.setItem(db_shop_doc_name, JSON.stringify(products));
                    resolve(products);
                });
            }
        });
    }


    public getProductByRef(ref: string) {
        return new Promise((resolve, reject) => {
            const isInSessionStorage = this.isProductOnSessionStorage(ref);
            if (isInSessionStorage) {
                resolve(isInSessionStorage);
            } else {
                this.firebaseDB.getProductByRef(ref).then((db: any) => {
                    const db_shop_doc_name: string = db.name;
                    const product: any = db.product;
                    const products: any[] = db.products;
                    sessionStorage.setItem(db_shop_doc_name, JSON.stringify(products));
                    resolve(product);
                });
            }
        });
    }

    public isProductOnSessionStorage(ref: string): any {
        const dbs_names = Object.keys(sessionStorage).filter(key => key.includes("db_shop_gender"));
        dbs_names.forEach(db_name => {
            const db = JSON.parse(sessionStorage.getItem(db_name) || "");
            const isInDB = db.filter((_db: any) => _db.ref === ref).length > 0;

            if (isInDB) {

                return db.filter((_db: any) => _db.ref === ref);
            }
        });
        return undefined;
    }


    public getProductsSizesByRefCodeAndRefColorCode(ref_code: string, color_code: string, gender: string, category: string): Promise<IShopProduct[]> {
        return new Promise(async (resolve, reject) => {
            const dbAsArray = await this.getShopProductsByCategoryAndGender(category, gender);
            const dbAsShop: IShopProduct[] = await toIShopProducts(dbAsArray);
            const dbAsSameRefCodeAndColorCode: IShopProduct[] = [...dbAsShop.filter((dbItem: IShopProduct) => dbItem.ref_code === ref_code && dbItem.ref_color_code === color_code)];
            resolve(dbAsSameRefCodeAndColorCode);
        });
    }






















    /*

    private async isFirebaseAheadLocalDB() {
        const LAST_UPDATED_LOCAL_DB = await this.getLastUpdatedLocalDB();
        const LAST_UPDATED_FIREBASE_DB = await this.getLastUpdatedFirebaseDB();
        const IS_FIREBASE_AHEAD = LAST_UPDATED_FIREBASE_DB > LAST_UPDATED_LOCAL_DB;
        return IS_FIREBASE_AHEAD;
    }

    private getLastUpdatedFirebaseDB(): Promise<string> {
        return new Promise((resolve) => {
            this.firebaseDB.getLastUpdated()
                .then((timestamp: string) => {
                    resolve(timestamp);
                });
        });
    }

    private getLastUpdatedLocalDB(): Promise<string> {
        return new Promise((resolve) => {
            this.localDB.getLastUpdated()
                .then((timestamp: string) => {
                    resolve(timestamp);
                });
        });
    }
*/

}