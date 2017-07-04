//  交易明细的交互
$('.transaction_tabs_title>div').click(function(event) {
	var indexTransaction = $(this).index();
	$(this).find('p').removeClass().addClass('active');
	$(this).siblings().find('p').removeClass('active');
	$('.transaction_cons>div').removeClass('show').addClass('hide');
	$('.transaction_cons>div:eq('+indexTransaction+')').removeClass('hide').addClass('show');
});


// 充值的交互
$('.recharge_middle_cons>li').click(function(event) {
	$(this).removeClass().addClass('Selected');
	$(this).siblings().removeClass('Selected');
});
$('.recharge_bottom>button').click(function(event) {
	var money = $('.recharge_yue>span').text(); //获取到可用余额
	var recharge = $('.Selected').text(); //获取到要充值的价格
	$('.recharge_yue>span').text(Number(money)+Number(recharge)); //可用余额与充值金额相加，得到的数字展示到可用余额
	window.location.href = "../html/code_to_pay.html"

});


// 兑换的交互
$('.conversion_button>button').click(function(event) {
	var conversionValue =parseFloat($('#box_cons_top_onversion_money').val());
	var balance = $('.at_present>p').find('span').text();
	console.log(balance)
	if(conversionValue > balance){
		alert("当前余额为"+balance+'元，请重新输入');
	}else{
		alert("您成功提取了"+conversionValue+"元");
		$('.at_present>p').find('span').text(parseFloat(balance)-parseFloat(conversionValue));
	}
});
$('.conversion_tabs_title>div').click(function(event) {
	var indexConversion = $(this).index();
	$(this).find('p').removeClass().addClass('active');
	$(this).siblings().find('p').removeClass('active');
	$('.conversion_cons>div').removeClass('show').addClass('hide');
	$('.conversion_cons>div:eq('+indexConversion+')').removeClass('hide').addClass('show');
});

// 佣金明细的交互
$('.commission_tabs_title>div').click(function(event) {
	var indexCommission = $(this).index();
	$(this).find('p').removeClass().addClass('active');
	$(this).siblings().find('p').removeClass('active');
	$('.commission_cons>div').removeClass('show').addClass('hide');
	$('.commission_cons>div:eq('+indexCommission+')').removeClass('hide').addClass('show');
});

// 个人中心的交互
$('.kefu').click(function(event) {
	$('.forme').removeClass('hide').addClass('show');
});
$('.forme').click(function(event) {
	$('.forme').removeClass('show').addClass('hide');
});