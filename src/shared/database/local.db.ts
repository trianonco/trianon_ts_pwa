import Dexie from 'dexie';
export default class LocalDB {

    constructor() {

    }


    public getHeaderTitleTxt(): Promise<string> {
        var db = new Dexie("TrianonCo");
        db.version(1).stores({ HOME: "++id, name, content" });
        return new Promise((resolve) => {
            db.transaction('rw', (db as any).HOME, async () => {
                const HEADER_TEXT = (await (db as any).HOME.where('name').equals('title').toArray())[0];
                resolve(HEADER_TEXT.content);
            });
        });
    }


    public setHeaderTitleTxt(headerStr: string): Promise<string> {
        var db = new Dexie("TrianonCo");
        db.version(1).stores({ HOME: "++id, name, content" });
        return new Promise((resolve) => {
            db.transaction('rw', (db as any).HOME, async () => {
                if ((await (db as any).CONFIG.where('collection').equals('HOME').count()) === 0) {
                    let id = await (db as any).HOME.add({ name: "title", content: headerStr });
                }
                else {
                    const HOME_HEADER_TITLE = (await (db as any).HOME.where('name').equals('title').toArray())[0];
                    const HOME_HEADER_TITLE_ID = HOME_HEADER_TITLE.id;
                    let id = await (db as any).HOME.update(HOME_HEADER_TITLE_ID, { content: headerStr });
                }
            });
        });
    }



    public updateFromFirebase(): Promise<any> {
        var db = new Dexie("TrianonCo");
        db.version(1).stores({ CONFIG: "++id, collection, last_updated" });
        return new Promise((resolve) => {
            db.transaction('rw', (db as any).CONFIG, async () => {
                // Make sure we have something in DB:
                if ((await (db as any).CONFIG.where('collection').equals('HOME').count()) === 0) {
                    let id = await (db as any).CONFIG.add({ collection: "HOME", last_updated: new Date() });
                    resolve({});
                } else {
                    const CONFIG_HOME = (await (db as any).CONFIG.where('collection').equals('HOME').toArray())[0];
                    const CONFIG_HOME_ID = CONFIG_HOME.id;
                    let id = await (db as any).CONFIG.update(CONFIG_HOME_ID, { last_updated: new Date() });
                    resolve({});
                }
                resolve({
                    error: 'ERROR ON LOCAL DB'
                })
            });
        });
    }


    public getLastUpdated(): Promise<string> {
        var db = new Dexie("TrianonCo");
        db.version(1).stores({ CONFIG: "++id, collection, last_updated" });
        return new Promise((resolve) => {
            db.transaction('rw', (db as any).CONFIG, async () => {
                const CONFIG_HOME = (await (db as any).CONFIG.where('collection').equals('HOME').toArray())[0];
                if (CONFIG_HOME) {
                    console.log('CONFIG_HOME')
                    console.log(CONFIG_HOME)
                    resolve(CONFIG_HOME.last_updated)
                } else {
                    const date = new Date('1990/01/01');
                    console.error('date.toDateString()')
                    console.error(date.toDateString())
                    resolve(date.toDateString())

                }

            });

        });
    }

}