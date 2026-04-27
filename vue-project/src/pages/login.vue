<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const validateForm = () => {
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert("Invalid email")
        return false
    }
    if (password.value.length < 8) {
        alert("Invalid password")
        return false
    }
    return true
}

const logIn = () => {
    if (!validateForm()) return

    alert("Form submitted (will do more once backend is working)")
}
</script>

<template>
    <div class="container">
        <h1>Log In!</h1>
        <form a="logIn">
            <label for="email">Email: </label>
            <input v-model="email"><br>
            <label for="password">Password: </label>
            <input v-model="password"><br>

            <button type="submit">Log in!</button>

        </form>
    </div>
        
</template>