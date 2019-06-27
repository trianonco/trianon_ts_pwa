export const AUTHORIZED_SHOPS_AND_DISTRIBUTORS_ROUTES = [
    {
        path: "/view/authorized/distributors",
        name: "AuthorizedDistributors",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/authorized/authorized-distributors.view.vue")
    },
    {
        path: "/view/authorized/distributors/city/:city",
        name: "AuthorizedDistributors",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/authorized/authorized-distributors.view.vue")
    },
    {
        path: "/view/authorized/shops",
        name: "AuthorizedShops",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/authorized/authorized-shops.view.vue")
    }
];
