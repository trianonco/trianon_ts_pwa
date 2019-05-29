import IShopProduct from './../../models/IShopProduct.model';
export default {
    ADD_TO_CART(state: any, item: IShopProduct) {
        state.products.push(item)
    },
    ADD_ITEM(state: any) { },
    REMOVE_ITEM(state: any) { }
}