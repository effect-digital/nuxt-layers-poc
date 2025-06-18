<template>
    <UCard
        :ui="{
            root: style.root({ class: props.ui?.root }),
            header: style.header({ class: props.ui?.header }),
            body: style.body({ class: props.ui?.body }),
            footer: style.footer({ class: props.ui?.footer })
        }"
    >
        <!-- Header -->
        <template #header>
            <span v-if="tag" :class="style.tag({ class: props.ui?.tag })">
                {{ tag }}
            </span>
            <div :class="style.imageWrapper({ class: props.ui?.imageWrapper })">
                <UCarousel
                    v-if="hasMultipleImages"
                    v-slot="{ item }"
                    :items="images"
                    dots
                    arrows
                    :prev="{
                        variant: config?.carousel?.next?.variant,
                        color: config?.carousel?.next?.color
                    }"
                    :next="{
                        variant: config?.carousel?.prev?.variant,
                        color: config?.carousel?.prev?.color
                    }"
                    :ui="{
                        dots: style.dots({ class: props.ui?.dots }),
                        dot: style.dot({ class: props.ui?.dot }),
                        arrows: style.arrows({ class: props.ui?.arrows }),
                        prev: style.prev({ class: props.ui?.prev }),
                        next: style.next({ class: props.ui?.next })
                    }"
                >
                    <NuxtImg
                        :src="item"
                        :class="style.image({ class: props.ui?.image })"
                        format="webp"
                    />
                </UCarousel>
                <NuxtImg
                    v-else
                    :src="images?.[0] || ''"
                    :class="style.image({ class: props.ui?.image })"
                />
            </div>
        </template>

        <!-- Body -->
        <div :class="style.body({ class: props.ui?.body })">
            <div>
                <h3 :class="style.title({ class: props.ui?.title })">
                    {{ title }}
                </h3>
                <span
                    v-if="subTitle"
                    :class="style.subTitle({ class: props.ui?.subTitle })"
                >
                    {{ subTitle }}
                </span>
            </div>
            <ul :class="style.details({ class: props.ui?.details })">
                <li v-for="(line, i) in filteredOverview" :key="i">
                    {{ line }}
                </li>
            </ul>
        </div>

        <!-- Footer -->
        <template #footer>
            <div
                :class="style.buttonWrapper({ class: props.ui?.buttonWrapper })"
            >
                <div>{{ price }}</div>
                <UButton
                    v-if="buttonLabel"
                    :label="buttonLabel"
                    :variant="buttonVariant"
                    :color="buttonColor"
                    :to="to"
                    size="xl"
                />
            </div>
        </template>
    </UCard>
</template>

<script setup lang="ts">
import {
    singleUnitCard,
    type SingleUnitCardProps,
    type SingleUnitCardConfig
} from '../../presets'

const props = defineProps<SingleUnitCardProps>()
const style = useComponentStyles('singleUnitCard', singleUnitCard)
const config = useLayerConfig<SingleUnitCardConfig>('singleUnitCard')

const hasMultipleImages = computed(
    () => props.images && props.images.length > 1
)

const filteredOverview = computed(() => {
    return [
        props.bedrooms,
        props.furnished,
        props.sqft?.toLowerCase(),
        props.level ? `FL ${props.level}` : null
    ].filter(Boolean)
})
</script>
