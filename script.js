window.addEventListener('load', setTime);
window.addEventListener('load', signupBlock);
window.addEventListener('load', dashboard);

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


function signupBlock() {
	document.body.style.display = 'flex'

	let signupLink = document.querySelectorAll('.links__signup-link');
	let login1 = document.querySelector('.login-1')
	let login2 = document.querySelector('.login-2')
	let signupPage = document.querySelector('.signup')

	let arrowLeft = document.querySelector('.arrow-left');
	
	let signupNext = document.querySelector('.signup__next');
	let signupNext1 = document.querySelector('.signup__next-1');
	let signupNext2 = document.querySelector('.signup__next-2');
	let signupNext3 = document.querySelector('.signup__next-3');

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

	let dashboard = document.querySelector('.dashboard');

	
	function clickCheck() {
		document.onclick = function(e) {
			targets = document.querySelectorAll('.click-target')
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
		return false;
	}

	clickCheck();
	signupLink1();

	function signupLink1() {
		signupLink[0].addEventListener('click', eventFunction,{ once: true })

		function eventFunction() {
			login1.style.display = 'none';
			login2.style.display = 'flex';
			signupLink2();
			signupLink[0].removeEventListener('click', eventFunction,{ once: true })
		}
		return false;
	}

	function signupLink2() {
		signupLink[1].addEventListener('click', eventFunction, { once: true })

		function eventFunction() {
			login2.style.display = 'none';
			signupPage.style.display = 'flex'
			signupBlock1.style.display = 'block';
			progressBar.setAttribute('src', 'images/progress-1.svg');
			arrowLeftFunc();
			signupNext1Func();
			signupLink[1].removeEventListener('click', eventFunction, { once: true })
		}
		return false;
	}
	

	function arrowLeftFunc() {
		// arrowLeft = document.querySelector('.arrow-left');

		arrowLeft.addEventListener('click', eventFunction,{ once: true })
		function eventFunction() {
			signupBack.classList.remove('signup__back-active');
			signupBack.classList.remove('click-target');
			signupNext.classList.remove('signup__next-2');
			signupNext.classList.remove('signup__next-3');
			signupNext.textContent = "Next"
			signupNext.classList.add('signup__next-1')
			signupPage.style.display = 'none'
			signupBlock2.style.display = 'none';
			signupBlock3.style.display = 'none';
			login1.style.display = 'flex';
			signupLink1();
			arrowLeft.removeEventListener('click', eventFunction,{ once: true })
			return false;
		}

		return false;
	}

	function signupNext1Func() {
		// signupNext1 = document.querySelector('.signup__next-1');

		signupNext.addEventListener('click', eventFunction, { once: true });
		function eventFunction() {
			signupBlock1.style.display = 'none';
			signupBlock3.style.display = 'none';
			signupBlock2.style.display = 'block';
			signupNext.classList.remove('signup__next-1')
			signupNext.classList.add('signup__next-2')
			signupBack.classList.add('click-target');
			signupBack.classList.add('signup__back-active');
			signupBack.classList.add('signup__back-1');
			progressBar.setAttribute('src', 'images/progress-2.svg');
			signupBack1Func();
			signupNext2Func();
			signupNext.removeEventListener('click', eventFunction, { once: true });
			return false;
		}

		arrowLeft.addEventListener('click', ifArrow, { once: true });
		function ifArrow() {
			signupNext.removeEventListener('click', eventFunction, { once: true });
			arrowLeft.removeEventListener('click', ifArrow, { once: true });
			return false;
		}
		return false;
	}

	function signupBack1Func() {
		// signupBack1 = document.querySelector('.signup__back-1');

		signupBack.addEventListener('click', eventFunction,{ once: true })
		function eventFunction() {
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
			signupBack.removeEventListener('click', eventFunction,{ once: true })
			signupNext.removeEventListener('click', ifNext, { once: true })
			return false;
		}

		signupNext.addEventListener('click', ifNext, { once: true })
		function ifNext() {
			signupBack.removeEventListener('click', eventFunction,{ once: true })
			signupNext.removeEventListener('click', ifNext, { once: true })
			return false;
		}

		return false;
	}

	function signupNext2Func() {

		signupNext.addEventListener('click', eventFunction,{ once: true })
		function eventFunction() {
			signupBack.classList.remove('signup__back-1');
			signupNext.classList.remove('signup__next-2');
			signupBack.classList.add('signup__back-2');
			signupNext.classList.add('signup__next-3');
			signupNext.textContent = "I'm ready!"
			progressBar.setAttribute('src', 'images/progress-3.svg');
			signupBlock1.style.display = 'none';
			signupBlock2.style.display = 'none';
			signupBlock3.style.display = 'block'
			signupBack2Func();
			createPopup();
			signupNext3Func();
			signupNext.removeEventListener('click', eventFunction,{ once: true })
			return false;
		}

		signupBack.addEventListener('click', ifGoBack, { once: true })
		arrowLeft.addEventListener('click', ifArrow, { once: true });
		function ifGoBack() {
			signupNext.removeEventListener('click', eventFunction,{ once: true })
			signupBack.removeEventListener('click', ifGoBack, { once: true })
			return false;
		}
		function ifArrow() {
			signupNext.removeEventListener('click', eventFunction,{ once: true })
			arrowLeft.removeEventListener('click', ifArrow, { once: true })
			return false;
		}
		return false;
	}

	function signupBack2Func() {
		// signupBack2 = document.querySelector('.signup__back-2');
		
		signupBack.addEventListener('click', eventFunction,{ once: true })
		function eventFunction() {
			signupBlock3.style.display = 'none';
			signupBlock1.style.display = 'none';
			signupBlock2.style.display = 'block';
			signupBack.classList.remove('signup__back-2');
			signupBack.classList.add('signup__back-1');
			signupBack.classList.add('signup__back-active');
			signupNext.classList.remove('signup__next-3')
			signupNext.classList.remove('signup__next-1')
			signupNext.classList.add('signup__next-2')
			progressBar.setAttribute('src', 'images/progress-2.svg');
			signupNext.textContent = "Next"
			signupBack1Func()
			signupNext2Func()
			signupBack.removeEventListener('click', eventFunction,{ once: true })
			signupNext.removeEventListener('click', ifNext, { once: true })
			return false;
		}

		signupNext.addEventListener('click', ifNext, { once: true })
		function ifNext() {
			signupBack.removeEventListener('click', eventFunction,{ once: true })
			signupNext.removeEventListener('click', ifNext, { once: true })
			return false;
		}
		return false;
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
		return false;
	}

	function signupNext3Func() {
		// signupNext3 = document.querySelector('.signup__next-3');

		signupNext.addEventListener('click', eventFunction, { once: true });
		function eventFunction() {
			signupPage.style.display = 'none'
			dashboard.style.display = 'flex'
			signupNext.removeEventListener('click', eventFunction, { once: true })
			return false;
		}

		signupBack.addEventListener('click', ifGoBack, { once: true })
		arrowLeft.addEventListener('click', ifArrow, { once: true });
		function ifGoBack() {
			signupNext.removeEventListener('click', eventFunction,{ once: true })
			signupBack.removeEventListener('click', ifGoBack, { once: true })
			return false;
		}
		function ifArrow() {
			signupNext.removeEventListener('click', eventFunction,{ once: true })
			arrowLeft.removeEventListener('click', ifArrow, { once: true })
			return false;
		}
		return false;
	}
	
	return false;
}



function dashboard() {

	const scrollContainer = document.querySelector(".dashboard__tools-group");
	let newCampaignBtn = document.querySelector('.make-new-campaign');
	let dashboardPage = document.querySelector('.dashboard');
	let makeNewCampaignPage = document.querySelector('.new-campaign');
	let newCampaignBack = document.querySelector('.new-campaign-back');
	let greetingCampaignArrowLeft = document.querySelector('.greeting-left');
	let greetingCampaignStartBtn = document.querySelector('.new-greeting-campaign')
	let greetingCampaignPage = document.querySelector('.greeting-camp')
	let imgCheck = document.querySelectorAll('.img-check');
	let imgArrowDownUp = document.querySelectorAll('.img-arrow-down_up')
	let greetingCampaignNext1 = document.querySelector('.greeting-next1')
	let progressBar = document.querySelectorAll('.progress-bar');

	let greetingPage1 = document.querySelector('.greeting-page1')
	let greetingPage2 = document.querySelector('.greeting-page2')


	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});

	newCampaignFunc();

	function newCampaignFunc() {
		newCampaignBtnFunc();

		function newCampaignBtnFunc() {
			newCampaignBtn.addEventListener('click', eventFunction, {once: true})

			function eventFunction() {
				dashboardPage.style.display = 'none';
				makeNewCampaignPage.style.display = 'block';
				newCampaignBackFunc();
				greetingCampaignStartBtnFunc()
				newCampaignBtn.removeEventListener('click', eventFunction, {once: true})
				return false;
			}
		}

		function newCampaignBackFunc() {
			newCampaignBack.addEventListener('click', eventFunction, {once: true});

			function eventFunction() {
				dashboardPage.style.display = 'flex';
				makeNewCampaignPage.style.display = 'none';
				newCampaignBtnFunc();
				newCampaignBack.removeEventListener('click', eventFunction, {once: true});
				return false;
			}
		}

		function greetingCampaignStartBtnFunc() {
			greetingCampaignStartBtn.addEventListener('click', eventFunction, {once: true})

			function eventFunction() {
				makeNewCampaignPage.style.display = 'none';
				greetingCampaignPage.style.display = 'flex';
				greetingCampaignArrowLeftFunc()
				imgCheckFunc();
				imgArrowDownUpFunc()
				greetingCampaignNext1Func();
				greetingCampaignStartBtn.removeEventListener('click', eventFunction, {once: true})
			}

			newCampaignBack.addEventListener('click', ifArrowLeft, {once: true});
			function ifArrowLeft() {
				greetingCampaignStartBtn.removeEventListener('click', eventFunction, {once: true})
				newCampaignBack.removeEventListener('click', eventFunction, {once: true});
				return false;
			}
		}
		
		function greetingCampaignArrowLeftFunc() {
			greetingCampaignArrowLeft.addEventListener('click', eventFunction, {once: true})

			function eventFunction() {
				greetingPage1.style.display = 'block';
				greetingPage2.style.display = 'none'
				progressBar[1].setAttribute('src', 'images/progress-1.svg')
				greetingCampaignPage.style.display = 'none';
				makeNewCampaignPage.style.display = 'flex';
				greetingCampaignStartBtnFunc()
				greetingCampaignArrowLeft.removeEventListener('click', eventFunction, {once: true});
				return false;
			}
		}

		
		function imgCheckFunc() {

			imgCheck.forEach(element => {
				element.addEventListener('click', () => {
					if (element.classList.contains('checked')) {
						element.setAttribute('src', 'images/greetings-campaign/unchecked.svg');
						element.classList.remove('checked')
					} else if (!element.classList.contains('checked')) {
						element.setAttribute('src', 'images/greetings-campaign/checked.svg');
						element.classList.add('checked')
					}
				})
			});
		}

		function imgArrowDownUpFunc() {

			imgArrowDownUp.forEach(element => {
				element.addEventListener('click', () => {
					if (!element.classList.contains('arrow-active')) {
						element.classList.add('arrow-active');
						element.setAttribute('src', 'images/greetings-campaign/up.svg')
					} else if(element.classList.contains('arrow-active')) {
						element.classList.remove('arrow-active')
						element.setAttribute('src', 'images/greetings-campaign/down.svg')
					}
				})
			})
		}

		
		function greetingCampaignNext1Func() {

			greetingCampaignNext1.addEventListener('click', eventFunction, {once: true})
			function eventFunction() {
				progressBar[1].removeAttribute('src')
				progressBar[1].setAttribute('src', 'images/progress-2.svg')
				greetingPage1.style.display = 'none';
				greetingPage2.style.display = 'block'
				greetingCampaignNext1.removeEventListener('click', eventFunction, {once: true})
			}

			greetingCampaignArrowLeft.addEventListener('click', ifArrow, {once: true})
			function ifArrow() {
				greetingCampaignNext1.removeEventListener('click', eventFunction, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', eventFunction, {once: true})
			}

		}



		
	}
}



