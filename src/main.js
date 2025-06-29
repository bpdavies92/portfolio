/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import VueApexCharts from "vue3-apexcharts";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import '@/styles/main.scss'

const app = createApp(App)

app.use(VueApexCharts);

registerPlugins(app)

app.mount('#app')
