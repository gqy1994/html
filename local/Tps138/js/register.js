$(function(){
//	jsPlaceHolder.play("itxt1");
//	jsPlaceHolder.play("itxt2");
//	jsPlaceHolder.play("itxt3");
//	jsPlaceHolder.play("itxt4");
//	jsPlaceHolder.play("itxt5");
//	jsPlaceHolder.play("itxt6");
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
	
	//注册
	//邮箱
	var num=0;
	$('.register input').eq(0).blur(function(){
		var $img=$('<img src="img/right.gif">');
		var $img1=$('<img src="img/error.gif">');
		var p1= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(p1.test($(this).val())){
			num++;
		}
		else{
			$(this).css('border','1px solid red');
			$(this).parent().find('span img').css('display','block');
			$(this).parent().find('p').html('请输入正确的邮箱地址。');
		}
	})
	//邮箱确认
	$('.register input').eq(1).blur(function(){
		var $img=$('<img src="img/right.gif">');
		var $img1=$('<img src="img/error.gif">');
		if($(this).val()==$(this).parents('form').children(0).find('input').val()){
			num++;
		}
		else{
			$(this).css('border','1px solid red');
			$(this).parent().find('span img').css('display','block');
			$(this).parent().find('p').html('新邮箱与确认邮箱不匹配。');
		}
	})
	//密码
	$('.register input').eq(2).blur(function(){
		var $img=$('<img src="img/right.gif">');
		var $img1=$('<img src="img/error.gif">');
		var p2=/^(?![\d]+$)[\da-zA-Z]{6,20}$/;
		if(p2.test($(this).val())){
			num++;	
		}
		else{
			$(this).css('border','1px solid red');
			$(this).parent().find('span img').css('display','block');
			$(this).parent().find('p').html('密码为6-18位的字符，不能含空格，不能全为数字。');
		}
	})
	//密码确认
	$('.register input').eq(3).blur(function(){
		var $img=$('<img src="img/right.gif">');
		var $img1=$('<img src="img/error.gif">');
		if($(this).val()==$(this).parent().prev().find('input').val()){
			num++;
		}
		else{
			$(this).css('border','1px solid red');
			$(this).parent().find('span img').css('display','block');
			$(this).parent().find('p').html('密码不一致。');
		}
	})
	$('.btn-register').click(function(){
		var $img=$('<img src="img/right.gif">');
		var $img1=$('<img src="img/error.gif">');
		if(num==4 && $(':checkbox').prop('checked')){
			var mail=$('#itxt3').val();
			var pwd=$('#itxt5').val();
			$.cookie('user',mail,{expires:7,path:'/',secure:false});
			$.cookie('passw',pwd,{expires:7,path:'/',secure:false});
			window.open('register_win.html');	
		}
		else{
			$(this).val("处理中…");
			setTimeout(function(){
				$('.btn-register').val("马上注册");
			},1000);
		}
	})
	//登录
	var count=0;
	$('.signin input').eq(1).blur(function(){
		var p1= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(p1.test($(this).val())){
			count++;
		}
		else{
			$(this).css('border','1px solid red');
			$(this).parent().find('span img').css('display','block');
			$(this).parent().find('p').html('请输入正确的邮箱地址。');
		}
	})
	$('.signin input').eq(2).blur(function(){
		var p2=/^(?![\d]+$)[\da-zA-Z]{6,20}$/;
		if(p2.test($(this).val())){
			count++;
		}
		else{
			$(this).css('border','1px solid red');
			$(this).parent().find('span img').css('display','block');
			$(this).parent().find('p').html('密码为6-18位的字符，不能含空格，不能全为数字。');
		}
	})
	$('.signin input').eq(3).click(function(){
		if($('.signin input').eq(1).val()==$.cookie('user')){
			if($('.signin input').eq(2).val()!=$.cookie('passw')){
				alert('输入用户名或密码不正确');
			}
			else{
				window.open('index.html');
			}
		}
		else{
			if(count==2){
				window.open('index.html');
			}
			else{
				alert("用户名或密码格式不对，请重新输入");
			}
		}
	})
})
