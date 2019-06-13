// ------------------------------------------------------------ //  
// -- SETTINGS DATABASE --------------------------------------- //
// ------------------------------------------------------------ //  
import SettingsLocalDatabase from './local.database';
import SettingsRemoteDatabase from './remote.database';

export default class SettingsDataBase {

    // Database Api Interfaces 
    private local: any = new SettingsLocalDatabase();
    private remote: any = new SettingsRemoteDatabase();

    // Database Properties
    private homeSwiperSlides: any = [];

    // Database Constructor
    constructor() { }


    /**
     * Method : getTitle
     * @params : void
     * @returns : new Promise<string>
     */
    public async getTitle() {
        return new Promise(async (resolve: any, reject: any) => {
            const isInLocal: any[] = await this.local.getTitle();
            if (isInLocal) {
                const titleLocal = this.local.getTitle();
                resolve(titleLocal);
            } else {
                const titleRemote = await this.remote.getTitle();
                resolve(titleRemote);
            }
        })
    };

    /**
     * Method : setTitle
     * @params : title as string
     * @returns : new Promise<string>
     */
    public async setTitle(title: string) {
        return new Promise(async (resolve: any, reject: any) => {
            this.remote.setTitle(title).then((title: string) => {
                resolve(title);
            }).catch((error: any) => {
                console.error(error)
            });
        })
    };










    /**
     * Method : getSwiperSlides 
     * @params : 
     * @returns : 
     */
    public async getSwiperSlides() {
        return new Promise(async (resolve: any, reject: any) => {
            const isInLocal: any[] = await this.local.getSwiperSlides();
            if (isInLocal) {
                const swiperSlideLocal = this.local.getSwiperSlides();
                resolve(swiperSlideLocal);
            } else {
                const swiperSlideRemote = await this.remote.getSwiperSlides();
                resolve(swiperSlideRemote);
            }
        })
    };
    /**
   * Method : setSwiperSlides 
   * @params : 
   * @returns : 
   */
    public async setSwiperSlides(swiperSlides: any[]) {
        return new Promise(async (resolve: any, reject: any) => {
            this.remote.setSwiperSlides(swiperSlides).then((swipers: any) => {
                resolve(swiperSlides);
            }).catch((error: any) => {
                console.error(error)
            });
        })
    };












    /**
    * Method : getShopCategories
    * @params : 
    * @returns : 
    */
    public async  getShopCategories() {
        return new Promise(async (resolve: any, reject: any) => {
            const isInLocal: any[] = await this.local.getShopCategories();
            if (isInLocal) {
                const shopCategoriesLocal = this.local.getShopCategories();
                resolve(shopCategoriesLocal);
            } else {
                const shopCategoriesRemote = await this.remote.getShopCategories();
                resolve(shopCategoriesRemote);
            }
        })
    };
    /**
   * Method : setShopCategories
   * @params : 
   * @returns : 
   */
    public async setShopCategories(shopCategories: any[]) {
        return new Promise(async (resolve: any, reject: any) => {
            this.remote.setShopCategories(shopCategories).then((categories: any) => {
                resolve(shopCategories);
            }).catch((error: any) => {
                console.error(error)
            });
        })
    };













    /**
     * Method : setAuthorizedDistributors
     * @params : 
     * @returns : 
     */

    public async getAuthorizedDistributors() {
        return new Promise(async (resolve: any, reject: any) => {
            const isInLocal: any[] = await this.local.getAuthorizedDistributors();
            if (isInLocal) {
                const authorizedDistributorsLocal = this.local.getAuthorizedDistributors();
                resolve(authorizedDistributorsLocal);
            } else {
                const authorizedDistributorsRemote = await this.remote.getAuthorizedDistributors();
                resolve(authorizedDistributorsRemote);
            }
        })
    };
    public async setAuthorizedDistributors(distributors: any[]) {
        return new Promise(async (resolve: any, reject: any) => {
            this.remote.setAuthorizedDistributors(distributors).then((distributors: any) => {
                resolve(distributors);
            }).catch((error: any) => {
                console.error(error)
            });
        })
    };







    public async getAuthorizedShops() {
        return new Promise(async (resolve: any, reject: any) => {
            const isInLocal: any[] = await this.local.getAuthorizedShops();
            if (isInLocal) {
                const authorizedShopsLocal = this.local.getAuthorizedShops();
                resolve(authorizedShopsLocal);
            } else {
                const authorizedShopsRemote = await this.remote.getAuthorizedShops();
                resolve(authorizedShopsRemote);
            }
        })
    };

    public async setAuthorizedShops(shops: any[]) {
        return new Promise(async (resolve: any, reject: any) => {
            this.remote.setAuthorizedShops(shops).then((shops: any) => {
                resolve(shops);
            }).catch((error: any) => {
                console.error(error)
            });
        })
    };



}