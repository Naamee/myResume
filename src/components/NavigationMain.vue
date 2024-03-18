    <script setup>
    import NavigationButton from "@/components/NavigationButton.vue";
    import { useVisibilityStore } from '@/stores/visibilityStore';

    const visibilityStore = useVisibilityStore()
    const isVisible = visibilityStore.isVisible
    const emit = defineEmits(['home', 'education', 'courses', 'work', 'projects']) 
    </script>

    <template>
        <div class="fixed flex space-x-2 text-xs md:text-sm 2xl:text-base mt-10">
            <div class="mt-3 border-t border-gray-400 w-5 md:w-24"></div>
            <NavigationButton btnText="Home" :isVisible="isVisible[1]" @click="emit('home')" />
            <NavigationButton btnText="Education" :isVisible="isVisible[2]" @click="emit('education')" />
            <NavigationButton btnText="Courses" :isVisible="isVisible[3]" @click="emit('courses')" />
            <NavigationButton btnText="Work Experience" :isVisible="isVisible[4]" @click="emit('work')" />
            <NavigationButton btnText="Projects" :isVisible="isVisible[5]" @click="emit('projects')" />
            <div class="mt-3 border-t border-gray-400 w-5 md:w-24"></div>
        </div>

    </template>