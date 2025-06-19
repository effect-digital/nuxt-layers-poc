export default defineAppConfig({
    // Nuxt UI configuration
    ui: {
        colors: {
            secondary: 'blue',
            tertiary: 'chocolate'
        },

        icons: {
            arrowLeft: 'i-bx-left-arrow-alt',
            arrowRight: 'i-bx-right-arrow-alt'
        }
    },

    // Application configuration
    layer: {
        collectionHomes: {
            slots: {
                root: 'bg-amber-50 my-20',
                carouselContainer: '',
                carouselItem: ''
            },

            config: {
                brow: 'This is a brow',
                title: 'This is a title',
                buttonLabel: 'View all homes',
                buttonVariant: 'solid',
                buttonColor: 'tertiary',
                buttonPath: '/',
                card: {
                    variant: 'inline',
                    buttonLabel: 'View Home',
                    buttonColor: 'secondary',
                    buttonVariant: 'solid',
                    allowFavourite: true
                }
            }
        },

        singleUnitCard: {
            slots: {
                root: 'bg-amber-950',
                title: 'text-white',
                details: 'text-gray-100',
                buttonWrapper: 'text-white'
            },

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
