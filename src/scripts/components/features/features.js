(function(){

	var data = {
		elements: document.querySelectorAll('.features__nav-item'),
		tabs: document.querySelectorAll('.features__tab')
	};

	function _init() {
		for (var j = 0; j < data.tabs.length; j++) {
			data.tabs[j].style.display = 'none';
		}

		for (var i = 0; i < data.elements.length; i++) {
			if (data.elements[i].classList.contains('features__nav-item--active')) {
				data.tabs[i].style.display = 'flex';
			}
		}

		for (var i = 0; i < data.elements.length; i++) {
			data.elements[i].addEventListener('click', eventListener);	
		}
	}

	_init();

	function eventListener() {
		for (var i = 0; i < data.elements.length; i++) {
			if (data.elements[i] == this) {
				data.tabs[i].style.display = 'flex';
				data.elements[i].classList.add('features__nav-item--active');
			} else {
				data.tabs[i].style.display = 'none';
				data.elements[i].classList.remove('features__nav-item--active');
			}
		}
	}



})()