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
	let signupPage = document.querySelector('.signup')
	let targets = document.querySelectorAll('.click-target')

	document.onclick = function(e) {
		if (!e.target.classList.contains('click-target')) {

			for (i = 0; i < targets.length; i++) {
				targets[i].animate([
					{ 
						outline: '0.3rem solid',
						outlineColor: 'green'
					},
					{ outlineColor: 'transparent'}
				], {
					duration: 700, 
					iterations: 1
				});
			}

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

	signupLink[1].addEventListener('click', function(){
		login2.style.display = 'none';
		signupPage.style.display = 'flex'
		document.querySelector('.signup-block-1').style.display = 'block';
		document.querySelector('.progress-bar').setAttribute('src', 'images/progress-1.svg');
	})

	document.querySelector('.arrow-left').addEventListener('click', () => {
		signupPage.style.display = 'none'
		document.querySelector('.signup-block-2').style.display = 'none';
		document.querySelector('.signup__back').classList.remove('signup__back-active');
		document.querySelector('.signup__back').classList.remove('click-target');
		login1.style.display = 'flex';
		links();
	})

	document.querySelector('.signup__next-1').addEventListener('click', () => {
		document.querySelector('.signup-block-1').style.display = 'none';
		document.querySelector('.signup-block-2').style.display = 'block';
		document.querySelector('.signup__back').classList.add('signup__back-active');
		document.querySelector('.signup__back').classList.add('click-target');
		document.querySelector('.signup__back').classList.add('signup__back-1');
		document.querySelector('.progress-bar').setAttribute('src', 'images/progress-2.svg');
		links();
	})

	document.querySelector('.signup__back-1').addEventListener('click', () => {
		document.querySelector('.signup-block-2').style.display = 'none';
		document.querySelector('.signup-block-1').style.display = 'block';
		document.querySelector('.signup__back').classList.remove('signup__back-active');
		document.querySelector('.signup__back').classList.remove('click-target');
		document.querySelector('.signup__back').classList.remove('signup__back-1');
		document.querySelector('.progress-bar').setAttribute('src', 'images/progress-1.svg');
		links();
	})
}

