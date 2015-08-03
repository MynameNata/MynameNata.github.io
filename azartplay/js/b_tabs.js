$(function () {
	$('.action-slide_link').click(function () {
		var id = $(this).attr('href');
			tab = $(id);

		$('.action-slide .action-block').hide();
		tab.show();	

		$('.action-slide_link').removeClass('active');
		$(this).addClass('active');

		return false;
	});

	$('.action-slide_link.active').click();
});