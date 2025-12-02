import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createGtm } from '@gtm-support/vue-gtm'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

// Google Tag Manager
app.use(createGtm({
  id: 'GTM-PC8W5PG',
  enabled: true,
  debug: true,
  vueRouter: router,
  loadScript: true
}))

// Google Analytics
app.use(VueGtag, {
  property: {
    id: 'UA-67536410-4',
    params: {
      anonymize_ip: true
    }
  }
}, router)

app.use(router).mount('#app')
