<!-- all imports 
and scripts

Need to add a add event listener for enter. 
if shift and enter then not enter. 


-->

<script setup>
import { useEventSource } from '@vueuse/core';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const message = ref('');
const users = ref([]);

const { status, data, error, close } = useEventSource('/api/sse-endpoint');

//const connection = new EventSource("davalos.cs3680.com/api/sse-endpoint");

<<<<<<< HEAD
onMounted(async () => {
    const token = localStorage.getItem('token')
    if (!token) {
        router.push('/')
        return
    }
    username.value = localStorage.getItem('username')

    //fetch all users
    const res = await fetch('/dro/api/getUsers.php', {
        headers: { 'Authorization': 'Bearer ' + token }
    })
    users.value = await res.json()
})

const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
    router.push('/')
}
=======



>>>>>>> 27fb246ecd8b6dd76a0c2c66c1be795df7ffedf0
</script>
<template>

<div class="fulltextcontainer">
    <div class="sidebar">
        <div class="profileLayout">
            <h3>{{  username  }}</h3>
            <button @click="logOut">Log Out</button>
        </div>

        <div class="userList">
            <h4>Users</h4>
            <div v-for="user in users" :key="user.user_id" class="userItem">
                {{  user.username  }}
            </div>
        </div>
    </div>


<div class="container">
    
    <div class="textplate">
        <span class="icon">+</span>
            <textarea
                v-model="message" 
                name="mainText" 
                rows="2" 
                cols="33"
                placeholder="Text here...">
            </textarea> <!-- can the error go away-->

            <div class="search">
                <input type="text" placeholder="Search...">
                <!-- pull js search into here-->
            </div> 

            
    </div>
    <div class="squareAI">
        <v-btn class="aiButton" color="primary" @click="search">Summarize</v-btn>
    </div>  
</div>
 
</div>

</template>


<style>
html, body {
   margin: 0;
   padding: 0;
   height: 100%;
   width: 100%;
   background-color: #1a1a1a !important;
}

.squareAI {
    display: flex;
    justify-content: center;
    color: rgb(186, 198, 20); 
    border: #c44b4b solid 4px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}

.aibutton {
    background-color: #c44b4b;
    color: white;
    border: cadetblue solid 1px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

</style>

<style scoped>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

.fulltextcontainer {
    display: flex;
    min-height: 100vh;
    width: 100%;
}

.sidebar {
    width: 250px;
    background-color: #2a2a2a;
    border-right: 1px solid #444;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.profileLayout h3 {
    color: white;
}

.profileLayout button {
    background-color: #444;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
}

.userList h4 {
    color: #888;
    margin-bottom: 10px;
}

.userItem {
    color: white;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
}

.userItem:hover {
    background-color: #444;
}

.container{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #1a1a1a;
    position: relative;
}

.textplate {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #444; 
    padding: 8px 16px;
    width: 100%;
    border-radius: 15px;
    max-width: 600px;
    transition: border-color 0.3s;
    background-color: #2a2a2a; 
    position: absolute;
    top: 80%;
}

textarea {
    width: 100%;
    background: transparent; 
    border: none;           
    outline: none;           
    color: white;            
    font-size: 1.1rem;
    padding: 10px;
    resize: none;            
}

.icon {
    color: #888;             
    font-weight: 900;
    font-size: 1.5rem;
    margin-right: 10px;
    cursor: pointer;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #2a2a2a;
    color: white;
}

</style>
