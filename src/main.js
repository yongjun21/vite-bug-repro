import { createApp } from 'vue'
import App from './App.vue'

import { load } from '@loaders.gl/core'
import { ImageLoader } from '@loaders.gl/images'

import IMAGE_URL from './assets/logo.png?url'

createApp(App).mount('#app')

getImage(IMAGE_URL).then(console.log)

async function getImage (url) {
  return await load(url, ImageLoader)
}
