/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/pages/index.vue";
import Account from "@/components/Account.vue";
import Setting from "@/components/Setting.vue";



/*import error from "@/components/error.vue";*/

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),

    routes: [{
            path: "/",
            name: "Index",
            component: Index,
        },
        {
            path: "/account",
            name: "Account",
            component: Account,
        },
        {
            path: "/setting",
            name: "Setting",
            component: Setting,
        },

    ]
})

export default router
