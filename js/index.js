const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add("active");
	} else {
		nav.classList.remove("active");
	}
}
// 广告

var ad = document.getElementById("advertise");
var close = document.querySelector(".close-btn");
let boxHeight = ad.clientHeight,
	boxWidth = ad.clientWidth; //  获取广告框的宽度和高度
let vw = window.innerWidth,
	vh = window.innerHeight; //  可视窗口大小
let mx = 0.5,
	my = 0.5; //  每次移动的像素
let mw = 0,
	mh = 0; //  移动总量
let num = 0; //  点击关闭次数
let maxNum = 2; //  关闭几次后消失
let interval = 0; //  定时器个数
let time = 10; //  定时器时间（运动时）
let closeTime = 1000; //  定时器时间（关闭时）
function autoPlay_gg() {
	interval = 0;
	interval = setInterval(function () {
		mw += mx;
		mh = mh + my;
		if (mw >= vw - boxWidth || mw <= 0) {
			mx = -1 * mx;
		}
		if (mh >= vh - boxHeight || mh <= 0) {
			my = -1 * my;
		}
		ad.style.left = mw + "px";
		ad.style.top = mh + "px";
	}, time);
}
ad.onmouseover = function () {
	clearInterval(interval);
};

ad.onmouseout = function () {
	// setInterval(interval);
	autoPlay_gg();
};
autoPlay_gg();
close.onclick = function () {
	ad.style.display = "none"; //  隐藏广告窗
	num++;
	if (num <= maxNum) {
		setTimeout(function () {
			ad.style.display = "block"; //  显示广告窗
		}, closeTime);
	} else {
		ad.parentNode.removeChild(ad); //  删除广告窗
	}
};
// 留言板
// maxlength 是一个表单属性, 作用是给表单设置一个最大长度

// 模拟数据
let dataArr = [
	{ uname: "南风知我意", imgSrc: "./images/01.jpg" },
	{ uname: "十三", imgSrc: "./images/02.jpg" },
	{ uname: "叶沐", imgSrc: "./images/03.jpg" },
	{ uname: "心有灵犀", imgSrc: "./images/04.jpg" },
	{ uname: "MADAO", imgSrc: "./images/05.jpg" },
	{ uname: "川川", imgSrc: "./images/06.jpg" },
	{ uname: "且寄白鹿涧", imgSrc: "./images/07.jpg" },
	{ uname: "。", imgSrc: "./images/08.jpg" },
	{ uname: "小叮当当", imgSrc: "./images/09.jpg" },
	{ uname: "朔风", imgSrc: "./images/10.jpg" },
	{ uname: "汤姆先生", imgSrc: "./images/11.jpg" },
	{ uname: "碑木丛生", imgSrc: "./images/12.jpg" },
	{ uname: "执着", imgSrc: "./images/13.jpg" },
	{ uname: "大饼专业户", imgSrc: "./images/14.jpg" },
	{ uname: "感叹号用户", imgSrc: "./images/15.jpg" },
	{ uname: "念安", imgSrc: "./images/16.jpg" },
	{ uname: "昭昭辞暮", imgSrc: "./images/17.jpg" },
	{ uname: "那就岁岁平安吧", imgSrc: "./images/18.jpg" },
	{ uname: "没头脑和超高兴", imgSrc: "./images/19.jpg" },
	{ uname: "蓝河", imgSrc: "./images/20.jpg" },
	{ uname: "咖妃", imgSrc: "./images/21.jpg" },
	{ uname: "别岁岁念念啦", imgSrc: "./images/22.jpg" },
];
// 需求1：检测用户输入字数
//   1. 注册input事件
//   2. 将文本的内容的长度赋值给对应的数值
//   3. 表单的maxlength属性可以直接限制在200个数之间
let textarea = document.querySelector("textarea");
let useCount = document.querySelector(".useCount");
// 发布按钮
let send = document.querySelector("#send");
// ul
let ul = document.querySelector("#list");
textarea.addEventListener("input", function () {
	// console.log(this.value.length)
	useCount.innerHTML = this.value.length;
});

// 需求2： 输入不能为空
//   点击button之后判断
//   判断如果内容为空，则提示不能输入为空, 并且直接return 不能为空
//   防止输入无意义空格, 使用字符串.trim()去掉首尾空格
// console.log('  str')
// console.log('  str '.trim())
//   并将表单的value值设置为空字符串
//   同时下面红色为设置为0
send.addEventListener("click", function () {
	if (textarea.value.trim() === "") {
		//   并将表单的value值设置为空字符串
		textarea.value = "";
		//   同时下面红色为设置为0
		useCount.innerHTML = 0;
		return alert("内容不能为空");
	}
	// 随机数
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let random = getRandom(0, dataArr.length - 1);
	// 需求3：   新增留言  写到send 的里面
	// 创建一个小li，然后里面通过innerHTML追加数据
	let li = document.createElement("li");
	// 随机获取数据数组里面的内容, 替换newNode的图片和名字以及留言内容
	li.innerHTML = `
       <div class="info">
      <img class="userpic" src=${dataArr[random].imgSrc}>
      <span class="username">${dataArr[random].uname}</span>
      <p class="send-time"> ${new Date().toLocaleString()} </p>
      </div>
      <div class="content">${textarea.value}</div>
      <span class="the_del"><i class="fa fa-times-circle" aria-hidden="true" /></i></span>
      `;

	// 需求4：删除留言  放到追加的前面
	// 在事件处理函数里面获取点击按钮, 注册点击事件
	//   (易错点: 必须在事件里面获取, 外面获取不到)
	// 删除对应的元素(通过this获取对应的那条需要删除的元素)
	// 教你一招: 放到追加进ul的前面，这样创建元素的同时顺便绑定了事件，赞~~
	// 使用 li.querySelector()
	let del = li.querySelector(".the_del");
	del.addEventListener("click", function () {
		// 删除操作  点击的是X  删除的小li  父元素.removeChild(子元素)
		ul.removeChild(li);
	});
	// 利用时间对象将时间动态化       new Date().toLocaleString()
	// 追加给 ul  用  父元素.insertBefore(子元素, 那个元素的前面)
	ul.insertBefore(li, ul.children[0]);
	// 需求5：重置
	// 将表单域内容重置为空
	// 将userCount里面的内容重置为0
	textarea.value = "";
	//   同时下面红色为设置为0
	useCount.innerHTML = 0;
});
