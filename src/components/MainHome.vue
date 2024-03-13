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
  <div ref="target" class="flex flex-col snap-start min-h-lvh w-full items-center justify-center">
    <!-- Profile Picture -->
    <img  class="h-60" alt="profilePicture" src="../assets/profilePicture.jpg" />
    <!-- Name -->
    <h1 class="mt-5 text-gray-200 text-3xl">Ahmed Naamee Akram</h1>
    <MainIconContainer class="mt-1" />
  </div>
</template>
