// apiDB
import firebase from 'firebase/app';

export default class ShopDataBase {

    private db = firebase.firestore();
    constructor() { }

    public async init() {
        console.log('USER-DB')
    }

    public async setShopProducts(collection_name:string, document_name:string , document_data:string): Promise<any> {
        return new Promise( (resolve, reject) => {
            const collectionRef = this.db.collection(collection_name);
            const documentRef = document_name;
            collectionRef.doc(documentRef).set(document_data)
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            })

        });
    }

    public async getProductsByGenderAndCategoriesFromFirebase(gender:string, category:string) {
        return new Promise(async (resolve: any, reject: any) => {
            const collection_name = 'PRODUCTS';
            const document_name = `PRODUCTS_GENDER_${gender.toUpperCase()}_CATEGORY_${category.replace(/\s+/g, '_').toUpperCase()}`;
            const collectionRef = this.db.collection(collection_name);
            collectionRef.doc(document_name).get()
                .then((doc: any) => {
                    if (doc.exists) {
                        const products_as_obj = doc.data();
                        const products_as_obj_data = products_as_obj.products;
                        const products_categories_as_obj = (typeof products_as_obj_data === 'string') ? JSON.parse(products_as_obj_data + '') : products_as_obj_data;
                        const inRemote: any[] = products_categories_as_obj;
                        resolve(inRemote);
                    } else {
                        console.error(document_name)
                        reject("No such document!")
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        })
    };









    

    public async getProductsByGenderAndCategories(gender:string, category:string) {
        return new Promise(async (resolve: any, reject: any) => {
            const sessionStorageName = `PRODUCTS_LOCAL_DATABASE_SHOP_GENDER_${gender.toUpperCase()}_CATEGORIES_${category.replace(/\s+/g, '_').toUpperCase()}`;
            const sessionStorageData = sessionStorage.getItem(sessionStorageName);

            if(sessionStorageData && false){
                //resolve(JSON.parse(sessionStorageData));
            }else{
                this.getProductsByGenderAndCategoriesFromFirebase(gender,category).then( (response:any) => {
                    //sessionStorage.setItem(sessionStorageName,JSON.stringify(response))
                    resolve(response);
                })
            }
        });
    };


    public async getProductsByGenderAndCategoriesAndID(gender:string, category:string, ref_photo_code:string) {
        return new Promise(async (resolve: any, reject: any) => {
          
            this.getProductsByGenderAndCategories(gender,category).then( (products:any) => {
                const prod = products.filter( (product: any) => product.ref_photo_code.replace(' ','') === ref_photo_code);
                resolve(prod)
            });
        });
    };




}