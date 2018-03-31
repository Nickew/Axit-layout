var slider = (function() {

	var slider = document.querySelector('.pricing__payments');
	var payments = document.querySelectorAll('.pricing__payment');
	var prev = document.querySelector('#left');
	var next = document.querySelector('#right');
	var current = 1;
	var leftOffset = -225;
	var sliderWidth = slider.offsetWidth;
	var slideWidth = payments[0].offsetWidth;

	var firstSlide = payments[0];
	var lastSlide = payments[payments.length - 1];

	//lastSlide.after(firstSlide.clone(true));

	window.addEventListener('resize', _update);

	_update();

	function _update() {
		if (!(window.innerWidth >= 767)) {
			_init();
		} else {
			_reset();
		}
		_eventBindings();
	}


	function prevSlide() {
		if (current != 0) {
			current--;
			updateSlider();
		} else {
			return 0;
		}
	}

	function nextSlide() {
		if (current != 2) {
			current++;
			updateSlider();
		} else {
			return 0;
		}
	}

	function updateSlider() {
		if (window.innerWidth <= 767 && window.innerWidth > 601) {
			if (current == 0) {
				slider.style.left = '125px';
			} else if (current == 1) {
				slider.style.left = '-225px';
			} else if (current == 2) {
				slider.style.left = '-575px';
			}
		} else if (window.innerWidth < 601) {
			if (current == 0) {
				slider.style.left = '0px';
			} else if (current == 1) {
				slider.style.left = -slideWidth + 'px';
			} else if (current == 2) {
				slider.style.left = -(slideWidth * 2) + 'px';
			}
		}
	}

	function _init() {
		payments.forEach(function(payment) {
			payment.style.minWidth = '350px';
			payment.style.opacity = '1';
		});
	}

	function _eventBindings() {
		prev.addEventListener('click', prevSlide);
		next.addEventListener('click', nextSlide);
	}

	function _reset() {
		// payments.forEach(function(payment) {
		// 	payment.classList.remove('pricing__selected');
		// 	payment.classList.remove('pricing__unselected');
		// });
	}



})()