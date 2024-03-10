<script setup>
import MainIconContainer from '@/components/MainIconContainer.vue'

import {  onMounted, ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useScrollStore } from '@/stores/scrollStore';

const scrollStore = useScrollStore()

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

watch (targetIsVisible, (isVisible) => {
  scrollStore.setTargetIsVisible(1, isVisible)
})
</script>

<template>
  <div class="flex flex-col snap-start min-h-lvh w-full items-center justify-center">
    <!-- Profile Picture -->
    <img ref="target" class="h-60" alt="profilePicture" src="../assets/profilePicture.jpg" />
    <!-- Name -->
    <h1 class="mt-5 text-gray-200 text-3xl">Ahmed Naamee Akram</h1>
    <MainIconContainer class="mt-1" />
  </div>
</template>
