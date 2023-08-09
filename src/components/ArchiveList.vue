<template>
    <div class="listArchive">
        <div>Search:</div>
        <input @change="filterTask" ref="filterInput" type="text" placeholder="Search for tasks and users" v-model="$store.state.filterText">
        <div>Filter: {{ $store.state.filterUser }}<span v-if="$store.state.filterUser.length != 0" style="color: red; font-size: larger; cursor: pointer;" @click="clearFilter">&#9747;</span></div>
        <div :key="task.id" v-for="task in tasks" style="width: 80%;">
            <ArchiveTask :task="task"/>
        </div>
    </div>
</template>

<script>
    import ArchiveTask from './ArchiveTask.vue';

    export default {
        name: "ArchiveList",
        components: {
            ArchiveTask,
        },
        data() {
            return {
                // TRIGGER VARIABLE
                taskList: true,
            }
        },
        methods: {
            clearFilter() {
                this.$store.commit("changeUsernameFiltered", "");
            },
            // I AM CHANGING THE TASKLIST VARIABLE SO THAT THE TASKS VARIABLE IN THE COMPUTED
            // SECTION CAN BE TRIGGERED AND UPDATED EVERYTIME I TYPE SOMETHING IN THE INPUT
            filterTask() {
                this.taskList = !this.taskList;
            },
        },
        computed: {
            tasks: function() {
                // I PUT IT HERE
                this.taskList;
                return this.$store.state.todoList.filter(task => (this.$store.state.filterUser == "" ? task.completed : task.completed && this.$store.state.filterUser == task.username))
                .filter(task => task.text.includes(this.$store.state.filterText) || task.username.includes(this.$store.state.filterText));
            },
        },
    }
</script>

<style scoped>
    .listArchive {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
    }

    input {
        width: 50%;
        margin: 20px;
    }
</style>