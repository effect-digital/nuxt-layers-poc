export default defineAppConfig({
    // Nuxt UI configuration
    ui: {
        icons: {
            arrowLeft: 'i-bx-left-arrow-alt',
            arrowRight: 'i-bx-right-arrow-alt'
        }
    },

    // Application configuration
    layer: {
        collectionHomes: {
            slots: {
                root: 'bg-gray-50'
            },

            config: {
                brow: 'This is a brow',
                title: 'This is a title',
                buttonLabel: 'View all homes',
                buttonVariant: 'solid',
                buttonColor: 'neutral',
                buttonPath: '/',

                card: {
                    variant: 'inline',
                    buttonLabel: 'View Home',
                    buttonVariant: 'outline',
                    buttonColor: 'neutral',

                    allowFavourite: true
                }
            }
        },

        singleUnitCard: {
            slots: {},

            config: {
                carousel: {
                    prev: {
                        color: 'neutral',
                        variant: 'solid'
                    },
                    next: {
                        color: 'neutral',
                        variant: 'solid'
                    }
                }
            }
        }
    }
})
