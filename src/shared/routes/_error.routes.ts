export const ERRORS_ROUTES = [
    {
        path: "*",
        name: "ERROR_404",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/About.vue")
    }
];
