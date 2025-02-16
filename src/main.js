//import { createApp } from 'vue'
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { createPinia } from 'https://unpkg.com/pinia@2/dist/pinia.esm-browser.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')