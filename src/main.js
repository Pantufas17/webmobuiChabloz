import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js' // On importe notre routeur

const app = createApp(App)
app.use(router) // On dit à Vue de l'utiliser
app.mount('#app')