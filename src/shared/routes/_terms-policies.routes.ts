export const TERMS_AND_POLICIES_ROUTES = [
    {
        path: "/terms",
        name: "terms",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/About.vue")
    }
];
