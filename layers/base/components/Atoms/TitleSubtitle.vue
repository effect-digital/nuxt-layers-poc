<template>
    <div :class="styles.root({ class: props.ui?.root })">
        <span
            v-if="!!slots.brow || !!props.brow"
            :class="styles.brow({ class: props.ui?.brow })"
        >
            {{ props.brow }}
        </span>
        <component
            :is="props.as ?? 'h2'"
            v-if="props.title || slots.title"
            :class="styles.title({ class: props.ui?.title })"
        >
            {{ props.title }}
        </component>
    </div>
</template>

<script setup lang="ts">
import {
    titleSubtitle,
    type TitleSubtitleProps,
    type TitleSubtitleSlots
} from '../../presets'

const props = defineProps<TitleSubtitleProps>()
const slots = defineSlots<TitleSubtitleSlots>()

const styles = useComponentStyles('titleSubtitle', titleSubtitle)
</script>
