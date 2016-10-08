// 基础核心
// 
// 代码风格
// 加载模式
// 对象互换
// 多个库之间的冲突
// 
// 
window.onload = function(){
	//代码
};

// jQuery
$(document).ready(function(){
	//代码
});
$(function(){
	//代码
});
//异同
//onload全部加载，包括图片
//jqueryDOM加载完毕就执行
//
//onload多个会覆盖
//jQuery可以执行多个
//
//
//对象呼唤
$(function(){
	alert($('#box'));//返回jQuery对象
	alert(document.getElementById('box'));

	alert($('#box').get(0));//get方法，返回原生dom对象
	$('#box')[0]           //也可以获取原生dom对象

	// 包裹
	$(document.getElementById('box'));//jQuery对象
});

//多个库之间冲突
//情况一：jQuery在前面，$被后引用的占用
//		直接用jQuery;
//		或者var $$ = jQuery;
//		
//情况二：jQuery在后面引入，后引入的方法不能用
//		jQuery.noConflict();
//		var var $$ = jQuery;