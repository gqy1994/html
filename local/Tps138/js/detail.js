$(function(){
//	alert($('.itemInfo input').val());
//	alert($('#num').html());
	var val=$('.itemInfo input').val();
	var count=$('#num').html();
	$('.increase').click(function(){
		val++;
		count--;
		if(count<0){
			alert("库存不足");
		}
		else{
			$('#num').html(count);
		}
		$('.itemInfo input').val(val);
	})
	$('.decrease').click(function(){
		val--;
		count++;
		$('#num').html(count);
		if(val<0){
			alert("操作出错");
		}
		else{
			$('.itemInfo input').val(val);
		}
	})
	$('.cart').click(function(){
//		alert($('.number').val());
//		alert($('.top-pic span img').attr('src'));
		var title=$('.tit').find('h1').html();//商品的名称
		var danjia=($('.price').html()).slice(1);//商品的价格
		var chujia=($('.chujia').html()).slice(1);//商品的原价
//		alert(danjia);
		var shuliang=$('.number').val();//购买商品的数量
		var src=$('.top-pic span img').attr('src');//商品图片
		$.cookie('title',title,{expires:7,path:'/',secure:false});
		$.cookie('price',danjia,{expires:7,path:'/',secure:false});
//		$.cookie('json',"{'price':"+danjia+",'title':"+title+"}",{expires:7,path:'/',secure:false});
		$.cookie('oldprice',chujia,{expires:7,path:'/',secure:false});
		$.cookie('productNum',shuliang,{expires:7,path:'/',secure:false});
		$.cookie('src',src,{expires:7,path:'/',secure:false});
		$('.shopping').show();
		setTimeout(function(){
			$('.shopping').hide();
		},5000)
	})
	
	$('.jiesuan,.detail-cart').click(function(){
		window.open('shop-cart.html');
	})
	
	
	
	
	$(document).scroll(function(){
    	if($(document).scrollTop()>500){
    		$('.toTop').show();
    	}
    	else{
    		$('.toTop').hide();
    	}
    	if($(document).scrollTop()>850){
    		$('.meau-top').show();
    	}
    	else{
    		$('.meau-top').hide();
    	}
    })
    $('.toTop').click(function(){
//  	$(document).scrollTop(0);
		$('html,body').animate({scrollTop:0},500);
    })
    
    
    $('.imgMeau ul li').mouseover(function(){
    	var num;
    	$(this).addClass('border').siblings().removeClass('border');
    	num=$(this).index();
    	$('.big img').attr('src','img/big'+(num+1)+'.jpg');
    	$('.top-pic img').attr('src','img/big'+(num+1)+'.jpg');
    })
    
    //放大镜
    $('.top-pic').mousemove(function(ev){
    	var scale=800/458;
    	ev=ev||event;
    	$('.lay,.big').show();
    	var x=ev.pageX-$(this).offset().left-$('.lay').width()/2;
    	var y=ev.pageY-$(this).offset().top-$('.lay').height()/2;
    	if(x<0){
    		x=0;
    	}
    	if(x>($(this).width()-$('.lay').width())){
    		x=$(this).width()-$('.lay').width();
    	}
    	if(y<0){
    		y=0;
    	}
    	if(y>($(this).height()-$('.lay').height())){
    		y=$(this).height()-$('.lay').height();
    	}
    	$('.lay').css('left',x);
    	$('.lay').css('top',y);
    	$('#bigImg').css('margin-left',-1*x*scale);
    	$('#bigImg').css('margin-top',-1*y*scale);
    })
    $('.top-pic').mouseout(function(){
    	$('.lay,.big').hide();
    });
 	//倒计时
    var startTime=3600000;
    var timer=null;
    timer=setInterval(setTime,1000);
    function setTime(){
    	if(startTime>0){
    		startTime--;
    		var second=Math.floor(startTime%60);//秒
    		var minute=Math.floor((startTime/60)%60);//分
    		var hour=Math.floor((startTime/3600)%24);//时
    		var day=Math.floor((startTime/3600)/24);//天
    		if(second<10){
    			second='0'+second;
    		}
    		if(minute<10){
    			minute='0'+minute;
    		}
    		if(hour<10){
    			hour='0'+hour;
    		}
			if(day<10){
    			day='0'+day;
    		}
    		var time=day+"天"+hour+":"+minute+":"+second
    		 $('#time-down').html(time);
    	}
    	else{
    		clearInterval(timer);
    	}
    }
    
    $('.goods-meau ul li').click(function(){
    	var index=$(this).index();
    	$(this).addClass('on').siblings().removeClass('on');
    	if(index==0){
    		$('.bd').show();
    		$('.pingjia').hide();
    	}
    	else{
    		$('.bd').hide();
    		$('.pingjia').show();
    	}
    })
})
