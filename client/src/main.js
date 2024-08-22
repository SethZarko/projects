import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { loggerMixin } from '@/mixins/loggerMixin.js';
import { scrollMixin } from '@/mixins/scrollMixin.js'

import router from './router.js'

const app = createApp(App)
app.use(router)

app.mixin(loggerMixin)
app.mixin(scrollMixin)
app.mount('#app')