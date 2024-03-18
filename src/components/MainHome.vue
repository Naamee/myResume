<script setup>
import MainIconContainer from '@/components/MainIconContainer.vue'

import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';

const home = ref(null)
defineExpose({home})

const visibilityStore = useVisibilityStore()
const homeIsVisible = useElementVisibility(home, { threshold: 0.5 })

watch(homeIsVisible, (isVisible) => {
  visibilityStore.toggleVisiblity(1, isVisible)
})
</script>

<template>
  <div ref="home" class="bg-black flex flex-col md:flex-row snap-start min-h-lvh w-full items-center justify-center">
    <!-- Profile Picture -->
    <img class="h-52 md:h-72" alt="profilePicture" src="../assets/profilePicture.jpg" />
    <div class="flex flex-col md:ml-10 text-gray-300 text-sm 2xl:text-base items-center md:items-start">
      <!-- Name -->
      <h1 class="hidden md:block mt-5 text-6xl 2xl:text-7xl">Ahmed <br> Naamee Akram</h1>
      <h1 class="md:hidden mt-5 text-3xl 2xl:text-4xl">Ahmed Naamee Akram</h1>
      <p>Accountant / Auditor / Developer(?)</p>
      <div class="flex flex-col items-center md:items-start mt-4">
        <p>IT Stuff(?):</p>
        <MainIconContainer class="mt-1" />
      </div>
    </div>
  </div>
</template>
