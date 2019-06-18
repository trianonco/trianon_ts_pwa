import IShopProduct from './../../models/IShopProduct.model';
import FirebaseDB from './../../database/firebase.db';
export default {
    ADD_TO_CART(state: any, item: IShopProduct) {

        state.products.push(item);

        const db = new FirebaseDB();
        db.setShoppingCartProducts(state.products).then((response: any) => { });

    },
    REMOVE_FROM_CART(state: any, item: IShopProduct) {
        try {
            const _products = Object.assign(JSON.parse(JSON.stringify(state.products) + ''));
            const _products_same_ref = _products.filter((_product: IShopProduct) => _product.ref === item.ref);
            const _products_no_same_ref = _products.filter((_product: IShopProduct) => _product.ref !== item.ref);
            const _product_removed = _products_same_ref.splice(0, 1);
            const _new_products = [..._products_same_ref, ..._products_no_same_ref];
            state.products = _new_products;

            const db = new FirebaseDB();
            db.setShoppingCartProducts(state.products).then((response: any) => { });

        } catch (e) {
            console.error(e);
        }
    },
    ADD_ITEM(state: any) { },
    REMOVE_ITEM(state: any) { }
}