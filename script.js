window.addEventListener('load', setTime);
window.addEventListener('load', links);

setInterval(() => {
	setTime();
}, 1000);

function setTime() {
	let target = document.querySelector('.info-bar__left');
	let timeHours = new Date().getHours();
	let timeMinutes = new Date().getMinutes();

	if (timeMinutes < 10) {
		timeMinutes = '0' + timeMinutes;
	}

	if (timeHours < 10) {
		timeHours = '0' + timeHours;
	}
	
	target.innerHTML = `<span>${timeHours}:${timeMinutes}</span>`
}

function links() {
	let signupLink = document.querySelector('.links__signup-link');
	document.addEventListener('click', function(e){
		if (!e.target.className=='links__signup-link') {
			console.log('click')
		}
	})
}

window.addEventListener('resize', function(){
	console.log(window.innerHeight, window.innerWidth)
})

