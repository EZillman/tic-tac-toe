import { createRouter, createWebHashHistory } from "vue-router";
import  LandingPage  from "../src/components/LandingPage.vue"
import  GamePage  from "../src/components/GamePage.vue"

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: LandingPage,
        },
        {
            path: "/game",
            component: GamePage,
        }
    ]
});