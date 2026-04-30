<!-- all imports 
and scripts

Need to add a add event listener for enter. 
if shift and enter then not enter. 


-->

<script>
import { useEventSource } from '@vueuse/core';
import { ref } from 'vue';
const { status, data, error, close } = useEventSource('/api/sse-endpoint')

//const connection = new EventSource("davalos.cs3680.com/api/sse-endpoint");

</script>
<template>

<div class="fulltextcontainer">


<div class="container">
    <div class="profileLayout">
        <!-- This is where the profile will start -->
    </div>
    
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

html, body {
   margin: 0;
   padding: 0;
   height: 100%;
   width: 100%;
   background-color: #1a1a1a !important;
}

</style>

<style scoped>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #1a1a1a;
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
