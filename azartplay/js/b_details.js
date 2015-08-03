$(function () {
	var btn = $('.pop-ul_btn'),
		block = $('.pop-block'),
		block_min_height = 290,
		block_max_height = 800;

	btn.click(function () {
		if(block.height() < block_max_height) {
			block.animate({ height: block_max_height }, 300);
			btn.css('backgroundImage', 'url(img/pop-btn-up.png)');
		} else {
			block.animate({ height: block_min_height}, 300);
			btn.css('backgroundImage', 'url(img/pop-btn.png)');
		}		
	})
})