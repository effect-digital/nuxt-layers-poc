// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    devtools: { enabled: true },

    components: [
        {
            path: join(currentDir, 'components'),
            pathPrefix: false
        }
    ],

    alias: {
        '@presets': join(currentDir, 'presets')
    }
})
