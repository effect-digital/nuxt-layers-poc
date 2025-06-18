// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },

    css: ['~/assets/css/main.css'],

    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/ui',
        '@storyblok/nuxt'
    ],

    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],

    storyblok: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        componentsDir: '~/components'
    }
})
