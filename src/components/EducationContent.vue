<script setup>
const education = [
    {
        year: '2018 - 2021',
        name: 'BSc (Hons) in Accounting and Finance with Specialism in Taxation',
        institution: 'Asia Pacific University, Malaysia'
    },
    {
        year: '2015 - 2017',
        name: 'Edexcel GCE & HSC',
        institution: 'Center for Higher Education, Maldives'
    },
    {
        year: '2012 - 2014',
        name: 'SSC, IGCSE and GCSE',
        institution: 'Kalaafaanu School, Maldives'
    }
]
</script>

<template>
    <!-- Main Container -->
    <div class="mt-5 text-start border rounded-md text-xs w-72">
            <div>
                <!-- Bachelors -->
                <div v-for="qualification in education" class="flex flex-col rounded-sm p-3">
                    <p class="font-light text-white/50">{{ qualification.year }}</p>
                    <p class="text-sm">{{ qualification.name }}</p>
                    <p class="italic">{{ qualification.institution }}</p>
                </div>
            </div>
        </div>
</template>