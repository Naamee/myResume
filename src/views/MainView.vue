<script setup>
import NavigationMain from '@/components/NavigationMain.vue'
import MainHome from '@/components/MainHome.vue'
import MainEducation from '@/components/MainEducation.vue'
import MainWorkExperience from '@/components/MainWorkExperience.vue';
import MainProjects from '@/components/MainProjects.vue';
import MainCourses from '@/components/MainCourses.vue';
</script>

<template>
  <main class="flex flex-col h-screen snap-y snap-mandatory overflow-y-scroll items-center">
    <NavigationMain />
    <MainHome />
    <MainEducation />
    <MainCourses />
    <MainWorkExperience />
    <MainProjects />
  </main>
</template>
