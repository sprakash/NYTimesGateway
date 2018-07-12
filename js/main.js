$(document).ready(function() {
	
	$('.expand-collapse').bind('click',function() {
		var clickedAsset = this;

		if($(this).hasClass('collapse')){
			$(this).closest('.box').nextAll('.access-detail').slideUp("slow", function() {
				$(clickedAsset).removeClass('collapse');
				$(clickedAsset).html('expand details <span><i class="fa fa-chevron-down"></i></span>');
				$(clickedAsset).find('.fa').removeClass('.fa-chevron-up').addClass('fa-chevron-down');
			});
		
		} else {
			$(this).closest('.box').nextAll('.access-detail').slideDown("slow", function(){
				$(this).css({'display':'flex','opacity':1});
				$(clickedAsset).addClass('collapse');
				$(clickedAsset).html('collapse details <span><i class="fa fa-chevron-up"></i></span>');
			}); 
		}
		
	});

});

