<template>
    <div class="container">
        <EnterTask/>
        <div style="margin-bottom: 20px; font-size: larger;">Tasks</div>
        <Tasks/>
    </div>
</template>

<script>
    import EnterTask from './EnterTask.vue';
    import Tasks from './Tasks.vue';

    export default {
        name: "ToDoSection",
        components: {
            EnterTask,
            Tasks,
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(249, 249, 249);
        width: 50%;
        margin: 50px;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
</style>