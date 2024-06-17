// //
// import { createApp } from 'vue'

// import App from './App.vue'
// import router from './router'

// createApp(App).mount('#app')
// app.use(router)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
