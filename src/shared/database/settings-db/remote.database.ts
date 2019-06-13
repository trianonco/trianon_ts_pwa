// ------------------------------------------------------------ //
// -- SETTINGS REMOVE DATABASE -------------------------------- //
// ------------------------------------------------------------ //
import firebase from 'firebase/app';
import axios from "axios";
export default class settingsRemoteDatabase {

    private db = firebase.firestore();
    private db_collection = 'SETTINGS';
    private db_docs = {
        'HOME_SETTINGS': { TITLE: 'HOME_TITLE', SWIPER: 'HOME_SWIPER', BANNERS: 'HOME_BANNERS' },
        'SHOP_SETTINGS': { CATEGORIES: 'SHOP_CATEGORIES', GENDER: 'SHOP_GENDER' },
        'AUTHORIZED_DISTRIBUTORS_AND_SHOPS_SETTINGS': { DISTRIBUTORS: 'AUTHORIZED_DISTRIBUTORS', SHOPS: 'AUTHORIZED_SHOPS' }
    }

    constructor() { }

    public async init() {
        console.log(' .... Initing DB ');
    }

    /**
   * Method : getTitle
   * @params : 
   * @returns : 
   */
    public async getTitle() {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'HOME_SETTINGS';
            const collectionRef = this.db.collection(this.db_collection);
            collectionRef.doc(documentRef).get()
                .then((doc: any) => {
                    if (doc.exists) {
                        const home_settings_as_obj = doc.data();
                        const home_settings_title_as_string = home_settings_as_obj[this.db_docs.HOME_SETTINGS.TITLE];
                        const inRemote: string = home_settings_title_as_string;
                        resolve(inRemote);
                    } else {
                        reject("No such document!")
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        })
    };

    /**
   * Method : setTitle 
   * @params : 
   * @returns : 
   */
    public async setTitle(title: string) {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'HOME_SETTINGS';
            const collectionRef = this.db.collection(this.db_collection);
            const attributeRef = this.db_docs.HOME_SETTINGS.TITLE;
            const data: any = {};
            data[attributeRef] = title;

            collectionRef.doc(documentRef).update(data)
                .then((response: any) => {
                    resolve(response)
                })
                .catch((error: any) => {
                    reject(error)
                })

        })
    };



    /**
    * Method : getSwiperSlides 
    * @params : 
    * @returns : 
    */
    public async getSwiperSlides() {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'HOME_SETTINGS';
            const collectionRef = this.db.collection(this.db_collection);
            collectionRef.doc(documentRef).get()
                .then((doc: any) => {
                    if (doc.exists) {
                        const home_settings_as_obj = doc.data();
                        const home_settings_swiper_as_string = home_settings_as_obj[this.db_docs.HOME_SETTINGS.SWIPER];
                        const home_settings_swiper_as_obj = (typeof home_settings_swiper_as_string === 'string') ? JSON.parse(home_settings_swiper_as_string + '') : home_settings_swiper_as_string;
                        const inRemote: any[] = home_settings_swiper_as_obj;
                        resolve(inRemote);
                    } else {
                        reject("No such document!")
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        })
    };


    /**
* Method : setTitle 
* @params : 
* @returns : 
*/
    public async setSwiperSlides(swiperSlide: any[]) {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'HOME_SETTINGS';
            const collectionRef = this.db.collection(this.db_collection);
            const attributeRef = this.db_docs.HOME_SETTINGS.SWIPER;
            const data: any = {};
            data[attributeRef] = JSON.stringify(swiperSlide);

            collectionRef.doc(documentRef).update(data)
                .then((response: any) => {
                    resolve(response)
                })
                .catch((error: any) => {
                    reject(error)
                })

        })
    };





    /**
    * Method : getSwiperSlides 
    * @params : 
    * @returns : 
    */
    public async getShopCategories() {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'SHOP_SETTINGS';
            const collectionRef = this.db.collection(this.db_collection);
            collectionRef.doc(documentRef).get()
                .then((doc: any) => {
                    if (doc.exists) {
                        const shop_settings_as_obj = doc.data();
                        const shop_settings_categories_as_string = shop_settings_as_obj[this.db_docs.SHOP_SETTINGS.CATEGORIES];
                        const shop_settings_categories_as_obj = (typeof shop_settings_categories_as_string === 'string') ? JSON.parse(shop_settings_categories_as_string + '') : shop_settings_categories_as_string;
                        const inRemote: any[] = shop_settings_categories_as_obj;
                        resolve(inRemote);
                    } else {
                        reject("No such document!")
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        })
    };


    /**
* Method : setTitle 
* @params : 
* @returns : 
*/
    public async setShopCategories(shopCategories: any[]) {
        return new Promise(async (resolve: any, reject: any) => {

            const documentRef = 'SHOP_SETTINGS';
            const collectionRef = this.db.collection(this.db_collection);
            const attributeRef = this.db_docs.SHOP_SETTINGS.CATEGORIES;
            const data: any = {};
            data[attributeRef] = JSON.stringify(shopCategories);

            collectionRef.doc(documentRef).update(data)
                .then((response: any) => {
                    console.warn('shopCategories');
                    console.warn(shopCategories)
                    resolve(response)
                })
                .catch((error: any) => {
                    reject(error)
                })

        })
    };










    /**
    * Method : getAuthorizedDistributors
    * @params : 
    * @returns : 
    */
    public async getAuthorizedDistributors() {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'DISTRIBUTORS_AND_SHOPS';
            const collectionRef = this.db.collection(this.db_collection);
            collectionRef.doc(documentRef).get()
                .then((doc: any) => {
                    if (doc.exists) {
                        const settings_as_obj = doc.data();
                        const settings_categories_as_string = settings_as_obj[this.db_docs.AUTHORIZED_DISTRIBUTORS_AND_SHOPS_SETTINGS.DISTRIBUTORS];
                        const settings_categories_as_obj = (typeof settings_categories_as_string === 'string') ? JSON.parse(settings_categories_as_string + '') : settings_categories_as_string;
                        const inRemote: any[] = settings_categories_as_obj;
                        resolve(inRemote);
                    } else {
                        reject("No such document!")
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        })
    };


    //https://maps.googleapis.com/maps/api/geocode/json?address=&key

    /**
    * Method : getLatLngFromAddress()
    * @params : 
    * @returns : 
    */
    public async getLatLngFromAddress(address: string, city: string, department: string) {
        return new Promise(async (resolve: any, reject: any) => {

            const API_BASE = 'https://maps.googleapis.com/maps/api/geocode/json?';
            const API_KEY = 'AIzaSyDIwlZ8kuzsE9T0_1OMhN6GoeQYXT7pvus';
            const API_ADDRESS = encodeURI(`${address},${city} ,${department}`.replace("-", " - ")).replace('#', '%23').replace('CR', 'Carrera').replace('CL', 'Calle');

            //const URL = `${API_BASE}address=${API_ADDRESS}&key=${API_KEY}`;
            // https://maps.googleapis.com/maps/api/geocode/json?address=CL%2015%2015%2090,%20ACACIAS,%20META&key=AIzaSyDIwlZ8kuzsE9T0_1OMhN6GoeQYXT7pvus
            const URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + API_ADDRESS + '&key=AIzaSyDIwlZ8kuzsE9T0_1OMhN6GoeQYXT7pvus';

            axios.get(URL).then((response: any) => {

                if (response && response.data) {
                    try {
                        const results = response.data.results;
                        const result = results[0];
                        const geometry = result.geometry;
                        const location = geometry.location;
                        resolve(location);
                    } catch (e) {
                        console.error(e);
                        console.warn(URL);
                        resolve();
                    }
                } else {
                    console.error(response)
                    resolve();
                }

            }).catch((e: any) => {
                resolve();
            })


        })
    };


    /**
    * Method : getAuthorizedShops
    * @params : 
    * @returns : 
    */
    public async getAuthorizedShops() {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'DISTRIBUTORS_AND_SHOPS';
            const collectionRef = this.db.collection(this.db_collection);
            collectionRef.doc(documentRef).get()
                .then((doc: any) => {
                    if (doc.exists) {
                        const settings_as_obj = doc.data();
                        const settings_categories_as_string = settings_as_obj[this.db_docs.AUTHORIZED_DISTRIBUTORS_AND_SHOPS_SETTINGS.SHOPS];
                        const settings_categories_as_obj = (typeof settings_categories_as_string === 'string') ? JSON.parse(settings_categories_as_string + '') : settings_categories_as_string;
                        const inRemote: any[] = settings_categories_as_obj;

                        resolve(inRemote);
                    } else {
                        reject("No such document!")
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        })
    };




    /**
    * Method : setAuthorizedShops
    * @params : 
    * @returns : 
    */
    public async setAuthorizedShops(shops: any[]) {
        return new Promise(async (resolve: any, reject: any) => {

            const documentRef = 'DISTRIBUTORS_AND_SHOPS';
            const attributeRef = this.db_docs.AUTHORIZED_DISTRIBUTORS_AND_SHOPS_SETTINGS.SHOPS;

            const collectionRef = this.db.collection(this.db_collection);
            const data: any = {};
            this.getAuthorizedShops().then(async (shopsOnDB: any) => {

                const p_distributorsOnDB = JSON.parse(JSON.stringify(shopsOnDB) + '');
                const a_distributorsOnDB: any[] = [];

                console.log(' (shopsOnDB: any)  ')

                p_distributorsOnDB.map(async (distributorOnDB: any) => {

                    const distributorOnExcel = JSON.parse(JSON.stringify(shops.find(distr => distr.place === distributorOnDB['place'])) + '');
                    const distributorOnDataBase = JSON.parse(JSON.stringify(distributorOnDB) + '');

                    const createdAt = distributorOnDataBase['createdAt'] || new Date();
                    const updatedAt = distributorOnDataBase['updatedAt'] || new Date();

                    if (!(distributorOnExcel === distributorOnDataBase)) {
                        distributorOnExcel['updatedAt'] = new Date();
                        distributorOnExcel['createdAt'] = createdAt;
                    } else {
                        distributorOnExcel['updatedAt'] = updatedAt;
                        distributorOnExcel['createdAt'] = createdAt;
                    }

                    a_distributorsOnDB.push(distributorOnExcel);
                    return distributorOnExcel;
                });


                console.warn(' ----------------------------- ')
                console.warn('a_distributorsOnDB')
                console.warn(a_distributorsOnDB)
                console.warn(' ----------------------------- ')


                const okPosition = [];
                const noPosition = [];
                for (let i = 0; i < a_distributorsOnDB.length; i++) {
                    const address = (a_distributorsOnDB[i] as any).address || (a_distributorsOnDB[i] as any).place;
                    const city = (a_distributorsOnDB[i] as any).city;
                    const department = (a_distributorsOnDB[i] as any).department;
                    const position = await this.getLatLngFromAddress(address, city, department);
                    if (position) {
                        okPosition.push({
                            city: city,
                            address: address,
                            position: position
                        });
                        a_distributorsOnDB[i]['coord'] = {
                            lat: (position as any).lat,
                            lng: (position as any).lng
                        }
                    } else {
                        noPosition.push({
                            city: city,
                            address: address
                        });
                    }

                    console.log(100 * (i / a_distributorsOnDB.length))

                }

                localStorage.setItem("okPosition_shop", JSON.stringify(okPosition));
                localStorage.setItem("noPosition_shop", JSON.stringify(noPosition));

                data[attributeRef] = JSON.stringify(a_distributorsOnDB);
                collectionRef.doc(documentRef).update(data)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((error: any) => {
                        reject(error)
                    })
            });

        })
    };


    /**
    * Method : setAuthorizedDistributors
    * @params : 
    * @returns : 
    */
    public async setAuthorizedDistributors(distributors: any[]) {
        return new Promise(async (resolve: any, reject: any) => {
            const documentRef = 'DISTRIBUTORS_AND_SHOPS';
            const attributeRef = this.db_docs.AUTHORIZED_DISTRIBUTORS_AND_SHOPS_SETTINGS.DISTRIBUTORS;
            const collectionRef = this.db.collection(this.db_collection);
            const data: any = {};
            this.getAuthorizedDistributors().then(async (distributorsOnDB: any) => {
                const p_distributorsOnDB = JSON.parse(JSON.stringify(distributorsOnDB) + '');
                const a_distributorsOnDB: any[] = [];
                p_distributorsOnDB.map(async (distributorOnDB: any) => {

                    const distributorOnExcel = JSON.parse(JSON.stringify(distributors.find(distr => distr.code === distributorOnDB['code'])) + '');
                    const distributorOnDataBase = JSON.parse(JSON.stringify(distributorOnDB) + '');

                    const createdAt = distributorOnDataBase['createdAt'] || new Date();
                    const updatedAt = distributorOnDataBase['updatedAt'] || new Date();

                    if (!(distributorOnExcel === distributorOnDataBase)) {
                        distributorOnExcel['updatedAt'] = new Date();
                        distributorOnExcel['createdAt'] = createdAt;
                    } else {
                        distributorOnExcel['updatedAt'] = updatedAt;
                        distributorOnExcel['createdAt'] = createdAt;


                        const okPosition = [];
                        const noPosition = [];
                        for (let i = 0; i < a_distributorsOnDB.length; i++) {
                            const address = (a_distributorsOnDB[i] as any).address;
                            const city = (a_distributorsOnDB[i] as any).city;
                            const department = (a_distributorsOnDB[i] as any).department;
                            const position = await this.getLatLngFromAddress(address, city, department);
                            if (position) {
                                okPosition.push({
                                    city: city,
                                    address: address,
                                    position: position
                                });
                                a_distributorsOnDB[i]['coord'] = {
                                    lat: (position as any).lat,
                                    lng: (position as any).lng
                                }
                            } else {
                                noPosition.push({
                                    city: city,
                                    address: address
                                });
                            }

                            console.log(100 * (i / a_distributorsOnDB.length))

                        }

                        localStorage.setItem("okPosition", JSON.stringify(okPosition));
                        localStorage.setItem("noPosition", JSON.stringify(noPosition));

                        console.log(a_distributorsOnDB)

                    }
                    a_distributorsOnDB.push(distributorOnExcel);
                    return distributorOnExcel;
                });


                data[attributeRef] = JSON.stringify(a_distributorsOnDB);

                collectionRef.doc(documentRef).update(data)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((error: any) => {
                        reject(error)
                    })

            });
        })
    };


}


/// 2019-06-11T23:52:51.354Z