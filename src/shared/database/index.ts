
import UserDB from './user-db/index';
import ShopDB from './shop-db/index';
import SettingsDB from './settings-db/index';

export default class ApiDataBase {

    private currentDatabase: any = {};
    private optionsDatabase: any = {
        'USER-DB': new UserDB(),
        'SHOP-DB': new ShopDB(),
        'SETTINGS-DB': new SettingsDB()
    }

    constructor() { }

    public async init() {
        console.log(' .... Initing DB ');
    }

    public async setDatabaseByName(dbName: string) {
        this.currentDatabase = this.optionsDatabase[dbName];
    }

    public getDatabase() {
        return this.currentDatabase;
    }
}
