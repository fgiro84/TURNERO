/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/pages/index.vue";


/*import error from "@/components/error.vue";*/

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),

    routes: [{
            path: "/",
            name: "Index",
            component: Index,
        },

    ]
})

export default router