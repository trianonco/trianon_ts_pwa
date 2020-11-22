import IShopProduct from './../../models/IShopProduct.model';
import FirebaseDB from './../../database/firebase.db';
export default {
    ADD_TO_IN_PROCESS_CART(state: any, item: IShopProduct) {
        state.products.push(item);
    },
    REMOVE_FROM_IN_PROCESS_CART(state: any, item: IShopProduct) {
        try {
            const _products = Object.assign(JSON.parse(JSON.stringify(state.products) + ''));
            const _products_same_ref = _products.filter((_product: IShopProduct) => _product.ref === item.ref);
            const _products_no_same_ref = _products.filter((_product: IShopProduct) => _product.ref !== item.ref);
            const _product_removed = _products_same_ref.splice(0, 1);
            const _new_products = [..._products_same_ref, ..._products_no_same_ref];
            state.products = _new_products;
        } catch (e) {
            console.error(e);
        }
    },
    ADD_ITEM(state: any) { },
    REMOVE_ITEM(state: any) { }
}