<script setup>
import { ref } from 'vue'

const iconName = ref(null)

const icons = [
  { name: 'HTML', src: 'src/assets/logos/html-5.png' },
  { name: 'CSS', src: 'src/assets/logos/css-3.png' },
  { name: 'JavaScript', src: 'src/assets/logos/js.png' },
  { name: 'Node.js', src: 'src/assets/logos/node-js.png' },
  { name: 'Vue.js', src: 'src/assets/logos/vue-js.png' },
  { name: 'TailwindCSS', src: 'src/assets/logos/tailwind-icon.svg' },
  { name: 'Python', src: 'src/assets/logos/python.png' },
  { name: 'Django', src: 'src/assets/logos/django.png' },
  { name: 'PostgreSQL', src: 'src/assets/logos/postgre.png' }
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
