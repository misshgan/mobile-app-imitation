window.addEventListener('load', setTime);
window.addEventListener('load', links);

setInterval(() => {
	setTime();
}, 20000);

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
	

	let arrowLeft = document.querySelector('.arrow-left');
	
	let signupNext = document.querySelector('.signup__next');
	let signupNext1 = document.querySelector('.signup__next-1');
	let signupNext2 = document.querySelector('.signup__next-2');

	let signupBack = document.querySelector('.signup__back');
	let signupBack1 = document.querySelector('.signup__back-1');
	let signupBack2 = document.querySelector('.signup__back-2');
	
	let signupBlock  = document.querySelector('.signup-block');
	let signupBlock1 = document.querySelector('.signup-block-1');
	let signupBlock2 = document.querySelector('.signup-block-2');
	let signupBlock3 = document.querySelector('.signup-block-3');

	let progressBar = document.querySelector('.progress-bar');

	let contactsCreate = document.querySelector('.contacts__group-create');
	let popup = document.querySelector('.default-position__popup');
	let popupWhite = document.querySelector('.default-position__popup-elem')
	let popupGoBack = document.querySelector('.popup-elem__header-goback');

	
	function clickCheck() {
		document.onclick = function(e) {
			let targets = document.querySelectorAll('.click-target')
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
			} else {
				return false;
			}
		}
	}

	clickCheck();
	signupLink1();

	function signupLink1() {
		signupLink[0].addEventListener('click', function(){
			login1.style.display = 'none';
			login2.style.display = 'flex';
			signupLink2();
			return false;
		})
	}

	function signupLink2() {
		signupLink[1].addEventListener('click', function(){
			login2.style.display = 'none';
			signupPage.style.display = 'flex'
			signupBlock1.style.display = 'block';
			progressBar.setAttribute('src', 'images/progress-1.svg');
			arrowLeftFunc();
			signupNext1Func();
			return false;
		})
	}
	

	function arrowLeftFunc() {
		let arrowLeft = document.querySelector('.arrow-left');

		arrowLeft.addEventListener('click', () => {
			signupBack.classList.remove('signup__back-active');
			signupBack.classList.remove('click-target');
			signupNext.classList.remove('signup__next-2');
			signupNext.classList.add('signup__next-1')
			signupPage.style.display = 'none'
			signupBlock2.style.display = 'none';
			signupBlock3.style.display = 'none';
			login1.style.display = 'flex';
			return false;
		})
	}

	function signupNext1Func() {
		let signupNext1 = document.querySelector('.signup__next-1');

		signupNext1.addEventListener('click', () => {
			signupNext.classList.remove('signup__next-1')
			signupBack.classList.add('click-target');
			signupBack.classList.add('signup__back-active');
			signupBack.classList.add('signup__back-1');
			signupNext.classList.add('signup__next-2')
			progressBar.setAttribute('src', 'images/progress-2.svg');
			signupBlock1.style.display = 'none';
			signupBlock3.style.display = 'none';
			signupBlock2.style.display = 'block';
			arrowLeftFunc();
			signupBack1Func();
			signupNext2Func();
			return false;
		})
	}

	function signupBack1Func() {
		let signupBack1 = document.querySelector('.signup__back-1');

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
			signupNext1Func();
			return false;
		})
	}

	function signupNext2Func() {
		let signupNext2 = document.querySelector('.signup__next-2');

		signupNext2.addEventListener('click', () => {
			signupBack.classList.remove('signup__back-1');
			signupBack.classList.add('signup__back-2');
			signupNext.classList.remove('signup__next-2');
			signupNext.classList.add('signup__next-3');
			progressBar.setAttribute('src', 'images/progress-3.svg');
			signupBlock2.style.display = 'none';
			signupBlock3.style.display = 'block'
			arrowLeftFunc();
			signupBack2Func();
			createPopup()
			return false;
		})
	}

	function signupBack2Func() {
		let signupBack2 = document.querySelector('.signup__back-2');
		
		signupBack2.addEventListener('click', () => {
			signupBack.classList.remove('signup__back-2');
			signupBack.classList.add('signup__back-1');
			signupBack.classList.add('signup__back-active');
			signupBack.classList.add('click-target');
			signupNext.classList.remove('signup__next-3')
			signupNext.classList.add('signup__next-2')
			progressBar.setAttribute('src', 'images/progress-2.svg');
			signupBlock3.style.display = 'none';
			signupBlock1.style.display = 'none';
			signupBlock2.style.display = 'block';
			signupBack1Func()
			signupNext2Func();
			return false;
		})
	}

	function createPopup() {
		contactsCreate.addEventListener('click', () => {
			popup.style.display = 'block';
			popupWhite.style.display = 'block'
		})
	
		popupGoBack.addEventListener('click', () => {
			popup.style.display = 'none';
			popupWhite.style.display = 'none'
		})
	}
}

