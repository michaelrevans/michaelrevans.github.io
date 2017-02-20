$(document).ready(function() {
	var $input = $('#input'),
		$output = $('#output'),
		$submit = $('#submit-btn');
	function reverseString(str) {
		var result = '';
		for (var i = 1; i <= str.length; i ++) {
			result += str[str.length - i];
		}
		return result;
	}
	$input.on('change', function() {
		$output.text(reverseString($input.val()));
	})
	$submit.on('click', function(event) {
		event.preventDefault();
		$output.text(reverseString($input.val()));
	})
});