<script setup>
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'

const random = () => Math.floor(Math.random() * 100)
</script>

<template>
    <div class="animation-main w-screen h-screen overflow-hidden absolute -z-10">
        <div class="flex flex-wrap">
        <div v-for="index in 500" :style="{ animationDuration: `calc(400s / ${random()})` }" class="letters size-5 bg-blue-950/50 border border-white/50 blur rounded-full"></div>  
        </div>   
    </div> 
</template>

<style scoped>
.letters {
    animation: fly 25s linear infinite;
}

@keyframes fly {
    0% {
        transform: translateY(1000px);
    }
    50% {
        transform: translateX(-50px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>