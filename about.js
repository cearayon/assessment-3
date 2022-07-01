console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Good job! You can type out a form! :-) <3');
}



function mouseOverCompliment(evt){
	evt.preventDefault();

	alert("Eyyyy here's a compliment!")

}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

img.addEventListener('mouseover', mouseOverCompliment)