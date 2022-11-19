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

function setElements() {
	
}

function links() {
	let signupLink = document.querySelectorAll('.links__signup-link');
	let login1 = document.querySelector('.login-1')
	let login2 = document.querySelector('.login-2')
	let signupPage = document.querySelector('.signup')
	let targets = document.querySelectorAll('.click-target')

	let arrowLeft = document.querySelector('.arrow-left');
	
	let signupNext = document.querySelector('.signup__next');
	let signupNext1 = document.querySelector('.signup__next-1');
	let signupNext2 = document.querySelector('.signup__next-2');

	let signupBack1 = document.querySelector('.signup__back-1');
	
	let signupBlock1 = document.querySelector('.signup-block-1');
	let signupBlock2 = document.querySelector('.signup-block-2');
	let signupBlock3 = document.querySelector('.signup-block-3');
	
	let signupBack = document.querySelector('.signup__back');
	
	let progressBar = document.querySelector('.progress-bar');

	
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
		}
	}

	signupLink[0].addEventListener('click', function(){
		login1.style.display = 'none';
		login2.style.display = 'flex';
	})

	signupLink[1].addEventListener('click', function(){
		login2.style.display = 'none';
		signupPage.style.display = 'flex'
		signupBlock1.style.display = 'block';
		progressBar.setAttribute('src', 'images/progress-1.svg');
	})

	arrowLeft.addEventListener('click', () => {
		signupBack.classList.remove('signup__back-active');
		signupBack.classList.remove('click-target');
		signupNext.classList.remove('signup__next-2');
		signupNext.classList.add('signup__next-1')
		signupPage.style.display = 'none'
		signupBlock2.style.display = 'none';
		signupBlock3.style.display = 'none';
		login1.style.display = 'flex';
		links();
	})

	if (signupNext1) {
		signupNext1.addEventListener('click', () => {
			signupNext.classList.remove('signup__next-1')
			signupBack.classList.add('signup__back-active');
			signupBack.classList.add('click-target');
			signupBack.classList.add('signup__back-1');
			signupNext.classList.add('signup__next-2')
			progressBar.setAttribute('src', 'images/progress-2.svg');
			signupBlock1.style.display = 'none';
			signupBlock3.style.display = 'none';
			signupBlock2.style.display = 'block';
			links();
		})
	}

	if (signupBack1) {
		signupBack1.addEventListener('click', () => {
			signupBack.classList.remove('signup__back-active');
			signupBack.classList.remove('click-target');
			signupBack.classList.remove('signup__back-1');
			signupNext.classList.remove('signup__next-2')
			signupNext.classList.add('signup__next-1')
			progressBar.setAttribute('src', 'images/progress-1.svg');
			signupBlock3.style.display = 'none';
			signupBlock2.style.display = 'none';
			signupBlock1.style.display = 'block';
			links();
		})
	}

	if (signupNext2) {
		signupNext2.addEventListener('click', () => {
			signupBack.classList.remove('signup__back-1');
			signupBack.classList.add('signup__back-2');
			progressBar.setAttribute('src', 'images/progress-3.svg');
			signupBlock2.style.display = 'none';
			signupBlock3.style.display = 'block'
			links();
		})
	}
	
	
}

