$(function(){
	$.ajax({
		// 方式
		type:'GET',
		url:'html/common/header.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
//			console.log(msg);
			$('#top').append(msg);
		}
	})
	$.ajax({
		// 方式
		type:'GET',
		url:'html/common/nav.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
//			console.log(msg);
			$('.nav').append(msg);
		}
	})
	$.ajax({
		// 方式
		type:'GET',
		url:'html/common/footer.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
//			console.log(msg);
			$('#footer').append(msg);
		}
	})
	$.ajax({
			// 方式
		type:'GET',
		url:'html/common/story.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
//			console.log(msg);
			$('#story').append(msg);
		}
	})
//	$.cookie('product-count');
	$('#count-search').html($.cookie('number'));
	$('#shu').html($.cookie('number'));
	
	$('.shopcard').click(function(){
		window.open('shop-cart.html','_self');
	})
	
	
	
	$('.banner').hover(function(){
		$(this).find('#leftBtn,#rightBtn,#nav').show();
	},
	function(){
		$(this).find('#leftBtn,#rightBtn,#nav').hide();
	})
	var index = 0;
	$("#banners div").eq(0).show();
	$("#nav span").click(function(){ 
		index = $(this).index();
//		alert(index);
		$(this).addClass("on").siblings().removeClass("on");
		$("#banners div").eq(index).show().siblings().hide();	
	});
	var inter = setInterval(function(){
		index++;
		if(index>9){
			index = 0;
		}
		$("#nav span").eq(index).addClass("on").siblings().removeClass("on");
		$("#banners div").eq(index).show().siblings().hide();		
	},2000);	
	$("#banners").mouseover(function(){
		clearInterval(inter);	
	});	
	$("#banners").mouseout(function(){
		inter = setInterval(function(){
			index++;
			if(index>9){
				index = 0;
			}
			$("#nav span").eq(index).addClass("on").siblings().removeClass("on");
			$("#banners div").eq(index).show().siblings().hide();		
		},2000);	
	});
	
	
	
	//遮盖
	//可视区高度，宽度
	var height1=$(document).height();
	var height=document.documentElement.clientHeight;
	var width=document.documentElement.clientWidth;
	$('.cover').height(height1);
	$('.cover').width(width);
	var left1=(width-$('.diqu').width())/2;
	var top1=(height-$('.diqu').height())/2;
	$('.diqu').css({
		'left':left1,
		'top':top1
	});
	$('#close').click(function(){
		$('.diqu').hide();
		$('.cover').hide();
	})
	//菜单吸顶
	$(document).scroll(function(){
		if($(document).scrollTop()>500){
			$('.menu').show();
		}
		else{
			$('.menu').hide();
		}
	})
	//侧边栏
	$(document).scroll(function(){
		if($(document).scrollTop()<2000){
			$('.bar').hide();
			$('#bar').children().hide();
		}
		if($(document).scrollTop()>2000){
			$('.bar').show();
			$('.bar1').show().siblings().hide();
		}
		if($(document).scrollTop()>2600){
			$('.bar2').show().siblings().hide();
		}
		if($(document).scrollTop()>3200){
			$('.bar3').show().siblings().hide();
		}
		if($(document).scrollTop()>3800){
			$('.bar4').show().siblings().hide();
		}
		if($(document).scrollTop()>4400){
			$('.bar5').show().siblings().hide();
		}
		if($(document).scrollTop()>5000){
			$('.bar6').show().siblings().hide();
		}
		if($(document).scrollTop()>5600){
			$('.bar1').hide();
			$('.bar2').hide();
			$('.bar3').hide();
			$('.bar4').hide();
			$('.bar5').hide();
			$('.bar6').hide();
			$('.bar7').show().siblings().hide();
		}
	})
	//头部地区的切换
	$('.area li:first').hover(function(){
		$('.guojia').show();
		$(this).css('background','#fff');
	},
	function(){
		$('.guojia').hide();
		$(this).css('background','#f1f1f1');
	})
	$('.guojia').hover(function(){
		$(this).show();
		$('.area li:first').css('background','#fff');
	},
	function(){
		$(this).hide();
		$('.area li:first').css('background','#f1f1f1');
	})
	//钱币的切换
	$('.area li').eq(1).hover(function(){
		$('.money').show();
		$(this).css('background','#fff');
	},
	function(){
		$('.money').hide();
		$(this).css('background','#f1f1f1');
	})
	$('.money').hover(function(){
		$(this).show();
		$('.area li').eq(1).css('background','#fff');
	},
	function(){
		$(this).hide();
		$('.area li').eq(1).css('background','#f1f1f1');
	})
	//个人中心
	$('.personal li:last').hover(function(){
		$('.geren').show();
		$(this).css('background','#fff');
	},
	function(){
		$('.geren').hide();
		$(this).css('background','#f1f1f1');
	})
	$('.genren').hover(function(){
		$(this).show();
		$('.personal li:last').css('background','#fff');
	},
	function(){
		$(this).hide();
		$('.personal li:last').css('background','#f1f1f1');
	})
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
	
	
	
	var n1=0;
	var timer1=setInterval(lunbol1,5000);
	$('.main .new_thing ul li').click(function(){
//		clearInterval(timer1);
		n1=$(this).index();	
		$(this).addClass('on').siblings().removeClass('on');
		$('.main .detail_thing .all_detail ul').eq(n1).show().siblings().hide();
	})
//	$('.main .new_thing ul li').mouseout(function(){
//		timer1=setInterval(lunbol1,5000);
//	})
	function lunbol1(){
		n1++;
		if(n1==$('.main .new_thing ul li').length){
			n1=0;
		}
		$('.main .new_thing ul li').eq(n1).addClass('on').siblings().removeClass('on');
		$('.main .detail_thing .all_detail ul').eq(n1).show().siblings().hide();
	}
	
	var n2=0;
	var timer2=setInterval(lunbol2,5000);
	$('.main .hot_thing ul li').click(function(){
		n1=$(this).index();	
		$(this).addClass('on').siblings().removeClass('on');
		$('.main .thing1 ul').eq(n2).show().siblings().hide();
	})
	function lunbol2(){
		n2++;
		if(n2==$('.main .hot_thing ul li').length){
			n2=0;
		}
		$('.main .hot_thing ul li').eq(n2).addClass('on').siblings().removeClass('on');
		$('.main #thing1 ul').eq(n2).show().siblings().hide();
	}
	
	//母婴用品中的轮播图
	var n3=0;
	var timer3=setInterval(lunbor3,3000);
	$('.muying .baby_activity').hover(function(){
		$(this).find('span,ol').show();
		clearInterval(timer3);
	},
	function(){
		$(this).find('span,ol').hide();
		timer3=setInterval(lunbor3,3000);
	})
	$('.muying .baby_activity ol li').click(function(){
		n3=$(this).index();
		clearInterval(timer3);
		$(this).addClass('on').siblings().removeClass('on');
		$('.muying .baby_activity ul li a img').attr('src','img/baby'+(n3+1)+'.jpg');
	})
	$('.muying .baby_activity ol li').mouseout(function(){
		timer3=setInterval(lunbor3,3000);
	}) 
	$('#previous').click(function(){
		clearInterval(timer3);
		lunbol3();
	})
	$('#next').click(function(){
		clearInterval(timer3);
		lunbor3();
	})
	function lunbor3(){
		n3++;
		if(n3==$('.muying .baby_activity ol li').length){
			n3=0;
		}
		$('.muying .baby_activity ul li img').attr('src','img/baby'+(n3+1)+'.jpg');
		$('.muying .baby_activity ol li').eq(n3).addClass('on').siblings().removeClass('on');
	}
	function lunbol3(){
		n3--;
		if(n3==-1){
			n3=$('.muying .baby_activity ol li').length-1;
		}
		$('.muying .baby_activity ul li img').attr('src','img/baby'+(n3+1)+'.jpg');
		$('.muying .baby_activity ol li').eq(n3).addClass('on').siblings().removeClass('on');
	}
	
	//美妆个护中的轮播图
	var n4=0;
	var timer4=setInterval(lunbor4,3000);
	$('.meizhuang .meizhuang_activity').hover(function(){
		$(this).find('span,ol').show();
		clearInterval(timer4);
	},
	function(){
		$(this).find('span,ol').hide();
		timer4=setInterval(lunbor4,3000);
	})
	$('.meizhuang .meizhuang_activity ol li').click(function(){
		n4=$(this).index();
		clearInterval(timer4);
		$(this).addClass('on').siblings().removeClass('on');
		$('.meizhuang .meizhuang_activity ul li a img').attr('src','img/meizhuang'+(n4+1)+'.jpg');
	})
	$('.meizhuang .meizhuang_activity ol li').mouseout(function(){
		timer4=setInterval(lunbor4,3000);
	}) 
	$('#previous1').click(function(){
		clearInterval(timer4);
		lunbol4();
	})
	$('#next1').click(function(){
		clearInterval(timer4);
		lunbor4();
	})
	function lunbor4(){
		n4++;
		if(n4==$('.meizhuang .meizhuang_activity ol li').length){
			n4=0;
		}
		$('.meizhuang .meizhuang_activity ul li img').attr('src','img/meizhuang'+(n4+1)+'.jpg');
		$('.meizhuang .meizhuang_activity ol li').eq(n4).addClass('on').siblings().removeClass('on');
	}
	function lunbol4(){
		n4--;
		if(n4==-1){
			n4=$('.meizhuang .meizhuang_activity ol li').length-1;
		}
		$('.meizhuang .meizhuang_activity ul li img').attr('src','img/meizhuang'+(n4+1)+'.jpg');
		$('.meizhuang .meizhuang_activity ol li').eq(n4).addClass('on').siblings().removeClass('on');
	}
	
})
