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
	let dashboardBody = document.querySelector('.dashboard__body')
	let dashboardStartBtn = document.querySelector('.dashboard-start')

	let makeNewCampaignPage = document.querySelector('.new-campaign');
	let greetingCampaignPage = document.querySelector('.greeting-camp')

	let newCampaignBack = document.querySelector('.new-campaign-back');

	let greetingCampaignArrowLeft = document.querySelector('.greeting-left');

	let greetingCampaignStartBtn = document.querySelector('.new-greeting-campaign')
	

	let imgCheck = document.querySelectorAll('.img-check');
	
	let imgArrowDownUp = document.querySelectorAll('.img-arrow-down_up')

	let greetingCampaignNext = document.querySelector('.greeting-next')
	let greetingCampaignNext1 = document.querySelector('.greeting-next1')
	let greetingCampaignNext2 = document.querySelector('.greeting-next2')

	let footerBack = document.querySelector('.greeting-footer-back')
	let footerBack1 = document.querySelector('.footer-back1')

	let progressBar = document.querySelectorAll('.progress-bar');

	let greetingPage1 = document.querySelector('.greeting-page1')
	let greetingPage2 = document.querySelector('.greeting-page2')
	let greetingPage3 = document.querySelector('.greeting-page3')

	let greetingLastNext = document.querySelector('.greeting-last-next')


	let dashboardFollowUpStart = document.querySelector('.dashboard__latest')
	let followUpPage = document.querySelector('.follow-up')
	let followUpLeft = document.querySelector('.follow-up-left')
	
	let profilePage = document.querySelector('.profile')
	let profileStartBtn = document.querySelector('.profile-start-btn')
	let profileLeft = document.querySelector('.profile-left')

	let notificationsStartBtn = document.querySelector('.notifications-start')
	let notificationsPage = document.querySelector('.notifications-body')

	let campaignsStartBtn = document.querySelector('.campaigns-start')
	let campaignsPage = document.querySelector('.campaigns-body')
	let campaignsFollowUpBtn = document.querySelector('.campaigns-follow-up-btn')
	let campaignsNewBtn = document.querySelector('.cb-header-img2')


	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});

	newCampaignBtnFunc();
	dashboardFollowUpStartFunc()
	profileStartBtnFunc()
	notificationsStartBtnFunc()
	dashboardStartBtnFunc()
	campaignsStartBtnFunc()
	campaignsFollowUpBtnFunc()
	campaignsNewBtnFunc()
	


	function dashboardFollowUpStartFunc() {
		dashboardFollowUpStart.addEventListener('click', eventFunction, {once:true})
		function eventFunction() {
			dashboardPage.style.display = 'none';
			followUpPage.style.display = 'flex'
			followUpLeftFunc()
			dashboardFollowUpStart.removeEventListener('click', eventFunction, {once:true})
		} 
	}

	function followUpLeftFunc() {
		followUpLeft.addEventListener('click', eventFunction, {once:true})
		function eventFunction() {
			dashboardPage.style.display = 'flex';
			followUpPage.style.display = 'none'
			dashboardFollowUpStartFunc()
			followUpLeft.removeEventListener('click', eventFunction, {once:true})
		}
	}

	function profileStartBtnFunc() {
		profileStartBtn.addEventListener('click', eventFunction, {once:true})
		function eventFunction() {
			dashboardPage.style.display = 'none';
			profilePage.style.display = 'flex'
			profileLeftFunc()
			profileStartBtn.removeEventListener('click', eventFunction, {once:true})
		}
	}

	function profileLeftFunc() {
		profileLeft.addEventListener('click', eventFunction, {once:true})
		function eventFunction() {
			dashboardPage.style.display = 'flex';
			profilePage.style.display = 'none'
			profileStartBtnFunc()
			profileLeft.removeEventListener('click', eventFunction, {once:true})
		}
	}

	function notificationsStartBtnFunc() {
		notificationsStartBtn.addEventListener('click', eventFunction)
		function eventFunction() {
			dashboardBody.style.display = 'none'
			campaignsPage.style.display = 'none'
			notificationsPage.style.display = 'block';
			notificationsStartBtn.setAttribute('src', 'images/dashboard/notifications-active.svg')
			dashboardStartBtn.setAttribute('src', 'images/dashboard/dashboard.svg')
			campaignsStartBtn.setAttribute('src', 'images/dashboard/inbox.svg')
		}
	}

	function dashboardStartBtnFunc() {
		dashboardStartBtn.addEventListener('click', eventFunction)
		function eventFunction() {
			dashboardBody.style.display = 'block'
			notificationsPage.style.display = 'none';
			campaignsPage.style.display = 'none'
			notificationsStartBtn.setAttribute('src', 'images/dashboard/notifications.svg')
			campaignsStartBtn.setAttribute('src', 'images/dashboard/inbox.svg')
			dashboardStartBtn.setAttribute('src', 'images/dashboard/dashboard-active.svg')
		}
	}

	function campaignsStartBtnFunc() {
		campaignsStartBtn.addEventListener('click', eventFunction)
		function eventFunction() {
			notificationsPage.style.display = 'none';
			dashboardBody.style.display = 'none'
			campaignsPage.style.display = 'block'
			notificationsStartBtn.setAttribute('src', 'images/dashboard/notifications.svg')
			dashboardStartBtn.setAttribute('src', 'images/dashboard/dashboard.svg')
			campaignsStartBtn.setAttribute('src', 'images/dashboard/inbox-active.svg')
			
		}
	}


	function campaignsFollowUpBtnFunc() {
		campaignsFollowUpBtn.addEventListener('click', eventFunction)
		function eventFunction() {
			dashboardPage.style.display = 'none';
			followUpPage.style.display = 'flex'
			followUpLeftFunc()
		}
	}

	function campaignsNewBtnFunc() {
		campaignsNewBtn.addEventListener('click', eventFunction)
		function eventFunction() {
			dashboardPage.style.display = 'none';
			makeNewCampaignPage.style.display = 'block';
			newCampaignBackFunc();
			greetingCampaignStartBtnFunc()
			socialMediaCampStartBtnFunc();
		}
	}
	
	

		function newCampaignBtnFunc() {
			newCampaignBtn.addEventListener('click', eventFunction, {once: true})

			function eventFunction() {
				dashboardPage.style.display = 'none';
				makeNewCampaignPage.style.display = 'block';
				newCampaignBackFunc();
				greetingCampaignStartBtnFunc()
				socialMediaCampStartBtnFunc();
				
				newCampaignBtn.removeEventListener('click', eventFunction, {once: true})
				return false;
			}
		}

		function imgArrowDownUpFunc() {
			imgArrowDownUp.forEach(element => {
				element.addEventListener('click', eventFunction);
				function eventFunction() {
					if (!element.classList.contains('arrow-active')) {
						element.classList.add('arrow-active');
						element.setAttribute('src', 'images/greetings-campaign/up.svg')
					} else if(element.classList.contains('arrow-active')) {
						element.classList.remove('arrow-active')
						element.setAttribute('src', 'images/greetings-campaign/down.svg')
					}
				}

				greetingCampaignNext.addEventListener('click', ifGoNext, {once:true})
				function ifGoNext() {
					element.removeEventListener('click', eventFunction)
					greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true})
				}

				greetingCampaignArrowLeft.addEventListener('click', ifArrowLeft, {once: true})
				function ifArrowLeft() {
					element.removeEventListener('click', eventFunction);
					greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true})	
				}

				footerBack.addEventListener('click', ifGoBack, {once:true})
				function ifGoBack() {
					element.removeEventListener('click', eventFunction);
					footerBack.removeEventListener('click', ifGoBack, {once:true})
				}
			})
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
				newCampaignBack.removeEventListener('click', eventFunction, {once: true});
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
				greetingPage3.style.display = 'none'
				greetingCampaignNext.textContent = 'Next'
				progressBar[1].setAttribute('src', 'images/progress-1.svg')
				greetingCampaignPage.style.display = 'none';
				makeNewCampaignPage.style.display = 'flex';
				footerBack.classList.remove('click-target')
				footerBack.classList.remove('signup__back-active')
				greetingCampaignNext.classList.remove('greeting-last-next')
				greetingCampaignStartBtnFunc()
				socialMediaCampStartBtnFunc()
				greetingCampaignArrowLeft.removeEventListener('click', eventFunction, {once: true});
				return false;
			}
		}
		
		function greetingCampaignNext1Func() {

			greetingCampaignNext.addEventListener('click', eventFunction, {once: true})
			function eventFunction() {
				progressBar[1].removeAttribute('src')
				progressBar[1].setAttribute('src', 'images/progress-2.svg')
				footerBack.classList.add('click-target')
				footerBack.classList.add('signup__back-active')
				greetingPage1.style.display = 'none';
				greetingPage2.style.display = 'block'
				footerBack1Func();
				greetingCampaignNext2Func()
				imgCheckFunc()
				greetingCampaignNext.removeEventListener('click', eventFunction, {once: true})
			}

			greetingCampaignArrowLeft.addEventListener('click', ifArrow, {once: true})
			function ifArrow() {
				greetingCampaignNext.removeEventListener('click', eventFunction, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', eventFunction, {once: true})
			}
		}

		function footerBack1Func() {

			footerBack.addEventListener('click', eventFunction, {once:true});

			function eventFunction() {
				footerBack.classList.remove('click-target')
				footerBack.classList.remove('signup__back-active')
				progressBar[1].removeAttribute('src')
				progressBar[1].setAttribute('src', 'images/progress-1.svg')
				greetingPage1.style.display = 'block';
				greetingPage2.style.display = 'none'
				greetingCampaignNext1Func()
				imgArrowDownUpFunc()
				footerBack.removeEventListener('click', eventFunction, {once:true});
				greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true});
			}

			greetingCampaignNext.addEventListener('click', ifGoNext, {once:true});
			function ifGoNext() {
				footerBack.removeEventListener('click', eventFunction, {once:true});
				greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true});
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}

			greetingCampaignArrowLeft.addEventListener('click', ifArrowLeft, {once: true});
			function ifArrowLeft() {
				footerBack.removeEventListener('click', eventFunction, {once:true});
				greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true});
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}
		}
		function greetingCampaignNext2Func() {
			
			greetingCampaignNext.addEventListener('click', eventFunction, {once: true})
			function eventFunction() {
				progressBar[1].removeAttribute('src')
				progressBar[1].setAttribute('src', 'images/progress-3.svg')
				greetingPage1.style.display = 'none';
				greetingPage2.style.display = 'none'
				greetingPage3.style.display = 'block'
				greetingCampaignNext.textContent = 'Save & Send'
				greetingCampaignNext.classList.add('greeting-last-next')
				footerBack2Func();
				greetingCampaignNext3Func();
				imgArrowDownUpFunc()
				greetingCampaignNext.removeEventListener('click', eventFunction, {once: true})
				footerBack.removeEventListener('click', ifGoBack, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}

			footerBack.addEventListener('click', ifGoBack, {once: true})
			function ifGoBack() {
				greetingCampaignNext.removeEventListener('click', eventFunction, {once: true})
				footerBack.removeEventListener('click', ifGoBack, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}

			greetingCampaignArrowLeft.addEventListener('click', ifArrowLeft, {once: true});
			function ifArrowLeft() {
				footerBack.removeEventListener('click', ifGoBack, {once: true})
				greetingCampaignNext.removeEventListener('click', eventFunction, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}
		}

		function footerBack2Func() {
			
			footerBack.addEventListener('click', eventFunction, {once:true})
			function eventFunction() {
				progressBar[1].removeAttribute('src')
				progressBar[1].setAttribute('src', 'images/progress-2.svg')
				greetingPage3.style.display = 'none';
				greetingPage2.style.display = 'block'
				greetingCampaignNext.textContent = 'Next'
				greetingCampaignNext.classList.remove('greeting-last-next')
				greetingCampaignNext2Func()
				footerBack1Func();
				imgCheckFunc();
				footerBack.removeEventListener('click', eventFunction, {once:true})
				greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}

			greetingCampaignNext.addEventListener('click', ifGoNext, {once:true})
			function ifGoNext() {
				footerBack.removeEventListener('click', eventFunction, {once:true})
				greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}

			greetingCampaignArrowLeft.addEventListener('click', ifArrowLeft, {once: true});
			function ifArrowLeft() {
				footerBack.removeEventListener('click', eventFunction, {once:true})
				greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}
		}

		function greetingCampaignNext3Func() {

			greetingCampaignNext.addEventListener('click', eventFunction, {once:true})
			function eventFunction() {
				let dashboardPage = document.querySelector('.dashboard');
				let makeNewCampaignPage = document.querySelector('.new-campaign');
				let greetingCampaignPage = document.querySelector('.greeting-camp')

				makeNewCampaignPage.style.display = 'none'
				greetingCampaignPage.style.display = 'none'
				greetingPage3.style.display = 'none'
				greetingPage2.style.display = 'none'
				greetingPage1.style.display = 'block';
				dashboardPage.style.display = 'flex'
				greetingCampaignNext.textContent = 'Next'
				progressBar[1].setAttribute('src', 'images/progress-1.svg')
				footerBack.classList.remove('click-target')
				footerBack.classList.remove('signup__back-active')
				greetingCampaignNext.classList.remove('greeting-last-next')
				newCampaignFunc();

				greetingCampaignNext.removeEventListener('click', eventFunction, {once:true})
				footerBack.removeEventListener('click', ifGoBack, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}

			footerBack.addEventListener('click', ifGoBack, {once: true})
			function ifGoBack() {
				greetingCampaignNext.removeEventListener('click', eventFunction, {once:true})
				footerBack.removeEventListener('click', ifGoBack, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
			}

			greetingCampaignArrowLeft.addEventListener('click', ifArrowLeft, {once: true});
			function ifArrowLeft() {
				greetingCampaignNext.removeEventListener('click', eventFunction, {once: true})
				greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true});
				footerBack.removeEventListener('click', ifGoBack, {once: true})
			}
		}

		function imgCheckFunc() {

			imgCheck.forEach(element => {
				element.addEventListener('click', eventFunction)
				function eventFunction() {
					if (element.classList.contains('checked')) {
						element.setAttribute('src', 'images/greetings-campaign/unchecked.svg');
						element.classList.remove('checked')
					} else if (!element.classList.contains('checked')) {
						element.setAttribute('src', 'images/greetings-campaign/checked.svg');
						element.classList.add('checked')
					}
				}
				
				greetingCampaignNext.addEventListener('click', ifGoNext, {once:true})
				function ifGoNext() {
					element.removeEventListener('click', eventFunction)
					greetingCampaignNext.removeEventListener('click', ifGoNext, {once:true})
				}
				

				greetingCampaignArrowLeft.addEventListener('click', ifArrowLeft, {once: true})
				function ifArrowLeft() {
					element.removeEventListener('click', eventFunction);
					greetingCampaignArrowLeft.removeEventListener('click', ifArrowLeft, {once: true})	
				}
			});
		}


		let socialMediaCamp = document.querySelector('.social-media-camp');
		let socialMediaCampStartBtn = document.querySelector('.new-social-media-campaign')

		let socialMediaArrowLeft = document.querySelector('.social-media-left')

		let socialMediaPage1 = document.querySelector('.social-media-page1');
		let socialMediaPage2 = document.querySelector('.social-media-page2')
		
		let imgArrowDownUpSM = document.querySelectorAll('.img-arrow-down_up_sm')
		let imgCheck2 = document.querySelectorAll('.img-check2');

		let socialMediaEdit = document.querySelectorAll('.social-media-edit');
		let socialMediaPopup = document.querySelector('.social-media-popup')
		let socialMediaPopupBack = document.querySelector('.social-media-popup-back')
		let popupImgText = document.querySelector('.popup-img-text')
		let keyboard = document.querySelector('.keyboard')
		let popupBigImg = document.querySelector('.popup-big-image')
		let popupGoNext = document.querySelector('.social-media-popup-next')

		let socialMediaProgressBar = document.querySelector('.social-media-progress-bar')
		let socialMediaFooterBack = document.querySelector('.social-media-footer-back')
		let socialMediaFooterNext = document.querySelector('.social-media-footer-next')
		let socialMediaFooter = document.querySelector('.social-media-footer');


		

		function socialMediaCampStartBtnFunc() {
			socialMediaCampStartBtn.addEventListener('click', eventFunction, {once: true})

			function eventFunction() {
				makeNewCampaignPage.style.display = 'none';
				socialMediaCamp.style.display = 'flex';
				imgArrowDownUpSMFunc()
				imgCheck2Func();
				socialMediaEditFunc()
				socialMediaArrowLeftFunc()
				socialMediaCampStartBtn.removeEventListener('click', eventFunction, {once: true})
			}

			newCampaignBack.addEventListener('click', ifArrowLeft, {once: true});
			function ifArrowLeft() {
				socialMediaCampStartBtn.removeEventListener('click', eventFunction, {once: true})
				newCampaignBack.removeEventListener('click', ifArrowLeft, {once: true});
			}
		}

		function socialMediaArrowLeftFunc() {
			socialMediaArrowLeft.addEventListener('click', eventFunction, {once: true})

			function eventFunction() {
				socialMediaPage1.style.display = 'block'
				socialMediaPage2.style.display = 'none'
				socialMediaFooterNext.textContent = 'Next';
				socialMediaProgressBar.setAttribute('src', 'images/progress-1.svg')
				socialMediaCamp.style.display = 'none';
				makeNewCampaignPage.style.display = 'flex';
				socialMediaFooterBack.classList.remove('click-target')
				socialMediaFooterBack.classList.remove('signup__back-active')
				socialMediaCampStartBtnFunc();
				socialMediaArrowLeft.removeEventListener('click', eventFunction, {once: true});
				return false;
			}

			socialMediaFooterNext.addEventListener('click', ifGoNext, {once:true})
				function ifGoNext() {
					socialMediaArrowLeft.removeEventListener('click', eventFunction, {once: true});
					
					socialMediaFooterNext.removeEventListener('click', ifGoNext, {once:true})
				}
		}

		function imgArrowDownUpSMFunc() {

			imgArrowDownUpSM.forEach(element => {
				element.addEventListener('click', eventFunction);
				function eventFunction() {
					if (!element.classList.contains('arrow-active')) {
						element.classList.add('arrow-active');
						element.setAttribute('src', 'images/greetings-campaign/up.svg')
					} else if(element.classList.contains('arrow-active')) {
						element.classList.remove('arrow-active')
						element.setAttribute('src', 'images/greetings-campaign/down.svg')
					}
				}

				socialMediaFooterNext.addEventListener('click', ifGoNext, {once:true})
				function ifGoNext() {
					element.removeEventListener('click', eventFunction);
					socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
					socialMediaFooterNext.removeEventListener('click', ifGoNext, {once:true})
				}

				socialMediaArrowLeft.addEventListener('click', ifArrowLeft, {once:true})
				function ifArrowLeft() {
					element.removeEventListener('click', eventFunction);
					socialMediaFooterNext.removeEventListener('click', ifGoNext, {once:true})
					socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
				}
			})

			
		}

		function socialMediaEditFunc() {
			socialMediaEdit.forEach(element => {
				element.addEventListener('click', eventFunction, {once: true});
				function eventFunction() {
					socialMediaPopup.style.display = 'block'
					socialMediaPopupBackFunc()
					popupImgTextFunc()
					element.removeEventListener('click', eventFunction, {once: true});
				}
			})
		}

		function socialMediaPopupBackFunc() {
			socialMediaPopupBack.addEventListener('click', eventFunction, {once:true})
			function eventFunction() {
				socialMediaPopup.style.display = 'none'
				keyboard.style.display = 'none'
				popupBigImg.style.marginTop = '0'
				popupImgText.classList.add('click-target')
				popupImgText.setAttribute('src', 'images/social-medai-campaign/text1.svg')
				socialMediaEditFunc()
				socialMediaPopupBack.removeEventListener('click', eventFunction, {once:true})
			}

			popupGoNext.addEventListener('click', ifGoNext, {once:true})
			function ifGoNext() {
				socialMediaPopupBack.removeEventListener('click', eventFunction, {once:true})
				popupGoNext.removeEventListener('click', ifGoNext, {once:true})
			}
		}

		function popupImgTextFunc() {
			popupImgText.addEventListener('click', eventFunction, {once:true})
			function eventFunction() {
				keyboard.style.display = 'block'
				popupBigImg.style.marginTop = '-10rem'
				popupImgText.classList.remove('click-target')
				popupImgText.setAttribute('src', 'images/social-medai-campaign/text2.svg')
				popupGoNext.classList.add('click-target')
				popupGoNextFunc()
				popupImgText.removeEventListener('click', eventFunction, {once:true})
			}

			popupGoNext.addEventListener('click', ifGoNext, {once:true})
			function ifGoNext() {
				socialMediaPopupBack.removeEventListener('click', eventFunction, {once:true})
				popupGoNext.removeEventListener('click', ifGoNext, {once:true})
			}
		}

		function popupGoNextFunc() {
			popupGoNext.addEventListener('click', eventFunction, {once:true})
			function eventFunction() {
				socialMediaPopup.style.display = 'none'
				keyboard.style.display = 'none'
				popupBigImg.style.marginTop = '0'
				popupImgText.classList.add('click-target')
				popupImgText.setAttribute('src', 'images/social-medai-campaign/text1.svg')
				socialMediaPage1.style.display = 'none'
				socialMediaPage2.style.display = 'block'
				socialMediaProgressBar.setAttribute('src', 'images/progress-3.svg')
				socialMediaFooterBack.classList.add('click-target')
				socialMediaFooterBack.classList.add('signup__back-active')
				socialMediaFooterNext.textContent = 'Save & Post';
				socialMediaFooter.style.zIndex = '10'
				socialMediaFooterBackFunc()
				socialMediaFooterNextFunc()
				
				popupGoNext.removeEventListener('.click', eventFunction, {once:true})
			}

			socialMediaPopupBack.addEventListener('click', ifGoBack, {once:true})
			function ifGoBack() {
				popupGoNext.removeEventListener('.click', eventFunction, {once:true})
				socialMediaPopupBack.removeEventListener('click', ifGoBack, {once:true})
			}
		}

		function socialMediaFooterBackFunc() {
			socialMediaFooterBack.addEventListener('click', eventFunction, {once:true})
			function eventFunction() {
				popupImgText.setAttribute('src', 'images/social-medai-campaign/text1.svg')
				socialMediaFooterBack.classList.remove('click-target')
				socialMediaFooterBack.classList.remove('signup__back-active')
				socialMediaProgressBar.setAttribute('src', 'images/progress-1.svg')
				socialMediaPage2.style.display = 'none'
				socialMediaPage1.style.display = 'block'
				socialMediaFooterNext.textContent = 'Next'
				socialMediaEditFunc()
				imgCheck2Func()
				socialMediaFooterBack.removeEventListener('click', eventFunction, {once:true})
			}

			socialMediaArrowLeft.addEventListener('click', ifArrowLeft, {once: true})
			function ifArrowLeft() {
				socialMediaFooterBack.removeEventListener('click', eventFunction, {once:true})
				socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once: true})
			}
		}


		function socialMediaFooterNextFunc() {
			socialMediaFooterNext.addEventListener('click', eventFunction, {once:true})
			function eventFunction() {
				makeNewCampaignPage.style.display = 'none'
				socialMediaCamp.style.display = 'none'
				socialMediaPage2.style.display = 'none'
				socialMediaPage1.style.display = 'block'
				dashboardPage.style.display = 'flex'
				socialMediaFooterNext.textContent = 'Next'
				socialMediaProgressBar.setAttribute('src', 'images/progress-1.svg')
				socialMediaFooterBack.classList.remove('click-target')
				socialMediaFooterBack.classList.remove('signup__back-active')
				newCampaignFunc();

				socialMediaFooterBack.removeEventListener('click', ifGoBack, {once:true})
				socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
				socialMediaFooterNext.removeEventListener('click', eventFunction, {once:true})
			}

			socialMediaFooterBack.addEventListener('click', ifGoBack, {once:true})
			function ifGoBack() {
				socialMediaFooterNext.removeEventListener('click', eventFunction, {once:true})
				socialMediaFooterBack.removeEventListener('click', ifGoBack, {once:true})
				socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
			}

			socialMediaArrowLeft.addEventListener('click', ifArrowLeft, {once:true})
			function ifArrowLeft() {
				socialMediaFooterNext.removeEventListener('click', eventFunction, {once:true})
				socialMediaFooterBack.removeEventListener('click', ifGoBack, {once:true})
				socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
			}
		}

		function imgCheck2Func() {
			imgCheck2.forEach(element => {
				element.addEventListener('click', eventFunction);
				function eventFunction() {
					if (element.classList.contains('checked')) {
						element.setAttribute('src', 'images/greetings-campaign/unchecked.svg');
						element.classList.remove('checked')
					} else if (!element.classList.contains('checked')) {
						element.setAttribute('src', 'images/greetings-campaign/checked.svg');
						element.classList.add('checked')
					}
				}

				socialMediaArrowLeft.addEventListener('click', ifArrowLeft, {once:true})
				function ifArrowLeft() {
					element.removeEventListener('click', eventFunction)
					socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
				}

				socialMediaFooterNext.addEventListener('click', ifGoNext, {once:true})
				function ifGoNext() {
					element.removeEventListener('click', eventFunction)
					socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
					socialMediaFooterNext.removeEventListener('click', ifGoNext, {once:true})
				}

				socialMediaFooterBack.addEventListener('click', ifGoBack, {once:true})
				function ifGoBack() {
					element.removeEventListener('click', eventFunction)
					socialMediaFooterBack.removeEventListener('click', ifGoBack, {once:true})
				}

				newCampaignBtn.addEventListener('click', ifMakeNew, {once:true})
				function ifMakeNew() {
					element.removeEventListener('click', eventFunction)
					socialMediaArrowLeft.removeEventListener('click', ifArrowLeft, {once:true})
					newCampaignBtn.removeEventListener('click', ifMakeNew, {once:true})
				}
			})
		}
	
}



