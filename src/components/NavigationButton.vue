<script setup>
import { ref } from 'vue'

const props = defineProps({
  btnText: String,
})

const isHidden = ref(false)
</script>

<template>
  <div @mouseover="isHidden = true" @mouseleave="isHidden = false" class="flex space-x-5 items-center">
    <button class="w-3 h-3 rounded-sm border border-sky-300"></button>
    <Transition>
        <p v-if="isHidden" class="absolute mt-10 -left-5 text-nowrap text-sm text-white">{{ props.btnText }}</p>
    </Transition>
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