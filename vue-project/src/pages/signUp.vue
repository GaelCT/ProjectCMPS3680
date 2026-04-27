<script>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');

const validateForm = () => {
    if(!firstName.value || !lastName.value || !username.value){
        alert("Name and username is needed")
        return false
    }
    if(!/\S+@\S+\.\S+/.test(email.value)){
        alert("Invalid email")
        return false
    }
    if(password.value.length < 8){
        alert("Invalid password, Your password must be at least 8 characters long")
        return false
    }
    return true
}

const signUp = async() => {
    if(!validateForm()){
        return;
    }
</script>
<template>
    <div class="container">
        <h1>Sign Up!</h1>
        <form a="signUp">
            <label for="firstName">First Name: </label>
            <input v-model="firstName"><br>
            <label for="lastName">Last Name: </label>
            <input v-model="lastName"><br>
            <label for="username">Username: </label>
            <input v-model="username"><br>
            <label for="email">Email: </label>
            <input v-model="email"><br>
            <label for="password">Password: </label>
            <input v-model="password"><br>

            <button type="submit">Sign Up!</button>
            <br> 
            <br>
            <h2>Don't have an account?</h2>
            <br>
    </form>
    </div>
</template>

