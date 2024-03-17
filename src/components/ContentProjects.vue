<script setup>
const projects = [
    {
        name: 'ToDo Application',
        link: 'https://github.com/Naamee/todo_backend',
        languages: 'Vue, Vuetify, Django Rest Framework'
    },
    {
        name: 'Weather Application',
        link: 'https://github.com/Naamee/weather_tailwind',
        languages: 'Vue, TailwindCSS, OpenWeatherMap API'
    },
    {
        name: 'BattleShip Game',
        link: 'https://github.com/Naamee/battleship',
        languages: 'Vue, TailwindCSS'
    }
]
</script>

<template>
    <!-- Main Container -->
    <div class="mt-5 text-center text-sm lg:text-base">
            <div>
                <div v-for="project in projects" class="flex flex-col rounded-sm p-3">
                    <p>{{ project.name }}</p>
                    <p class="italic text-white/50">{{ project.languages }}</p>
                    <div class="mt-3 text-white/80">
                    <button class="py-1 w-16 border border-sky-950 hover:bg-sky-950 hover:border-sky-400 hover:-translate-y-1 ease-in-out"><a :href="project.link" class="text-xs lg:text-sm">Check</a></button>
                    </div>
                </div>
            </div>
        </div>
</template>