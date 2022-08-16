import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Account from "./components/Account.vue";
import Home from "./components/Home.vue";
import ForgotPassword from "./components/ForgotPassword.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,

    },
    {
        path: "/login",
        name: "Login",
        component: Login,

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
    }
];

const _router = createRouter({
    history: createWebHistory(),
    routes,
}); 

export default _router;

