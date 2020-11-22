export const PRODUCT_ROUTES = [

    {
        path: "/product/gender/:gender/category/:category/ref/:ref",
        name: "Product",
        component: () => import(/* webpackChunkName: "shopProduct" */  "./../../views/product/product.view.vue")
    },

    {
        path: "/product/gender/:gender/category/:category/ref/:ref/description/:description/color/:color/line/:line/photo/:photo",
        name: "Product",
        component: () => import(/* webpackChunkName: "shopProduct" */  "./../../views/product/product.view.vue")
    },
];
