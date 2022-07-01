
function foodRec(evt){
    evt.preventDefault();
	let rec = ['Taco Chelo', 'At My Place Cafe', 'Gen', 'Tampopo Ramen', 'Sushi Vibe', 'Moira', 'Cobra Arcade Bar'];
	

	const randomRec = rec[Math.floor(Math.random() * rec.length)];

	alert(randomRec, rec[randomRec])


}





let food = document.querySelector('.randomRestaurantButton')

food.addEventListener('click', foodRec)