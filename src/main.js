import { createApp } from 'vue'

import App from './App.vue'
import ContactUs from './components/ContactUs.vue'
import './assets/tailwind.css';

const app = createApp(App)
app.component('contact-us', ContactUs)
app.mount('#app')
