import IShopProduct from './../../models/IShopProduct.model';
export default {
    addToCart(context: any, item: IShopProduct) {
        context.commit('ADD_TO_CART', item)
    },

    removeFromCart(context: any, item: IShopProduct) {
        context.commit('REMOVE_FROM_CART', item)
    },

    addItem() { },
    removeItem() { },
}