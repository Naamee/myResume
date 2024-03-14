<script setup>
const education = [
    {
        year: '2018 - 2021',
        degree: 'BSc (Hons) in Accounting and Finance with Specialism in Taxation',
        institution: 'Asia Pacific University, Malaysia'
    },
    {
        year: '2015 - 2017',
        degree: 'Edexcel GCE & HSC',
        institution: 'Center for Higher Education, Maldives'
    },
    {
        year: '2012 - 2014',
        degree: 'SSC, IGCSE and GCSE',
        institution: 'Kalaafaanu School, Maldives'
    }
]
</script>

<template>
    <!-- Main Container -->
    <div class="mt-5 text-start border rounded-md text-xs w-72">
            <div>
                <!-- Bachelors -->
                <div v-for="course in education" class="flex flex-col rounded-sm p-3">
                    <p class="font-light text-white/50">{{ course.year }}</p>
                    <p class="text-sm">{{ course.degree }}</p>
                    <p class="italic">{{ course.institution }}</p>
                </div>
            </div>
        </div>
</template>