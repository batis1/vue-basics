import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/main.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;
import "./filters"; //Global Filters
// Make Bold custom Directive
Vue.directive("bold", {
    bind: function (el) {
        el.style.fontWeight = "bold";
    },
});
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
