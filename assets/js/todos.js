$(document).ready(function() {
// Delete from list
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
    	$(this).remove();
    });
    event.stopPropagation();
});


$('input[type="text"]').keypress(function(event) {
	if (event.which === 13) {
		var input = $('input[type="text"]').val();

		liFunct(input);

		$(this).val('');
	}
});

// Cross off itemjl
$('ul').on('click', 'li',function() {
    $(this).toggleClass('crossed-out');
});


$('ul').on('mouseover', 'li', function() {
    if ($(this).css('color') === "rgb(0, 0, 0)") {
        $(this).addClass('hovered');
    }
});

$('ul').on('mouseout', 'li', function() {
    if ($(this).css('color') === "rgb(0, 0, 0)") {
        $(this).removeClass('hovered');
    }
});


$('.fa-plus').on('click', function() {
	$('input[type="text"').fadeToggle();
})

function liFunct(input) {
	var element = `<li> <span><i class="fa fa-trash"></i></span> ${input}</li>`;
	$('ul').append(element);
}



})