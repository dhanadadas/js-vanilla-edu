window.addEventListener("DOMContentLoaded", function () {
	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
		    for (let i = 0; i < tab.length; i++){
		        if (target == tab[i]){
		          hideTabContent(0);
		          showTabContent(i);
		          break;
            };
        };
		}
	});

	// timer
	let deadLine = '2020-04-30';
	function getTimeRemaining(endtime) {
		let t = Date.parse(deadLine)- Date.parse(new Date()),
		seconds   = Math.floor( (t/1000) % 60),
			minutes = Math.floor( (t/1000/60) % 60),
			hours   =  Math.floor( (t/1000/60/60) );
		//day     = Math.floor( (t/1000*60*60*24) );
		return {
			'total':t,
			'seconds':seconds,
			'minutes':minutes,
		    'hours':hours
		};
	}


	function setClock(id,endtime) {
			let timer = document.getElementById(id),
				hours   = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'),
				timeInterval = setInterval(updateClock,1000);
			function updateClock() {
				let t = getTimeRemaining(endtime);
				if ( t.hours<=9) hours.textContent = "0" + t.hours; else hours.textContent = t.hours;
				if ( t.minutes<=9) minutes.textContent = "0" + t.minutes; else minutes.textContent = t.minutes;
				if ( t.seconds<=9) seconds.textContent = "0" + t.seconds; else seconds.textContent = t.seconds;

				if (t.total<0){
					clearInterval(timeInterval);
				}
			}
		}
		setClock('timer' , deadLine);

	/*
	 * Модальное окно
	 *
	 */
	let more  = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close   = document.querySelector('.popup-close');

	function show () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';// запретить прокрутку
	}
	function hidden () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	}
	more.addEventListener('click',show);
	close.addEventListener('click',hidden);

	let descriptionBtn = document.querySelectorAll('.description-btn');
	descriptionBtn.forEach(function (btn) {
		btn.addEventListener('click',show);
	})
});

