// ------------------------------------------------------------ //
// -- SETTINGS LOCAL DATABASE --------------------------------- //
// ------------------------------------------------------------ //  
export default class SettingsLocalDatabase {

    constructor() { }

    public async init() {
        console.log(' .... Initing DB ');
    }


    /**
  * Method : getTitle
  * @params : void
  * @returns : new Promise<string>
  */
    public async getTitle() {
        return new Promise((resolve: any, reject: any) => {
            const inLocal: any[] = JSON.parse('' + sessionStorage.getItem("SETTINGS_LOCAL_DATABASE_TITLE"));
            resolve(inLocal);
        });
    };

    /**
   * Method : getSwiperSlides 
   * @params : 
   * @returns : 
   */
    public async getSwiperSlides() {
        return new Promise((resolve: any, reject: any) => {
            const inLocal: any[] = JSON.parse('' + sessionStorage.getItem("SETTINGS_LOCAL_DATABASE_SWIPER"));
            resolve(inLocal);
        })
    };

    /**
* Method : getShopCategories
* @params : 
* @returns : 
*/
    public async getShopCategories() {
        return new Promise((resolve: any, reject: any) => {
            const inLocal: any[] = JSON.parse('' + sessionStorage.getItem("SETTINGS_LOCAL_DATABASE_SHOP_CATEGORIES"));
            resolve(inLocal);
        })
    };

    /**
  * Method : getAuthorizedDistributors
  * @params : void
  * @returns : new Promise<string>
  */
    public async getAuthorizedDistributors() {
        return new Promise((resolve: any, reject: any) => {
            const inLocal: any[] = JSON.parse('' + sessionStorage.getItem("SETTINGS_LOCAL_DATABASE_AUTHORZIED_DISTRIBUTORS"));
            resolve(inLocal);
        });
    };


    /**
* Method : getAuthorizedDistributors
* @params : void
* @returns : new Promise<string>
*/
    public async getAuthorizedShops() {
        return new Promise((resolve: any, reject: any) => {
            const inLocal: any[] = JSON.parse('' + sessionStorage.getItem("SETTINGS_LOCAL_DATABASE_AUTHORZIED_SHOPS"));
            resolve(inLocal);
        });
    };



}
