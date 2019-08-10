import HomeView from '@/views/home/home.view.vue';

export const HOME_ROUTES = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home2',
    component: HomeView
  }
];
