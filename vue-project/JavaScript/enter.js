function enter() {
    console.log("enter");
} 

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enter();
    }
});