<template>
    <div class="taskContainer">
        <div class="taskText">
            <div contenteditable="false">{{text}}</div>
            <div>{{ task.username }}</div>
        </div>
        <button class="btnComplete" @click="completeTask(task.id)">&#10004;</button>
        <button class="btnEdit" @click="ev => editTask(ev, task.id)">&#9998;</button>
        <button class="btnDelete" @click="deleteTask(task.id)">&#10006;</button>
    </div>
</template>

<script>
    export default {
        name: "SingleTask",
        props: {
            text: String,
            task: Object,
        },
        methods: {
            completeTask(id) {
                const tasks = this.$store.state.todoList;
                tasks.forEach(task => {
                    if (task.id == id) {
                        task.completed = true;
                    }
                });
            },

            deleteTask(id) {
                const tasks = this.$store.state.todoList;
                tasks.forEach(task => {
                    if (task.id == id) {
                        tasks.splice(tasks.indexOf(task), 1);
                    }
                });
            },

            editTask(ev, id) {
                const tasks = this.$store.state.todoList;
                const textDiv = ev.target.parentElement.firstChild.firstChild;
                if (textDiv.getAttribute("contenteditable") == "true"){
                    textDiv.setAttribute("contenteditable", "false");
                    tasks.forEach(task => {
                        if (task.id == id && !(task.completed)){
                            task.text = textDiv.textContent;
                        }
                    });
                    return;
                }
                textDiv.setAttribute("contenteditable", "true");
                
            }
        }
    }
</script>

<style>
    .taskContainer {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        background-color: rgb(230, 229, 229);
        border-radius: 10px;
        margin: 10px;
        display: flex;
        justify-content: center;
        padding: 10px;
    }

    .taskText {
        width: 70%;
        margin-right: 5px;
    }

    button {
        width: 10%;
        margin-right: 5px;
    }

    .btnComplete {
        background-color: rgb(1, 183, 1);
    }

    .btnComplete:hover {
        background-color: rgb(0, 223, 0);
    }

    .btnEdit {
        background-color: rgb(110, 110, 194);
    }

    .btnEdit:hover {
        background-color: rgb(139, 139, 243);
    }

    .btnDelete {
        background-color: rgb(185, 3, 3);
    }

    .btnDelete:hover {
        background-color: rgb(248, 3, 3);
    }
</style>