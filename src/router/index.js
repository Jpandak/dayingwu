import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('../views/AboutView.vue')
        },
        {
            path: '/care',
            name: 'care',
            component: () =>
                import ('../views/CareView.vue')
        },
        {
            path: '/parrot/:id',
            name: 'parrot-detail',
            component: () =>
                import ('../views/ParrotDetailView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
})

export default router