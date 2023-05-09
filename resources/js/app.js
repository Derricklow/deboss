require('./bootstrap');
import Vue from 'vue';
import VueMeta from 'vue-meta'
import { Link, App, plugin } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';
import BootstrapVue from 'bootstrap-vue'
import FontAwesome from '@fortawesome/fontawesome-pro/css/all.min.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'js-cookie';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Layout from '@/Components/Layout/Index'
import ContentWrapper from '@/Components/Layout/ContentWrapper'

InertiaProgress.init();

Vue.component("inertia-link", Link)
Vue.use(plugin)
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));
Vue.use(VueMeta)
Vue.use(VueSweetalert2);

Vue.mixin({
    methods:{
        route: window.route
    }
})

const el = document.getElementById('app');

new Vue({
    metaInfo: {
        titleTemplate: title => (title ? `${title} - Derrick's Scrum` : `Derrick's Scrum`)
    },
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`)
            .then(({ default: page }) => {
                if (page.layout === undefined) {
                    page.layout = [Layout, ContentWrapper]
                }
                return page
            })
        }
    }),
}).$mount(el)