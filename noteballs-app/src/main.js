import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue'
import router from './router'
import { vAutoFocus } from './directives/AutoFocus';

const app = createApp(App);
const pinia = createPinia();

// Add global directives
app.directive('auto-focus', vAutoFocus);

app
  .use(VueToast)
  .use(pinia)
  .use(router)
  .mount('#app')
