<script setup>
import { watchEffect } from 'vue'
import NavigationButton from "@/components/NavigationButton.vue"; 
import { useScrollStore } from '@/stores/scrollStore';

const scrollStore = useScrollStore();
let highlightText = scrollStore.pages[scrollStore.currentPageNo]

const checkScroll = () => {    
    const pages = scrollStore.pages
    const pageNo = Object.keys(pages).find(key => pages[key] === pages[scrollStore.currentPageNo])
    scrollStore.setCurrentPage(Number(pageNo))
}

watchEffect(() => {
    checkScroll()
    highlightText = scrollStore.pages[scrollStore.currentPageNo]
})
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