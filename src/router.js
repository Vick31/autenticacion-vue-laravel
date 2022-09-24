import { createWebHistory, createRouter } from "vue-router";
import Register from "./components/Register.vue";
import Account from "./components/Account.vue";
import Home from "./components/Home.vue";
import ForgotPassword from "./components/ForgotPassword.vue";
import ResetPassword from "./components/ResetPassword.vue";
import Select from "./components/Select.vue"
import Nav from "./components/Nav.vue"
import Aside from "./components/Aside.vue"
import Companies from "./components/companies.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        components: {
            default: Home,
            navbar: Nav,
            aside: Aside,
        },

    },
    {
        path: "/companies",
        name: "Company",
        components: {
            default: Companies,
            navbar: Nav,
            aside: Aside,
        },

    },
    {
        path: "/register",
        name: "Register",
        components: { 
            default: Register,
            navbar: Nav,
        }
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
    },
    {
        path: "/companies/select",
        name: "Select",
        components: { 
            default: Select,
            navbar: Nav,
            aside: Aside,
        },
    },
];

const _router = createRouter({
    history: createWebHistory(),
    routes,
}); 

export default _router;

