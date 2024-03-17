<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';
import ContentWork from './ContentWork.vue';

const target = ref(null)
const visibilityStore = useVisibilityStore()
const targetIsVisible = useElementVisibility(target, { threshold: 0.5 })

watch (targetIsVisible, (isVisible) => {
  visibilityStore.toggleVisiblity(4, isVisible)
})
</script>

<template>
    <div ref="target" class="flex flex-col snap-start min-h-lvh w-full items-center justify-center text-white bg-gradient-358 from-blue-950/25 from-70% to-80% to-black">
      <div class="flex flex-col md:flex-row md:pt-10 snap-start min-h-lvh w-full items-center justify-center text-gray-200 bg-gradient-5 from-blue-950/25 from-70% to-80% to-black">
        <ContentWork/>
    </div>
    </div>
</template>