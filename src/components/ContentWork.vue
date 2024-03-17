<script setup>
const work = [
    {
        year: 'Aug 2023 - Present',
        name: 'Assistant Manager',
        institution: 'Maldives Monetary Authority (MMA)'
    },
    {
        year: 'Dec 2021 - Jul 2023',
        name: 'Senior Tax Officer',
        institution: 'Maldives Inland Revenue Authority (MIRA)'
    },
    {
        year: 'May 2018 - Aug 2018',
        name: 'Procurement Officer',
        institution: 'Maldives Transport & Contracting Company (MTCC)'
    },
    {
        year: 'Feb 2018 - Apr 2018',
        name: 'Intern',
        institution: 'Ministry of Finance (MoFT)'
    }
]
</script>

<template>
    <!-- Main Container -->
    <div class="mt-5 text-center text-sm">
            <div>
                <div v-for="experience in work" class="flex flex-col rounded-sm p-3">
                    <p class="font-light text-white/50 text-xs">{{ experience.year }}</p>
                    <p class="text-md">{{ experience.name }}</p>
                    <p class="italic">{{ experience.institution }}</p>
                </div>
            </div>
        </div>
</template>