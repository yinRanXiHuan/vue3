import './assets/main.css'

import { createApp } from 'vue'
import Pinia from '@/stores/index'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Pinia)
app.use(router)

app.mount('#app')
