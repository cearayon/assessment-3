
function favoriteColorAlert (evt) {
    evt.preventDefault();
    alert('Blue and Orange!')
}

function favoritePlaceAlert (evt) {
    evt.preventDefault();
    alert('My apartment!')
}

function favoriteRitualAlert (evt) {
    evt.preventDefault();
    alert('Grocery shopping with my wife! (No this is not code for send help!')
}





let favoriteColor = document.getElementById("color");
favoriteColor.addEventListener('click',favoriteColorAlert);

let favoritePlace = document.getElementById("place");
favoritePlace.addEventListener('click', favoritePlaceAlert)


let favoriteRitual = document.getElementById("ritual");
favoriteRitual.addEventListener('click',favoriteRitualAlert )

