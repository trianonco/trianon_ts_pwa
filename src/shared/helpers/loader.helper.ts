
export default class LoaderHelper {


    public isLoaded(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const isLoadedBefore = sessionStorage.getItem("isLoaded");
            if (!isLoadedBefore) {
                sessionStorage.setItem("isLoaded", JSON.stringify(true));
                reject(false);
            } else {
                resolve(true);
            }

        });
    }

}
