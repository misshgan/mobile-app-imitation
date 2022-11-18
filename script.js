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
	let signupLink = document.querySelectorAll('.links__signup-link');
	let login1 = document.querySelector('.login-1')
	let login2 = document.querySelector('.login-2')

	document.onclick = function(e) {
		if (!e.target.classList.contains('click-target')) {
			signupLink[0].animate([
				{ color: 'green'},
				{ color: '#fff'}
			], {
				duration: 500, 
				iterations: 1
			});
			signupLink[1].animate([
				{ color: 'green'},
				{ color: '#000'}
			], {
				duration: 500, 
				iterations: 1
			});
		} else if (e.target.classList.contains('click-target')) {
		}
	}

	signupLink[0].addEventListener('click', function(){
		login1.style.display = 'none';
		login2.style.display = 'flex';
	})
}

