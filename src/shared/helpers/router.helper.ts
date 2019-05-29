
export default class RouterHelper {
    public hasBack(route: string): boolean {
        if (route && route !== "none") {
            if (route === "home") {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    public hasTitle(route: string): boolean {
        if (route && route !== "none") {
            if (route === "signin") {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    public hasLogo(route: string): boolean {
        return true;
    }
}
