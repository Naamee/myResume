<script setup>
import { ref, watchEffect } from 'vue'
import MainIconContainer from '@/components/MainIconContainer.vue'

const elementRef = ref(null);
let elementHeight = 0;


watchEffect(() => {
 if (elementRef.value) {
    elementHeight = elementRef.value.clientHeight;
    console.log(elementHeight); // Logs the height of the element
 }
});
</script>

<template>
  <div ref="elementRef" class="flex flex-col snap-start min-h-lvh w-full items-center justify-center">
    <!-- Profile Picture -->
    <img class="h-60" alt="profilePicture" src="../assets/profilePicture.jpg" />
    <!-- Name -->
    <h1 class="mt-5 text-gray-200 text-3xl">Ahmed Naamee Akram</h1>
    <MainIconContainer class="mt-1" />
  </div>
</template>
