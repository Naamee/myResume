<script setup>
import { ref } from 'vue'

const iconName = ref(null)

const icons = [
  { name: 'HTML', src: 'logos/html-5.png' },
  { name: 'CSS', src: 'logos/css-3.png' },
  { name: 'JavaScript', src: 'logos/js.png' },
  { name: 'Node.js', src: 'logos/node-js.png' },
  { name: 'Vue.js', src: 'logos/vue-js.png' },
  { name: 'TailwindCSS', src: 'logos/tailwind-icon.svg' },
  { name: 'Python', src: 'logos/python.png' },
  { name: 'Django', src: 'logos/django.png' },
  { name: 'PostgreSQL', src: 'logos/postgre.png' }
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
