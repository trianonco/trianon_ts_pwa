import Auth from "./../auth/authStatus";
export const PROFILE_ROUTES = [
    {
        path: "/view/profile",
        name: "profile",
        component: () => import(/* webpackChunkName: "profile" */ "./../../views/profile/profile.view.vue"),
        beforeEnter: (to: any, from: any, next: any) => {
            const auth = new Auth();
            auth.isLogged()
                .then(() => {
                    next();
                })
                .catch(() => {
                    next("/");
                });
        }

    },
    {
        path: "/view/edit-profile",
        name: "edit-profile",
        component: () => import(/* webpackChunkName: "profile" */ "./../../views/profile/edit-profile.view.vue"),

    }
];
