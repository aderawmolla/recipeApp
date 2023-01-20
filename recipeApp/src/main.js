import './style.css'
import App from './App.vue'
import router from './routes/index'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo.js'
import {  createApp,provide, h } from 'vue'
const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})
app.use(router)
app.mount('#app')
