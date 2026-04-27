<!-- all imports -->

<template>

    <div class="navbar">

    </div>

    <div class="container">

    </div>

    <div class="textplate">
        <span class="icon">+</span>
        <textarea
        v-model="message" 
        name="mainText" 
        id="" 
        rows="5" 
        cols="33">
            Text here...
        </textarea>
    </div>
        
</template>
<style scoped>

.textplate{
    display: flex;
    align-items: flex-start;
    border: 1px solid #ddd;
    padding: 8px; 
}

.icon{
    margin-right: 10px;
    margin-top: 4px;
}

</style>
