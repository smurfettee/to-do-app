<template>
    <div class="login">
        <div class="loginContainer">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username">
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginView',
        data() {
            return {
                username: "",
            }
        },
        methods: {
            login() {
                this.$store.commit?.("changeUsername", this.username);
                this.$store.commit?.("loggedInState", true);
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .login {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    label {
        display: flex
    }

    .loginContainer {
        margin: 50px;
        display: flex;
        flex-direction: column;
    }

    .loginContainer * {
        font-size: large;
    }

    button {
        margin: 20px;
        width: 50%;
        align-self: center;
        font-size: medium !important;
    }
</style>