var popular = (function(){

	var targetId = document.querySelector('#most-popular');

	function _init() {
		// resets old styles (border-bottom)
		targetId.style.borderBottom = 'none';
		addTextBlock();
	}

	_init();

	function addTextBlock() {
		var extraDiv = document.createElement('div');
		extraDiv.className = 'pricing__most-popular';
		targetId.appendChild(extraDiv);
		var mostPopular = document.querySelector('.pricing__most-popular');
		mostPopular.innerHTML = 'our most popular';
	}

})()