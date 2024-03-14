<script setup>
import MainIconContainer from '@/components/MainIconContainer.vue'

import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';

const target = ref(null)
const visibilityStore = useVisibilityStore()
const targetIsVisible = useElementVisibility(target, { threshold: 0.5 })

watch(targetIsVisible, (isVisible) => {
  visibilityStore.toggleVisiblity(1, isVisible)
})
</script>

<template>
  <div ref="target" class="bg-black flex flex-col md:flex-row snap-start min-h-lvh w-full items-center justify-center">
    <!-- Profile Picture -->
    <img class="h-52 md:h-72" alt="profilePicture" src="../assets/profilePicture.jpg" />
    <div class="flex flex-col md:ml-10 text-gray-300 text-sm items-center md:items-start">
      <!-- Name -->
      <h1 class="hidden md:block mt-5 text-6xl">Ahmed <br> Naamee Akram</h1>
      <h1 class="md:hidden mt-5 text-3xl">Ahmed Naamee Akram</h1>
      <p>Accountant / Auditor / Developer(?)</p>
      <div class="flex flex-col items-center md:items-start mt-4">
        <p>IT Stuff(?):</p>
        <MainIconContainer class="mt-1" />
      </div>
    </div>
  </div>
</template>
