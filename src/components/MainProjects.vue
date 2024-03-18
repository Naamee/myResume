<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';
import ContentProjects from './ContentProjects.vue';

const projects = ref(null)
defineExpose({projects})

const visibilityStore = useVisibilityStore()
const projectsIsVisible = useElementVisibility(projects, { threshold: 0.5 })

watch (projectsIsVisible, (isVisible) => {
  visibilityStore.toggleVisiblity(5, isVisible)
})
</script>

<template>
    <div ref="projects"  class="flex flex-col snap-start min-h-lvh w-full items-center justify-center text-white bg-gradient-358 from-black from-70% to-80% to-blue-950/25">
      <ContentProjects />
    </div>
</template>