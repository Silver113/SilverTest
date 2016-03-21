
function Swipe(container){
	var element = container.find(":first");
	var swipe = {};
	//li页面数量
	var slides = container.find("li");
	//获取容器尺寸
	var width = container.width();
	var height = container.height();
	//设置li页面总宽度
	element.css({
		width:(slides.length*width)+'px',
		height:height+'px'
	});
	//设置每一个页面li的宽度
	$.each(slides,function(index){
		var slide = slides.eq(index);
		slide.css({
			width:width+'px',
			height:height+'px'
		});
	});
	swipe.scrollTo = function(x,speed){
		element.css({
			'transition-timing-function':'linear',
			'transition-duration':speed+'ms',
			'transform':'translate3d(-'+x+'px,0px,0px)'
		});
		return this;
	};
	return swipe;
}