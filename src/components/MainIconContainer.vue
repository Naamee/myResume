<script setup>
import { ref } from 'vue'

const iconName = ref(null)

const icons = [
  { name: 'HTML', src: 'public/logos/html-5.png' },
  { name: 'CSS', src: 'public/logos/css-3.png' },
  { name: 'JavaScript', src: 'public/logos/js.png' },
  { name: 'Node.js', src: 'public/logos/node-js.png' },
  { name: 'Vue.js', src: 'public/logos/vue-js.png' },
  { name: 'TailwindCSS', src: 'public/logos/tailwind-icon.svg' },
  { name: 'Python', src: 'public/logos/python.png' },
  { name: 'Django', src: 'public/logos/django.png' },
  { name: 'PostgreSQL', src: 'public/logos/postgre.png' }
]
</script>

<template>
  <div class="relative flex text-sky-600/30 space-x-2">
    <!-- Icons -->
    <img
      v-for="icon in icons"
      :key="icon.name"
      @mouseenter="iconName = icon.name"
      @mouseleave="iconName = ''"
      class="hover:scale-150 transition ease-out"
      :class="icon.name === 'Django' ? 'w-7' : 'w-4'"
      :alt="icon.name"
      :src="icon.src"
    />
  </div>
</template>
