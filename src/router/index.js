/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
// Composables
import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index.vue";
import Boxs from "@/pages/index2.vue";
import Caller from "@/components/Caller.vue";
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
            props: (route) => ({
                sharedselectedOption: route.query.selectedOption || "Tienda: Vicente López",
                sharedselectedCountry: route.query.selectedCountry || "Argentina",
                sharedgeneral: route.query.general || false,
            }),
        },
        {
            path: "/boxs",
            name: "Boxs",
            component: Boxs,
        },
        {
            path: "/caller",
            name: "Caller",
            component: Caller,
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
    ],
});

export default router;