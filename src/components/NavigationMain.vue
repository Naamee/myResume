<script setup>
import NavigationButton from "@/components/NavigationButton.vue"; 
import { useVisibilityStore } from '@/stores/visibilityStore';

const visibilityStore = useVisibilityStore()
const isVisible = visibilityStore.isVisible
</script>

<template>
        <div class="fixed flex space-x-2 left-10 mt-10">
            <NavigationButton btnText="About Me" :isVisible="isVisible[1]"/>
            <NavigationButton btnText="Education" :isVisible="isVisible[2]"/>
            <NavigationButton btnText="Courses" :isVisible="isVisible[3]"/>
            <NavigationButton btnText="Work Experience" :isVisible="isVisible[4]"/>
            <NavigationButton btnText="Projects" :isVisible="isVisible[5]"/>
            <NavigationButton btnText="Other Skills" :isVisible="isVisible[6]"/>
    </div>
</template>