<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';
import EducationContent from '@/components/EducationContent.vue'
import MainTablet from '@/components/MainTablet.vue'

const target = ref(null)
const visibilityStore = useVisibilityStore()
const targetIsVisible = useElementVisibility(target, { threshold: 0.5 })

watch(targetIsVisible, (isVisible) => {
    visibilityStore.toggleVisiblity(2, isVisible)
})
</script>

<template>
    <div ref="target"
        class="flex snap-start min-h-lvh w-full items-center justify-center text-gray-200 bg-gradient-5 from-blue-950/25 from-70% to-80% to-black">
        <EducationContent/>
        <MainTablet class="ml-10"/>
    </div>
</template>