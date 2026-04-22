<template>
    <div class="container">
        <h1>Sign Up!</h1>
        <form a="signUp">
            <label for="firstName">First Name: </label>
            <input v-model="firstName"><br>
            <label for="lastName">Last Nmae: </label>
            <input v-model="lastName"><br>
            <label for="username">Username: </label>
            <input v-model="username"><br>
            <label for="email">Email: </label>
            <input v-model="email"><br>
            <label for="password">Password: </label>
            <input v-model="password"><br>

            <button type="submit">Sign Up!</button>
    </form>
    </div>
</template>


<!-- Some how add the mysql to be connected to the login.  -->