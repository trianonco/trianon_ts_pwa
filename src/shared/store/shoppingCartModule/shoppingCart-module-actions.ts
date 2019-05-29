import IShopProduct from './../../models/IShopProduct.model';
export default {
    addToCart(context: any, item: IShopProduct) {
        context.commit('ADD_TO_CART', item)
    },
    addItem() { },
    removeItem() { },
}