import Auth from './../auth/authStatus';
export const ADMIN_ROUTES = [
    {
        path: "/admin",
        name: "admin",
        component: () => import(/* webpackChunkName: "admin" */"./../../views/admin/admin.view.vue"),
        beforeEnter: (to: any, from: any, next: any) => {
            const auth = new Auth();
            auth.isLogged()
                .then((response) => {
                    next();
                })
                .catch((error) => {
                    alert(error);
                    next("/")
                });
        }
    }
];
