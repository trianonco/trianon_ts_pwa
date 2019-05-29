import Auth from "./../auth/authStatus";

export const LOGIN_ROUTES = [
    {
        path: "/view/signin",
        name: "signin",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/login/signin.view.vue"),

        beforeEnter: (to: any, from: any, next: any) => {
            const auth = new Auth();
            auth.isLogged()
                .then(() => {
                    next();
                })
                .catch(() => {
                    next();
                });
        }
    },
    {
        path: "/view/signup",
        name: "signup",
        component: () => import(/* webpackChunkName: "about" */ "./../../views/login/signup.view.vue"),

        beforeEnter: (to: any, from: any, next: any) => {
            const auth = new Auth();
            auth.isLogged()
                .then(() => {
                    next("/view/profile");
                })
                .catch(() => {
                    next("/view/signup");
                });
        }
    }
];
