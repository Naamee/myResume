<script setup>
const courses = [
    {
        year: 'Jul 2020',
        name: 'Python for Everybody (Getting Started with Python)', 
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Python Data Structures',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Using Python to Access Web Data',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Using Databases with Python',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Using Python to Interact with the Operating System',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Trouble Shooting and Debugging Techniques',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Python for Everybody Specialization',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Python Data Structures',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Crash Course on Python',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Introduction to Git and Github',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Google IT Automation with Python Specialization',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Configuration Management and the Cloud',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
        institution: 'Coursera'
    },
    {
        year: 'Jul 2020',
        name: 'Automating Real-World Tasks with Python',
        institution: 'Coursera'
    },
    {
        year: 'Aug 2020',
        name: 'Introduction to Accounting Data Analytics and Visualization',
        institution: 'Coursera'
    },
    {
        year: 'Sep 2020',
        name: 'Introduction to HTML5',
        institution: 'Coursera'
    },
    {
        year: 'Sep 2020',
        name: 'Introduction to CSS3',
        institution: 'Coursera'
    },
    {
        year: 'Oct 2020',
        name: 'Interactivity with JavaScript',
        institution: 'Coursera'
    },
    {
        year: 'Nov 2020',
        name: 'Advanced Styling with Responsive Design',
        institution: 'Coursera'
    },
    {
        year: 'Nov 2023',
        name: '6.00.1x: Introduction to Computer Science and Programming using Python',
        institution: 'EdX'
    }
]
</script>

<template>
    <!-- Main Container -->
    <div class="mt-5 text-start border rounded-md text-xs h-60 w-72 overflow-hidden">
            <div class="animate-infinite-scroll">
                <div v-for="course in courses" class="flex flex-col rounded-sm p-3">
                    <p class="font-light text-white/50">{{ course.year }}</p>
                    <p class="text-sm">{{ course.name }}</p>
                    <p class="italic">{{ course.institution }}</p>
                </div>
            </div>
        </div>
</template>