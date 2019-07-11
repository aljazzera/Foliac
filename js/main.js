;(function(){
	var btn = document.body.querySelector('.ba-menuicon');


	btn.onclick = function(){
		document.body.querySelector('.ba-menu').classList.toggle('ba-menu-open');
		document.body.querySelector('.ba-menu-open').style.width = window.innerWidth+'px';
		if(document.body.querySelector('.ba-menu').classList.contains('ba-menu-open')){
			document.body.querySelector('.ba-menu').style.top = '100%';
		}else{
		document.body.querySelector('.ba-menu').style.top = '-180px';
		}
	}
	window.onresize = function(){
		var width = window.innerWidth;
		if(width > 800){
			document.body.querySelector('.ba-menu').style.width = 'auto';
		}else{
			document.body.querySelector('.ba-menu').style.width = window.innerWidth + 'px';
		}
	}

	// overlay.onclick = function(){
	// 	body.classList.toggle('ba-menu-open');
	// }

})();

$(document).ready(function () {
    $('.ba-filter a').click(function(e) {

        $('.ba-filter a').removeClass('ba-active');

        var $this = $(this);
        if (!$this.hasClass('ba-active')) {
            $this.addClass('ba-active');
        }
        e.preventDefault();
    });
});