<script setup>
import NavigationMain from '@/components/NavigationMain.vue'
import MainAboutMe from '@/components/MainAboutMe.vue'
import MainCertificates from '@/components/MainCertificates.vue'
import MainWorkExperience from '@/components/MainWorkExperience.vue';
import MainProjects from '@/components/MainProjects.vue';
import MainSkills from '@/components/MainSkills.vue';
</script>

<template>
  <main class="flex flex-col h-screen snap-y snap-mandatory overflow-y-scroll md:items-center">
    <NavigationMain />
    <MainAboutMe />
    <MainCertificates />
    <MainWorkExperience />
    <MainProjects />
    <MainSkills />
  </main>
</template>
