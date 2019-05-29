export const ABOUT_ROUTES = [
    {
        path: "/about-2",
        name: "about-2",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/About.vue")
    }
];
