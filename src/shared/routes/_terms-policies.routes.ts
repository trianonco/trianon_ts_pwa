export const TERMS_AND_POLICIES_ROUTES = [
    {
        path: "/safe",
        name: "safe",
        component: () => import(/* webpackChunkName: "safe.view" */ "./../../views/terms-policies/safe.view.vue")
    },
    {
        path: "/terms",
        name: "terms",
        component: () => import(/* webpackChunkName: "terms.view" */ "./../../views/terms-policies/terms.view.vue")
    },
    {
        path: "/politics",
        name: "politics",
        component: () => import(/* webpackChunkName: "politics.view" */ "./../../views/terms-policies/politics.view.vue")
    }
    ,
    {
        path: "/sitemap",
        name: "sitemap",
        component: () => import(/* webpackChunkName: "sitemap.view" */ "./../../views/terms-policies/sitemap.view.vue")
    }
];
