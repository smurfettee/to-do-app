<template>
    <div class="containerTask">
        <input type="text" placeholder="Enter task" v-model="todoText">
        <button @click="addTask">Add Task</button>
    </div>
</template>

<script>
    // IMPORTED A LIBRARY TO UNIQUELY GENERATE EVERY TASKS ID BECAUSE THE ID KEPT
    // RESETTING AND I DIDN'T KNOW THE REASON
    import uniqid from 'uniqid';

    export default {
        name: "EnterTask",
        data() {
            return {
                todoText: "",
                todoCompleted: false,
                username: this.$store.state.username,
            }
        },
        methods: {
            addTask() {
                if (this.$store.state.loggedIn == true){
                    if (this.todoText != ""){
                        var user = this.username;
                        this.$store.commit('addTodoList', {
                            text : this.todoText,
                            id : uniqid(),
                            completed : this.todoCompleted,
                            username : user,
                            show :true,
                        });
                    }
                }else {
                    alert("Please login before adding a task.");
                }
            }
        }
    }
</script>

<style scoped>
    .containerTask {
        display: flex;
        margin: 50px;
        width: 80%;
    }

    input {
        margin-right: 40px;
        width: 80%;
        height: 30px;
        font-size: medium;
        border-radius: 10px;
        border: solid 2px rgb(109, 109, 109);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 2px;
    }

    input:focus {
        outline: none;
        border: solid 2px rgb(0, 0, 0);
    }

    button {
        background-color: rgb(113, 113, 113);
        color: white;
        border-radius: 10px;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    button:hover {
        background-color: rgb(82, 82, 82);
        cursor: pointer;
        transition: background-color 0.2s;
    }
</style>