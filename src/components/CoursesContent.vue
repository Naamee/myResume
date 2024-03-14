<script setup>
const courses = [
    {
        year: '2018 - 2021',
        course: 'BSc (Hons) in Accounting and Finance with Specialism in Taxation',
        institution: 'Asia Pacific University, Malaysia'
    },
]
</script>

<template>
    <!-- Main Container -->
    <div class="mt-5 text-start border rounded-md text-xs w-72">
            <div>
                <!-- Bachelors -->
                <div v-for="course in course" class="flex flex-col rounded-sm p-3">
                    <p class="font-light text-white/50">{{ course.year }}</p>
                    <p class="text-sm">{{ course.degree }}</p>
                    <p class="italic">{{ course.institution }}</p>
                </div>
            </div>
        </div>
</template>