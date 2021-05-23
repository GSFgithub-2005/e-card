/*
==================================================
Get all necessary DOM:
1. class .card
2. class .front
==================================================
*/
var cards = document.querySelector(".card");
var frontC = document.querySelector(".front");



/*
==================================================
Create a variable isOpen and set the value to false
==================================================
*/
var isOpen = false;


/*
==================================================
Attach click event handler to .card:
1. If the card is open
    - remove class .open from .front
2. Else if the card is close
    - add class .open to .front
3. Toggle variable isOpen (make isOpen to be not true)
Hint: Use classList.remove("className") to remove a class,
while classList.add("className") to add a class.
==================================================
*/
cards.addEventListener("click", ClickTheCard);
function ClickTheCard(){
    if (isOpen == true) {
        frontC.classList.remove("open")
        isOpen=false
    } else {
        frontC.classList.add("open")
        isOpen=true
        playSong();
    }
}




  