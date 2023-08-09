<template>
    <div class="taskArchive">
        <div>{{ task.text }}</div>
        <div style="display: flex; align-items: center;">
            <button @click="deleteArchive">&#8630;</button>
            <div>
                <div>Completed</div>
                <div @click="userFilter" style="cursor: pointer;">{{ task.username }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArchiveTask",
        props: {
            task: Object,
        },
        methods: {
            deleteArchive() {
                this.$store.state.todoList.forEach(task => {
                    if (task.id == this.task.id){
                        task.completed = false;
                    }
                });
            },

            userFilter(ev) {
                const uname = ev.target.textContent;
                this.$store.commit("changeUsernameFiltered", uname);
                console.log(this.$store.state.filterUser);
            },
        }
    }
</script>

<style scoped>
    .taskArchive {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 10px;
        background-color: rgb(235, 234, 234);
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        
    }

    button {
        width: 50%;
        height: 70%;
        margin-right: 10px;
        background-color: rgb(185, 3, 3);
        color: white;
    }

    button:hover {
        background-color: rgb(248, 3, 3);
    }
</style>