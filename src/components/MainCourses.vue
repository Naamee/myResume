<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';
import CoursesContent from '@/components/CoursesContent.vue'

const target = ref(null)
const visibilityStore = useVisibilityStore()
const targetIsVisible = useElementVisibility(target, { threshold: 0.5 })

watch (targetIsVisible, (isVisible) => {
  visibilityStore.toggleVisiblity(3, isVisible)
})
</script>

<template>
    <div ref="target" class="flex flex-col snap-start min-h-lvh w-full items-center justify-center text-white bg-gradient-358 from-black from-70%  to-90% to-blue-950/25">
      <CoursesContent />
    </div>
</template>