$(document).ready(function () {
	var $span = $('span');
	$span.each(function(index, element) {
		// $("span:odd").css('color','red');
		if (index % 2 == 0) {					
			$(element).css('color', 'red');
		};
	});
});	

$(document).ready(function () {
	var $paragraphs = $('p');
	$paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	$(element).append(button);
	});
});

$(document).ready(function () {
	$('button').click(function () {
		alert($(this).attr('data-tmp'));
	});
});