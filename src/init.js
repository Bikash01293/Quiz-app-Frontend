import '@/plugins';


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import AppSpinner from '@/components/utils/AppSpinner';
import AppAlert from '@/components/utils/AppAlert';


import '@/services/configureAxios'


Vue.component( 'AppSpinner', AppSpinner );
Vue.component( 'AppAlert', AppAlert);


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
