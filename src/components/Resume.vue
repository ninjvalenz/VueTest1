<template>
<div class="resume">
    <h1>{{ title }}</h1>
    <!-- Add your resume content here -->
</div>
</template>

<script>
export default {
    name: 'ResumePage',
    props: ['lang'],
    computed: {
        title() {
            return this.lang === 'fr' ? 'CV en Français' : 'English Resume'
        }
    }
}
</script>

<style scoped>
.resume {
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>