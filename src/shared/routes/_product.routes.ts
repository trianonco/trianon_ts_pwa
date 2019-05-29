export const PRODUCT_ROUTES = [

    {
        path: "/product/:productRef",
        name: "Product",
        component: () => import(/* webpackChunkName: "shopProduct" */  "./../../views/product/product.view.vue")
    },
];
