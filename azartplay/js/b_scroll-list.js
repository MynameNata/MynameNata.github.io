$(function () {
	var first_item = $('.b_scroll-list__item').first(),
		items_count = $('.b_scroll-list__inner-container').children().length,
		items_pos = 1;

	$('.b_scroll-list__btn-right').click(function () {
		if(items_pos <= 6) {
			first_item.animate({ marginLeft: '-=172'}, 250);
			items_pos++;
		}
	});
	$('.b_scroll-list__btn-left').click(function () {
		if(items_pos > 1) {
			first_item.animate({ marginLeft: '+=172'}, 250);
			items_pos--;
		}
	});
})