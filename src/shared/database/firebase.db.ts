import firebase from 'firebase/app';
export default class FirebaseDB {

    private db = firebase.firestore();

    public getLastUpdated(): Promise<string> {
        return new Promise((resolve) => {
            this.db.collection("CONFIG").get().then((querySnapshot: any) => {
                querySnapshot.forEach((doc: any) => {
                    const doc_data = doc.data();
                    const collection = doc_data['COLLECTION'];
                    const lastUpdated = doc_data['LAST_UPDATED'].toDate();
                    resolve(lastUpdated);
                });

            });

        });
    }

    public getHeaderTitleText(): Promise<string> {
        return new Promise((resolve) => {
            this.db.collection("HOME_SETTINGS").where("code", "==", "header_title_text").get().then((querySnapshot: any) => {
                resolve(querySnapshot.docs[0].data().content);
            });
        });
    }




    public getUserFromDB(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            console.warn('email ==> ' + email)
            this.db.collection("USERS").where("email", "==", email).get()
                .then((querySnapshot: any) => {
                    console.warn(querySnapshot.docs[0].data())
                    resolve(querySnapshot.docs[0].data());
                }).catch((error: any) => reject(error));
        });
    }



    public getHomeSwiperSlides(): Promise<any[]> {
        return new Promise((resolve) => {
            this.db.collection("HOME_SETTINGS").where("code", "==", "home_swiper_slides").get().then((querySnapshot: any) => {
                resolve(JSON.parse(querySnapshot.docs[0].data().content));
            });
        });
    }


    public getHomeGenderButtonsGategories(): Promise<any[]> {
        return new Promise((resolve) => {
            this.db.collection("HOME_SETTINGS").where("code", "==", "home_gender_buttons_categories").get().then((querySnapshot: any) => {
                resolve(JSON.parse(querySnapshot.docs[0].data().content));
            });
        });
    }

    public getShopProductsByCategoryAndGender(category: string, gender: string): Promise<any[]> {
        return new Promise((resolve) => {
            const db_gender = gender;
            const db_category = category.toUpperCase().replace(' ', '-').replace(' ', '-');
            const db_shop_doc_name: string = `db_shop_gender_${db_gender}_category_${db_category}`;
            if (db_gender.length > 0 && db_category.length > 0) {
                this.db.collection("SHOP").where("gender", "==", gender).where("category", "==", category).get().then((querySnapshot: any) => {
                    if (querySnapshot && querySnapshot.docs && querySnapshot.docs[0]) {
                        const queryResponse = querySnapshot.docs[0].data();
                        const productsResponse = queryResponse.products;
                        resolve(productsResponse);
                    } else {
                        console.error(' db.ts Firebase Error !!! ')
                        console.error(querySnapshot);
                        console.error(db_shop_doc_name)
                        resolve([]);
                    }
                });
            }
        });
    }


    public setShopProducts(products: any[], gender: string, category: string): Promise<boolean> {
        return new Promise((resolve) => {

            const db_gender = gender;
            const db_category = category.toUpperCase().replace(' ', '-').replace(' ', '-');

            const db_shop_doc_name: string = `db_shop_gender_${db_gender}_category_${db_category}`;
            const db_shop_doc_gender: string = gender;
            const db_shop_doc_category: string = category;
            const db_shop_doc_products: any[] = (products.length > 0) ? products : [];
            const db_shop_doc = {
                gender: db_shop_doc_gender,
                category: db_shop_doc_category,
                products: db_shop_doc_products,
                updatedAt: new Date(),
            };


            this.db.collection("SHOP").doc(db_shop_doc_name).set(db_shop_doc).then((response: any) => {
                resolve(true)
            }).catch((error: any) => {
                console.log(error)
                resolve(false)
            });


        });
    }


    public getProductByRef(ref: string): Promise<any> {
        return new Promise((resolve) => {
            const gender = ref.slice(0, 1) === 'H' ? 'HOMBRE' : 'DAMA';
            this.db.collection("SHOP")
                .where("gender", "==", gender).get().then((querySnapshot: any) => {
                    const queryDocs = querySnapshot.docs;
                    queryDocs.forEach((queryDoc: any) => {
                        const queryResponse = queryDoc.data();
                        const queryResponseProducts = queryResponse.products;
                        const RefInQueryResponseProducts = queryResponseProducts.filter((_ref: any) => _ref.ref === ref) as any[];
                        const isRefInQueryResponseProducts = RefInQueryResponseProducts.length > 0;
                        if (isRefInQueryResponseProducts) {
                            const name: string = queryDoc.id;
                            const product: any = RefInQueryResponseProducts[0];
                            const products: any[] = queryResponseProducts;
                            resolve({
                                name: name,
                                product: product,
                                products: products
                            })
                        }
                    });

                    resolve({})
                })

        });


    }




    public getAuthorizedDistributors(): Promise<any> {
        return new Promise((resolve) => {
            this.db.collection("AUTHORIZED_DISTRIBUTORS").where("code", "==", "PLACES").get().then((querySnapshot: any) => {
                resolve(querySnapshot.docs[0].data().PLACES);
            });
        });
    }

    public setAuthorizedDistributors(places: any[]): Promise<any> {
        return new Promise((resolve) => {
            this.db.collection("AUTHORIZED_DISTRIBUTORS").doc("wH9jN7gQ631j0Z1xq2AP").set({
                name: "Los Angeles",
                state: "CA",
                country: "USA"
            }).then(function () {
                console.log("Document successfully written!");
            }).catch(function (error: any) {
                console.error("Error writing document: ", error);
            });

        });
    }


    public setShoppingCartProducts(shoppingCarProducts: any[]): Promise<any> {
        return new Promise((resolve) => {
            const user = JSON.parse(localStorage.getItem("user") || '{}');
            const email = user.email || '';
            if (email) {
                this.db.collection("USERS").doc(email).update({
                    shoppingCart: shoppingCarProducts
                }).then(function () {
                    console.log("Document successfully written!");
                    resolve('OK')
                }).catch(function (error: any) {

                    console.error("Error writing document: ", error);
                    resolve('ERROR FROM FIRESTORE')
                });
            } else {
                resolve('ERROR!!! NO EMAIL IN LOCALSTORGAE')
            }


        });
    }



}


/*
HOME_LAST_UPDATE: Timestamp
nanoseconds: 0
seconds: 1557723600
*/