$(function(){
	var num=0;
	var xx=$('.wmuSlider').find('article').length;
	$('.wmuSlider').children().eq(num).css('opacity','1');
	$('.wmuSlider .wmuSliderPrev')
	.bind('click',function(){

		if(num==0){
			num=xx-1;
		}else{
			num-=1;
		}
		for(var i=0; i<xx;i++){
			$('.wmuSlider').find('article').css('opacity','0');
		}
		$('.wmuSlider').children().eq(num).css('opacity','1');
	})
	$('.wmuSlider .wmuSliderNext')
	.bind('click',function(){

		if(num==xx-1){
			num=0;
		}else{
			num+=1;
		}
		for(var i=0; i<xx;i++){
			$('.wmuSlider').find('article').css('opacity','0');
		}
		$('.wmuSlider').children().eq(num).css('opacity','1');
	})
	$('.portfolio-wrapper .b-wrapper').bind('mouseover',function(){
		$(this).addClass('cover');
	})
	.bind('mouseout',function(){
		$(this).removeClass('cover');
	})

})