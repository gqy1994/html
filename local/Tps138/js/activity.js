$(function(){
	var width1=$(document).width();
	
	$(".bg-content").css({'width':width1,"margin":"0 auto"});
	$('.current').click(function(){
		if($(this).parent().find('dd').css('display')=="none"){
			$(this).parent().find('dd').show();
			$(this).find('i').animate({'border-left':0},2000);
		}
		else{
			$(this).parent().find('dd').hide();
			$(this).find('i').css('border-left','1px solid #333');
		}
	})
	
	$('.select dd li').hover(function(){
		$(this).css('background','#D3D3D3').siblings().css('background','#fff');
	},
	function(){
		$(this).css('background','#fff')
	})
	
	$(".tcdPageCode").createPage({
        pageCount:3,
        current:1,
        backFn:function(p){
            console.log(p);
         	$('.sale-content').find('ul').hide();
            $('.sale-content ul').eq(p-1).show();
        }
    });
    
     $(document).scroll(function(){
    	if($(document).scrollTop()>500){
    		$('.toTop').show();
    	}
    	else{
    		$('.toTop').hide();
    	}
    })
    $('.toTop').click(function(){
//  	$(document).scrollTop(0);
		$('html,body').animate({scrollTop:0},500);
    })
    
 
})
