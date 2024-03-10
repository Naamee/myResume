<script setup>
import NavigationButton from "@/components/NavigationButton.vue"; 
</script>

<template>
        <div class="fixed flex space-x-2 left-10 mt-10">
        <NavigationButton btnText="About Me" :highlight="highlightText"/>
        <NavigationButton btnText="Education" :highlight="highlightText"/>
        <NavigationButton btnText="Courses" :highlight="highlightText"/>
        <NavigationButton btnText="Work Experience" :highlight="highlightText"/>
        <NavigationButton btnText="Projects" :highlight="highlightText"/>
        <NavigationButton btnText="Other Skills" :highlight="highlightText"/>
    </div>
</template>