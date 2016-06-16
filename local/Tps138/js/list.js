$(function(){
	//全部商品
	$('.catalog h3').hover(function(){
		$('.catalog ul').show();
	},
	function(){
		$('.catalog ul').hide();
	})
	$('.catalog ul').hover(function(){
		$(this).show();
	},
	function(){
		$(this).hide();
	})
	$('#muying').hover(function(){
		$('.muying1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
//		$('.muying').hide();
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.muying1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .muying1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .muying1').find('i').hide();
	})
	
	$('#meizhuang').hover(function(){
		$('.meizhuang1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.meizhuang1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .meizhuang1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .meizhuang1').find('i').hide();
	})
	
	$('#tiyu').hover(function(){
		$('.tiyu1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.tiyu1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .tiyu1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .tiyu1').find('i').hide();
	})
	
	$('#yingyang').hover(function(){
		$('.yingyang1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.yingyang1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .yingyang1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .yingyang1').find('i').hide();
	})
	
	$('#shipin').hover(function(){
		$('.shipin1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.shipin1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .shipin1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .shipin1').find('i').hide();
	})
	
	$('#jiaju').hover(function(){
		$('.jiaju1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.jiaju1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .jiaju1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .jiaju1').find('i').hide();
	})
	$('#zhongbiao').hover(function(){
		$('.zhongbiao1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.zhongbiao1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .zhongbiao1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .zhongbiao1').find('i').hide();
	})
	
	$('#shuma').hover(function(){
		$('.shuma1').show();
		$(this).find('i').show().parents('li').siblings().find('i').hide();
	},
	function(){
		$('.muying1').hide();
		$('.meizhuang1').hide();
		$('.tiyu1').hide();
		$('.zhongbiao1').hide();
		$('.yingyang1').hide();
		$('.shuma1').hide();
		$('.shipin1').hide();
		$('.jiaju1').hide();
	})
	$('.shuma1').hover(function(){
		$(this).show();
		$('.catalog ul').show();
		$('.catalog ul .shuma1').find('i').show();
	},
	function(){
		$('.catalog ul').hide();
		$(this).hide();
		$('.catalog ul .shuma1').find('i').hide();
	})
	
	
	//鼠标划上给品牌加边框
	$('.list-search dd a').hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$(this).parents('dd').find('a').eq(0).addClass('on');
	},
	function(){
		$(this).removeClass('on');
	})
	
	 $(".tcdPageCode").createPage({
        pageCount:3,
        current:1,
        backFn:function(p){
            console.log(p);
            $('.list-search').find('ul').hide();
            $('.list-search ul').eq(p-1).show();
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
