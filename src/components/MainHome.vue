<script setup>
import MainIconContainer from '@/components/MainIconContainer.vue'

import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';

const target = ref(null)
const visibilityStore = useVisibilityStore()
const targetIsVisible = useElementVisibility(target, { threshold: 0.5 })

watch (targetIsVisible, (isVisible) => {
  visibilityStore.toggleVisiblity(1, isVisible)
})
</script>

<template>
  <div ref="target" class="bg-black flex flex-col md:flex-row snap-start min-h-lvh w-full items-center justify-center">
    <!-- Profile Picture -->
    <img  class="h-64" alt="profilePicture" src="../assets/profilePicture.jpg" />
    <div class="flex flex-col ml-10 text-gray-300 text-balance whitespace-nowrap text-clip w-5/12">
          <!-- Name -->
      <h1 class="mt-5 text-7xl">Ahmed Naamee Akram</h1>
      <p>Accountant / Auditor / Developer(?)</p>
      <div class="mt-4">
        <p>IT Stuff(?):</p>
        <MainIconContainer class="mt-1"/>
    </div>
  </div>
  </div>
</template>
