<script setup>
import { ref, watch, watchEffect } from 'vue';
import { useScroll } from "@vueuse/core";
import NavigationMain from '@/components/NavigationMain.vue'
import MainAboutMe from '@/components/MainAboutMe.vue'
import MainEducation from '@/components/MainEducation.vue'
import MainWorkExperience from '@/components/MainWorkExperience.vue';
import MainProjects from '@/components/MainProjects.vue';
import MainCourses from '@/components/MainCourses.vue';
import MainSkills from '@/components/MainSkills.vue';

import { useScrollStore } from '@/stores/scrollStore';

const scrollStore = useScrollStore();

const el = ref(null);
const { y } = useScroll(el)




watch (y, () => {
  scrollStore.scrollY(y)
})

</script>

<template>
  <main ref="el" class="flex flex-col h-screen snap-y snap-mandatory overflow-y-scroll md:items-center">
    <NavigationMain />
    <MainAboutMe />
    <MainEducation />
    <MainCourses />
    <MainWorkExperience />
    <MainProjects />
    <MainSkills />
  </main>
</template>
