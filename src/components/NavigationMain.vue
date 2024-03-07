<script setup>
import NavigationButton from "@/components/NavigationButton.vue"; 
import { useScroll } from "@vueuse/core";
</script>

<template>
        <div class="fixed flex space-x-2 left-10 mt-10">
        <NavigationButton btnText="About Me" />
        <NavigationButton btnText="Education" />
        <NavigationButton btnText="Courses" />
        <NavigationButton btnText="Work Experience" />
        <NavigationButton btnText="Projects" />
        <NavigationButton btnText="Other Skills"/>
    </div>
</template>