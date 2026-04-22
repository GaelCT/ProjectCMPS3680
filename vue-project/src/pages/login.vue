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