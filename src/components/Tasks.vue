<template>
    <div class="taskList">
        <div :key="idx" v-for="(task, idx) in tasks" style="width: 100%;">
            <SingleTask :text="task.text" :task="task"/>
        </div>
    </div>
</template>

<script>
    import SingleTask from './SingleTask.vue';

    export default {
        name: "TasksAll",
        components : {
            SingleTask,
        },
        computed: {
            tasks: function() {
                return this.$store.state.todoList.filter(task => !(task.completed));
            }
        }
    }
</script>

<style scoped>
    .taskList {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px;
    }
</style>