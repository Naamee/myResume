<script setup>
import NavigationButton from "@/components/NavigationButton.vue"; 
import { useVisibilityStore } from '@/stores/visibilityStore';

const visibilityStore = useVisibilityStore()
const isVisible = visibilityStore.isVisible
</script>

<template>
        <div class="fixed flex space-x-2 text-sm mt-10">
            <p class="text-gray-400 text-xs">_____________</p>
            <NavigationButton btnText="Home" :isVisible="isVisible[1]"/>
            <NavigationButton btnText="Education" :isVisible="isVisible[2]"/>
            <NavigationButton btnText="Courses" :isVisible="isVisible[3]"/>
            <NavigationButton btnText="Work Experience" :isVisible="isVisible[4]"/>
            <NavigationButton btnText="Projects" :isVisible="isVisible[5]"/>
            <p class="text-gray-400 text-xs">_____________</p>
    </div>
</template>