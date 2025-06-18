<template>
    <section :class="styles.root({ class: props.ui?.root })">
        <div :class="styles.container({ class: props.ui?.container })">
            <header :class="styles.header({ class: props.ui?.header })">
                <TitleSubtitle :brow="config?.brow" :title="config?.title" />
                <UButton
                    v-if="config?.buttonLabel"
                    :to="config?.buttonPath"
                    :label="config?.buttonLabel"
                    :color="config?.buttonColor"
                    :variant="config?.buttonVariant"
                    size="xl"
                />
            </header>
            <div :class="styles.body({ class: props.ui?.body })">
                <UCarousel
                    v-slot="{ item }"
                    :items="items"
                    :ui="{
                        container: styles.carouselContainer({
                            class: props.ui?.carouselContainer
                        }),
                        item: styles.carouselItem({
                            class: props.ui?.carouselItem
                        })
                    }"
                    align="start"
                >
                    <SingleUnitCard
                        to="/"
                        title="Title text"
                        sub-title="Sub title text"
                        beds="2 Bedroom"
                        furnished="Furnished"
                        sqft="1,200 sqft"
                        level="2"
                        price="£1,000 PM"
                        :images="items"
                        :button-label="config?.card?.buttonLabel"
                        :button-variant="config?.card?.buttonVariant"
                        :button-color="config?.card?.buttonColor"
                    />
                </UCarousel>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {
    collectionHomes,
    type CollectionHomesConfig,
    type CollectionHomesProps
} from '../../presets'

const props = defineProps<CollectionHomesProps>()
const config = useLayerConfig<CollectionHomesConfig>('collectionHomes')

const styles = useComponentStyles('collectionHomes', collectionHomes)

const items = [
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
    'https://picsum.photos/640/640?random=3',
    'https://picsum.photos/640/640?random=4',
    'https://picsum.photos/640/640?random=5',
    'https://picsum.photos/640/640?random=6'
]
</script>
