import 'nuxt/schema'
import type { CollectionHomes, TitleSubtitle, SingleUnitCard } from '../presets'

declare module 'nuxt/schema' {
    interface AppConfig {
        layer: {
            collectionHomes?: {
                ui: CollectionHomes
            }
            titleSubtitle?: TitleSubtitle
            singleUnitCard?: SingleUnitCard
        }
    }
}
