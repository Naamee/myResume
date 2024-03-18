<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';
import ContentCourses from '@/components/ContentCourses.vue'

const courses = ref(null)
defineExpose({courses})

const visibilityStore = useVisibilityStore()
const coursesIsVisible = useElementVisibility(courses, { threshold: 0.5 })


watch (coursesIsVisible, (isVisible) => {
  visibilityStore.toggleVisiblity(3, isVisible)
})
</script>

<template>
    <div ref="courses" class="flex md:pt-10 snap-start min-h-lvh w-full items-center justify-center text-white bg-gradient-358 from-black from-70%  to-90% to-blue-950/25">
      <ContentCourses />
    </div>
</template>