console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Good job! You can type out a form! :-) <3');
}



function mouseOverCompliment(evt){
	evt.preventDefault();

	alert("Eyyyy here's a compliment!")

}



// function foodRec(evt){
// 	let rec = ['Taco Chelo', 'At My Place Cafe', 'Gen', 'Tampopo Ramen', 'Sushi Vibe', 'Moira', 'Cobra Arcade Bar']
// 	evt.preventDefault();

// 	const randomRec = rec[Math.floor(Math.random()* rec.length)]

// 	alert(randomRec[i])


// }

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

img.addEventListener('mouseover', mouseOverCompliment)

// let food = document.querySelector('randomRestaurantButton')

// food.addEventListener('click', foodRec)