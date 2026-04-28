//add all the functions and remove the console logs.  

listA = []; //replace with DB entry

//event listener for the enter key
function enter() {
    let value = document.getElementById("mainText").value
    // somehting about value and appending it to the list. 
    // console.log("enter");
} 

//apend to the main table
function append() {
    console.log("append");
}

document.getElementById("mainText").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enter();
    }
});

document.getElementById