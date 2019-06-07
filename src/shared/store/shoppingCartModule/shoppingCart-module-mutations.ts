import IShopProduct from './../../models/IShopProduct.model';
export default {
    ADD_TO_CART(state: any, item: IShopProduct) {
        state.products.push(item)
    },
    REMOVE_FROM_CART(state: any, item: IShopProduct) {

        console.warn('REMOVEFROMCART');

        const _products = Object.assign(JSON.parse(JSON.stringify(state.products) + ''));
        const _products_same_ref = _products.filter((_product: IShopProduct) => _product.ref === item.ref);
        const _products_no_same_ref = _products.filter((_product: IShopProduct) => _product.ref !== item.ref);

        const _product_removed = _products_same_ref.splice(0, 1);
        const _new_products = [..._products_same_ref, ..._products_no_same_ref];

        console.log('_products')
        console.log(_products)

        console.log('_new_products')
        console.log(_new_products)

        state.products = _new_products;
    },
    ADD_ITEM(state: any) { },
    REMOVE_ITEM(state: any) { }
}