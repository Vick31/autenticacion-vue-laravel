import { createWebHistory, createRouter } from "vue-router";
import Register from "./components/Register.vue";
import Account from "./components/Account.vue";
import Home from "./components/Home.vue";
import ForgotPassword from "./components/ForgotPassword.vue";
import ResetPassword from "./components/ResetPassword.vue";


const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,

    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        component: ResetPassword,
    }
];

const _router = createRouter({
    history: createWebHistory(),
    routes,
}); 

export default _router;

