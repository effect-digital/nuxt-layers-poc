<template>
    <SimilarHomes :items="homes" />
</template>

<script setup lang="ts">
const route = useRoute()

const story = await useAsyncStoryblok(route.path, {
    version: 'draft'
})

if (!story.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

// Test everest data for example component
const storyblokApi = useStoryblokApi()

const { data: homes } = await useAsyncData('homes', async () => {
    const res = await storyblokApi.get('cdn/stories', {
        starts_with: 'apartments/listings/',
        version: 'draft',
        is_startpage: false,
        per_page: 10
    })
    return res.data.stories as ApartmentSlides[]
})
</script>
