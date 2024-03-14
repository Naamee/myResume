<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useVisibilityStore } from '@/stores/visibilityStore';

const target = ref(null)
const visibilityStore = useVisibilityStore()
const targetIsVisible = useElementVisibility(target, { threshold: 0.5 })

watch(targetIsVisible, (isVisible) => {
    visibilityStore.toggleVisiblity(2, isVisible)
})
</script>

<template>
    <div ref="target"
        class="flex flex-col snap-start min-h-lvh w-full items-center justify-center text-gray-200 bg-gradient-5 from-blue-950/25 from-70% to-80% to-black">
        <!-- <h1 class="text-5xl">Education</h1> -->
        <!-- Main Container -->
        <div class="mt-5 text-center">
            <div class="divide-y divide-dashed divide-white/30">
                <!-- Bachelors -->
                <div class="flex flex-col rounded-sm p-3">
                    <p class="text-xs font-light text-white/50">2018 - 2021</p>
                    <p class="text-md">BSc (Hons) in Accounting and Finance with Specialism in Taxation</p>
                    <p class="text-sm">Asia Pacific University, Malaysia</p>
                    <!-- <p class="text-xs text-amber-300">First Class Honors - CGPA 3.66</p> -->
                </div>
                <!-- Higher Secondary Education -->
                <div class="flex flex-col rounded-sm p-3">
                    <p class="text-xs font-light text-white/50">2015 - 2017</p>
                    <p class="text-md">Edexcel GCE & HSC</p>
                    <p class="text-sm">Center for Higher Education, Maldives</p>
                    <!-- <p class="text-xs text-amber-300">Dhivehi - B, Islam - A, Statistics - A, Principle of
                        Accounts - A, Business Studies - A, Economics - A*</p> -->
                </div>
                <!-- Secondary Education -->
                <div class="flex flex-col rounded-sm p-3">
                    <p class="text-xs font-light text-white/50">2012 - 2014</p>
                    <p class="text-md">SSC, IGCSE and GCSE</p>
                    <p class="text-sm">Kalaafaanu School, Maldives</p>
                    <!-- <p class="text-xs text-amber-300">Dhivehi - B, Islam - A, English as a Second
                        Language - A*, Mathematics - A, Principle of
                        Accounts - A*, Business Studies - A, Economics - A,
                        Computer Studies - A*
                    </p> -->
                </div>
            </div>
        </div>
    </div>
</template>