//当网页加载完成时执行下面的代码
window.onload = function () {
	//获取元素
	var count = 0; //图片计数器
	var isgo = false; //是否开始移动
	var timer; //定时器
	var ul_img = document.getElementsByClassName("ul_img")[0]; //获取图片列表
	var li_img = document.getElementsByClassName("li_img"); //获取每张图片
	var arrow = document.getElementsByClassName("arrow"); //获取箭头
	var div_btn = document.getElementsByClassName("div_btn"); //获取小点

	//设置第一个小点的背景颜色为黑色
	div_btn[0].style.backgroundColor = "#111";

	//执行定时器，轮播图片
	showtime();
	function showtime() {
		timer = setInterval(function () {
			if (isgo == false) {
				//如果isgo为false，则继续往右移动图片
				count++;
				ul_img.style.transform = "translate(" + -1600 * count + "px)"; //移动图片
				if (count >= li_img.length - 1) {
					//如果移动到最后一张图片，则停止移动
					count = li_img.length - 1;
					isgo = true;
				}
			} else {
				//如果isgo为true，则往左移动图片
				count--;
				ul_img.style.transform = "translate(" + -1600 * count + "px)"; //移动图片
				if (count <= 0) {
					//如果移动到第一张图片，则停止移动
					count = 0;
					isgo = false;
				}
			}
			//设置当前小点的背景颜色为黑色，其他小点的背景颜色为灰色
			for (var i = 0; i < div_btn.length; i++) {
				div_btn[i].style.backgroundColor = "#999";
			}
			div_btn[count].style.backgroundColor = "#111";
		}, 4000); //每隔4秒执行一次
	}

	//绑定箭头的鼠标事件
	for (var i = 0; i < arrow.length; i++) {
		arrow[i].onmouseover = function () {
			//鼠标经过箭头时，停止定时器
			clearInterval(timer);
		};
		arrow[i].onmouseout = function () {
			//鼠标移开箭头时，开启定时器
			showtime();
		};
		arrow[i].onclick = function () {
			//点击箭头时，移动图片
			if (this.title == 0) {
				//如果点击的是右箭头，则count加1
				count++;
				if (count > 4) {
					//如果移动到最后一张图片，则从第一张图片重新开始移动
					count = 0;
				}
			} else {
				//如果点击的是左箭头，则count减1
				count--;
				if (count < 0) {
					//如果移动到第一张图片，则从最后一张图片重新开始移动
					count = 4;
				}
			}

			ul_img.style.transform = "translate(" + -1600 * count + "px)"; //移动图片

			//设置当前小点的背景颜色为黑色，其他小点的背景颜色为灰色
			for (var i = 0; i < div_btn.length; i++) {
				div_btn[i].style.backgroundColor = "#999";
			}
			div_btn[count].style.backgroundColor = "#111";
		};
	}

	//绑定小点的鼠标事件
	for (var b = 0; b < div_btn.length; b++) {
		div_btn[b].index = b;
		div_btn[b].onmouseover = function () {
			//鼠标经过小点时，停止定时器，并移动图片
			clearInterval(timer);

			//设置当前小点的背景颜色为黑色，其他小点的背景颜色为灰色
			for (var a = 0; a < div_btn.length; a++) {
				div_btn[a].style.backgroundColor = "#999";
			}
			div_btn[this.index].style.backgroundColor = "#111";
			if (this.index == 3) {
				isgo = true;
			}
			if (this.index == 0) {
				isgo = false;
			}
			count = this.index;
			ul_img.style.transform = "translate(" + -1600 * this.index + "px)"; //移动图片
		};
		div_btn[b].onmouseout = function () {
			//鼠标移开小点时，开启定时器
			showtime();
		};
	}

	//广告
	var ad = document.getElementById("advertise"); //获取广告框
	var close = document.querySelector(".close-btn"); //获取关闭按钮
	let boxHeight = ad.clientHeight, //获取广告框的高度和宽度
		boxWidth = ad.clientWidth;
	let vw = window.innerWidth, //获取可视窗口大小
		vh = window.innerHeight;
	let mx = 1, //每次移动的像素
		my = 0.5;
	let mw = 0, //移动总量
		mh = 0;
	let num = 0; //点击关闭次数
	let maxNum = 2; //关闭几次后消失
	let interval = 0; //定时器个数
	let time = 10; //定时器时间（运动时）
	let closeTime = 1000; //定时器时间（关闭时）

	//广告自动运动
	function autoPlay_gg() {
		interval = 0;
		interval = setInterval(function () {
			mw += mx; //每次移动的像素
			mh = mh + my;
			if (mw >= vw - boxWidth || mw <= 0) {
				//如果移动到边缘，则反向移动
				mx = -1 * mx;
			}
			if (mh >= vh - boxHeight || mh <= 0) {
				my = -1 * my;
			}
			ad.style.left = mw + "px"; //改变广告框的left和top属性，使其运动
			ad.style.top = mh + "px";
		}, time); //每隔10毫秒执行一次
	}

	//鼠标移入广告框时，停止定时器
	ad.onmouseover = function () {
		clearInterval(interval);
	};

	//鼠标移出广告框时，开启定时器
	ad.onmouseout = function () {
		autoPlay_gg();
	};
	autoPlay_gg(); //执行广告自动运动

	//点击关闭按钮
	close.onclick = function () {
		ad.style.display = "none"; //隐藏广告窗
		num++; //点击关闭次数加1
		if (num <= maxNum) {
			//如果点击关闭的次数小于等于最大次数，则一段时间后重新显示广告窗
			setTimeout(function () {
				ad.style.display = "block";
			}, closeTime);
		} else {
			//如果点击关闭的次数超过最大次数，则删除广告窗
			ad.parentNode.removeChild(ad);
		}
	};

	//搜索
	const search = document.querySelector(".search"); //获取搜索框
	const bton = document.querySelector(".bton"); //获取搜索按钮
	const input = document.querySelector(".input"); //获取输入框

	//点击搜索按钮时，显示或隐藏搜索框，并将光标聚焦到输入框
	bton.addEventListener("click", () => {
		search.classList.toggle("active");
		input.focus();
	});

	//放大镜
	var preview_img = document.querySelector(".bookbox"); //获取图片框
	var mask = document.querySelector(".mask"); //获取遮挡层
	var big = document.querySelector(".big"); //获取大盒子

	//鼠标移入图片框时，显示遮挡层和大盒子
	preview_img.addEventListener("mouseover", function () {
		mask.style.display = "block";
		big.style.display = "block";
	});

	//鼠标移出图片框时，隐藏遮挡层和大盒子
	preview_img.addEventListener("mouseout", function () {
		mask.style.display = "none";
		big.style.display = "none";
	});

	//鼠标在图片框内移动时，移动遮挡层和大图片
	preview_img.addEventListener("mousemove", function (e) {
		//计算鼠标在盒子内的坐标
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;

		//计算遮挡层的left和top值
		var maskX = x - mask.offsetWidth / 2;
		var maskY = y - mask.offsetHeight / 2;

		//限制遮挡层的移动范围
		var maskMax = preview_img.offsetWidth - mask.offsetWidth;
		var maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
		if (maskX <= 0) {
			maskX = 0;
		} else if (maskX >= maskMax) {
			maskX = maskMax;
		}
		if (maskY <= 0) {
			maskY = 0;
		} else if (maskY >= maskMaxY) {
			maskY = maskMaxY;
		}

		//移动遮挡层
		mask.style.left = maskX + "px";
		mask.style.top = maskY + "px";

		//计算大图片的移动距离
		var bigIMg = document.querySelector(".bigImg");
		var bigMax = big;
	});
};
