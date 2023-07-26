import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { vAutofocus } from './directives/AutoFocus'

const app = createApp(App)

app.directive('autofocus', vAutofocus)

app.use(createPinia())
app.use(router)

app.mount('#app')
