export const SHOP_ROUTES = [
    {
        path: "/shop",
        name: "shop",
        component: () => import(/* webpackChunkName: "about" */  "./../../views/shop/shop.view.vue")
    },

    {
        path: "/shop/categories/:category",
        name: "shopCategory",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/shop/shop.view.vue")
    },

    {
        path: "/shop/gender/:gender",
        name: "shopGender",
        component: () => import(/* webpackChunkName: "about" */  "./../../views/shop/shop.view.vue")
    },

    {
        path: "/shop/categories/:category/gender/:gender",
        name: "shopCategoryGender",
        component: () => import(/* webpackChunkName: "about" */  "./../../views/shop/shop.view.vue")
    },

];
