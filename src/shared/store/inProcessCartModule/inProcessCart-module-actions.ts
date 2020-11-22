import IShopProduct from './../../models/IShopProduct.model';
export default {
    addToInProcessCart(context: any, item: IShopProduct) {
        context.commit('ADD_TO_IN_PROCESS_CART', item)
    },

    removeFromInProcessCart(context: any, item: IShopProduct) {
        context.commit('REMOVE_FROM_IN_PROCES_CART', item)
    },
}