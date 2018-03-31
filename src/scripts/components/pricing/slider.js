var slider = (function() {

	var payments = document.querySelectorAll('.pricing__payment');

	payments.forEach(function(payment) {
		payment.childNodes[1].id == 'most-popular' ? payment.classList.add('pricing__selected') : payment.classList.add('pricing__unselected');
	});



})()