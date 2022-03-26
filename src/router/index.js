import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import HelpView from "../views/HelpView.vue";
import BlogView from "../views/BlogView.vue";
import LoginView from "../views/LoginView.vue";
import PostViewShow from "../views/PostViewShow.vue";
import PostCreateView from "../views/PostCreateView.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/help",
        name: "help",
        component: HelpView,
    },
    {
        path: "/posts",
        name: "posts",
        component: BlogView,
    },
    {
        path: "/posts/create",
        name: "PostCreate",
        component: PostCreateView,
    },
    {
        path: "/posts/:id",
        name: "blogShow",
        component: PostViewShow,
        props: true,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
