<script setup>
import { ref } from 'vue'
import NavigationMain from '@/components/NavigationMain.vue'
import MainHome from '@/components/MainHome.vue'
import MainEducation from '@/components/MainEducation.vue'
import MainWorkExperience from '@/components/MainWorkExperience.vue';
import MainProjects from '@/components/MainProjects.vue';
import MainCourses from '@/components/MainCourses.vue';

const home = ref('')
const education = ref('')
const courses = ref('')
const work = ref('')
const projects = ref('')

function scrollToElement(element) {
 const elements = {
    home: home.value.home,
    education: education.value.education,
    courses: courses.value.courses,
    work: work.value.work,
    projects: projects.value.projects
 };

 const targetElement = elements[element];
 if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
 }
}
</script>

<template>
  <main class="flex flex-col h-screen snap-y snap-mandatory overflow-y-scroll items-center scrollbar scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
    <NavigationMain @home="scrollToElement('home')" @education="scrollToElement('education')" @courses="scrollToElement('courses')" @work="scrollToElement('work')" @projects="scrollToElement('projects')"/>
    <MainHome ref="home"/>
    <MainEducation ref="education"/>
    <MainCourses ref="courses"/>
    <MainWorkExperience ref="work"/>
    <MainProjects ref="projects"/>
  </main>
</template>
