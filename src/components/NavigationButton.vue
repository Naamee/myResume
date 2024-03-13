<script setup>
import { ref } from 'vue'

const props = defineProps({
  btnText: String,
  isVisible: Boolean,
})

const isHidden = ref(false)
</script>

<template>
  <div @mouseover="isHidden = true" @mouseleave="isHidden = false" class="flex space-x-5 items-center">
    <button class=""
      :class="props.isVisible === true ? 'text-sky-950' : 'text-gray-400'"> {{ props.btnText }}
    </button>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>