/***************************
*
* @author: Darko Golubovic
* @date: 29-06-2016
*
***************************/
var page = {
	musicP: function () {
		audio = document.getElementsByTagName("audio")[0];
		
		$(audio).get(0).addEventListener("timeupdate",function(){
			var progress = Math.floor((100 / audio.duration) * audio.currentTime);
			
			$('.progressBar__line').css('width', progress + '%');
	    });
		
		$(document).on('click', '.control__play', function(){
			if(!$(this).hasClass('control__pause')){
				audio.play();
				$(this).addClass('control__pause');
			} else {
				audio.pause();
				$(this).removeClass('control__pause');
			}		
		});
	},

	init: function () {
		this.musicP();	
	}
};

$(document).ready(function() {
	page.init();
});