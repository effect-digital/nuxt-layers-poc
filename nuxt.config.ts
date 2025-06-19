// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },

    css: ['~/assets/css/main.css'],

    extends: [
        [
            'github:effect-digital/wol-layer',
            {
                auth: process.env.GIGET_AUTH,
                install: true,
                meta: {
                    name: 'WoL Layer'
                }
            }
        ]
    ],

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
    },

    image: {
        format: ['avif', 'webp'],
        quality: 75,
        densities: [1, 2],
        cloudflare: {
            baseURL: 'https://www.thedraper.com'
        },
        providers: {
            storyblok: {
                provider: 'storyblok',
                baseURL: 'https://a.storyblok.com'
            },
            netlify: {
                provider: 'netlify'
            }
        },
        domains: [
            'https://wol-everest.s3.eu-west-2.amazonaws.com',
            'localhost',
            'https://flagcdn.com',
            'https://curator-assets.b-cdn.net'
        ]
    },

    ui: {
        theme: {
            colors: [
                'primary',
                'secondary',
                'tertiary',
                'info',
                'success',
                'warning',
                'error'
            ]
        }
    }

    // typescript: {
    //     typeCheck: true,
    //     strict: true,
    //     tsConfig: {
    //         compilerOptions: {
    //             strict: true
    //         },
    //         include: [
    //             '@pinia/nuxt',
    //             '@types/node',
    //             '@nuxt/image',
    //             '@nuxt/types',
    //             '**/*.d.ts'
    //         ]
    //     }
    // }
})
