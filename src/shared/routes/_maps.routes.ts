export const MAPS_ROUTES = [
    {
        path: "/view/maps/edit",
        name: "maps",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/About.vue")
    }
];
