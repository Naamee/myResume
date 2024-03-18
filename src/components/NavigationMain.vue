<script setup>
import NavigationButton from "@/components/NavigationButton.vue";
import { useVisibilityStore } from '@/stores/visibilityStore';

const visibilityStore = useVisibilityStore()
const isVisible = visibilityStore.isVisible
</script>

<template>
    <div class="fixed flex space-x-2 text-xs md:text-sm 2xl:text-base mt-10">
        <div class="mt-3 border-t border-gray-400 w-5 md:w-24"></div>
        <NavigationButton btnText="Home" :isVisible="isVisible[1]" />
        <NavigationButton btnText="Education" :isVisible="isVisible[2]" />
        <NavigationButton btnText="Courses" :isVisible="isVisible[3]" />
        <NavigationButton btnText="Work Experience" :isVisible="isVisible[4]" />
        <NavigationButton btnText="Projects" :isVisible="isVisible[5]" />
        <div class="mt-3 border-t border-gray-400 w-5 md:w-24"></div>
    </div>

</template>