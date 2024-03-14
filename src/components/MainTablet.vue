<script setup>
const props = defineProps({
    url: String
})
</script>

<template>
    <div class="w-80 h-100 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 flex items-center justify-center rounded-md">
        <div class="w-72 h-96 bg-white">
            <iframe class="w-72 h-96" :src="props.url"></iframe>
        </div>
    </div>
</template>