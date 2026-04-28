<!-- all imports 
and scripts

Need to add a add event listener for enter. 
if shift and enter then not enter. 
-->

<template>


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


</style>
