import { createRouter, createWebHistory } from 'vue-router'
import ClientPage from "@/components/clientPage"

const routes = [
    {
        path: '/',
        name: 'clientPage',
        component: ClientPage,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router