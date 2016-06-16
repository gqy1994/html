$(function(){
	var title=$.cookie('title');
	var productNum=$.cookie('productNum');
	var src=$.cookie('src');
	var price=$.cookie('price');
	var oldprice=$.cookie('oldprice');
	var save=parseInt(oldprice)-parseInt(price);
	
	if(!$.cookie('title')){
		$('.jine').hide();
		$('.no-product').show();
		$('#cart-item-num').html(0);
		$('#count-search').html(0);
		$.cookie('number',0,{expires:7,path:'/',secure:false});
	}
	else{
		if(!$.cookie('number')){
			$.cookie('number',1,{expires:7,path:'/',secure:false});
		}
		$('#cart-item-num').html($.cookie('number'));
		$('#count-search').html($.cookie('number'));
		$('#cart-count').html($.cookie('number'));
		
		var $dd=$('<dd class="shop-detail">'
						+'<div class="col-cont">'
						+	'<div class="pic">'
						+		'<img src="'+src+'" alt="" />'
						+	'</div>'
						+	'<div class="info">'
						+		'<p>'
						+			'<a href="javascript:;">'+title+'</a>'
						+		'</p>'
						+		'<p class="sale">此品在中国有售</p>'
						+	'</div>'
						+'</div>'
						+'<div class="shop-price">'
						+	'<b style="font-size:1.2em">￥<b id="danjia">'+price+'</b></b>'
						+	'<p><s style="color:#ddd">'+oldprice+'</s></p>'
						+'</div>'
						+'<div class="count">'
						+	'<div class="jiajian">'
						+		'<a href="javascript:;" class="decline">'
						+			'<i>-</i>'
						+		'</a>'
						+		'<input type="text" value="'+$.cookie('productNum')+'" id="amount"/>'
						+		'<a href="javascript:;" class="add">'
						+			'<i>+</i>'
						+		'</a>'
						+	'</div>'
						+'</div>'
						+'<div class="xiaoji">'
						+	'<b style="color:#ff2f00" >￥<b id="zongji">'+(parseInt($.cookie('price'))*$.cookie('number')).toFixed(2)+'</b></b>'
						+'</div>'
						+'<div class="caozuo">'
						+	'<a href="javascript:;">'
						+		'<s class="delete"></s>'
						+	'</a>'
						+'</div>'
					+'</dd>');
		$('.item-tit').after($dd);
		$('#amount').val($.cookie('number'));
		$('#qian').html(parseInt($.cookie('price'))*$.cookie('number'));
		$('#save').html(save*$.cookie('number'));
	
		var n = $('.cart-box input').val();
		$('.add').click(function(){
			n++;
			$('.cart-box input').val(n);
			$('#cart-item-num').html(n);
			$('#count-search').html(n);
			$('#zongji').html((price*n).toFixed(2));
			$('#qian').html((price*n).toFixed(2));
			$('#save').html((save*n).toFixed(2));
			$('#cart-count').html(n);
			$.cookie('number',n,{expires:7,path:'/',secure:false});
		})
		$('.decline').click(function(){
			n--;
			if(n<0){
				$('.shop-detail').hide();
				$('.no-product').show();
				$('.jine').hide();
				n=0;
				$('.cart-box input').val(n);
				$('#cart-item-num').html(n);
				$('#count-search').html(n);
				$('#cart-count').html(n);
				$.cookie('number',n,{expires:7,path:'/',secure:false});
			}
			else{
				$('.cart-box input').val(n);
				$('#cart-item-num').html(n);
				$('#count-search').html(n);
				$('#zongji').html((price*n).toFixed(2));
				$('#qian').html((price*n).toFixed(2));
				$('#save').html((save*n).toFixed(2));
				$('#cart-count').html(n);
				$.cookie('number',n,{expires:7,path:'/',secure:false});
			}	
		})	
		$('.delete').click(function(){
			$.cookie('title',null,{expires:0,path:'/',secure:false});
			$.cookie('price',null,{expires:0,path:'/',secure:false});
			$.cookie('oldprice',null,{expires:0,path:'/',secure:false});
			$.cookie('productNum',null,{expires:0,path:'/',secure:false});
			$.cookie('src',null,{expires:0,path:'/',secure:false});
			$('.shop-detail').hide();
			$('.jine').hide();
			$('.no-product').show();
			if($('.item-msg dd').length<=3){
				$('.shop-detail').hide();
				$('.jine').hide();
				$('.no-product').show();
				n=0;
				$.cookie('product-count',n,{expires:7,path:'/',secure:false});
				$('#cart-item-num').html(n);
				$('#count-search').html(n);
				$('#cart-count').html(n);
			}
			else{
				$(this).parents('dd').hide();
			}
		})
	}
})
