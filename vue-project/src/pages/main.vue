<!-- all imports -->

<template>

    <div class="navbar">

    </div>

<div class="container">
   <div class="textplate">
        <span class="icon">+</span>
        <textarea
        v-model="message" 
        name="mainText" 
        rows="5" 
        cols="33"
        placeholder="Text here...">
        </textarea>
    </div>
</div>

</template>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #1a1a1a;
}

.textplate{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    padding: 8px 16px;
    width: 100%;
    border-radius: 15px;
    max-width: 600px;
    margin: 20px auto;
    transition: border-color 0.3s;
}

.textplate:focus-within{
    border-color: antiquewhite;
}

textarea{
    width: 100%;
    border-radius: 15px;
}

.icon{
    font: 900;
    font-size: xx-large;

}


</style>
