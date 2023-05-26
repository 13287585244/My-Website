// 获取所有带有“counter”类的元素
const counters = document.querySelectorAll(".counter");

// 对每个计数器执行以下操作
counters.forEach((counter) => {
	// 将计数器的文本设置为0
	counter.innerText = "0";
	// 定义一个更新计数器的函数
	const updateCounter = () => {
		// 获取该计数器所要达到的目标值
		const target = +counter.getAttribute("data-target");
		// 获取计数器当前的值
		const c = +counter.innerText;
		// 计算每次增加的量
		const increment = target / 300;
		// 如果当前值小于目标值
		if (c < target) {
			// 将计数器的文本设置为向上取整后的当前值加上增量
			counter.innerText = `${Math.ceil(c + increment)}`;
			// 在1毫秒后再次执行更新计数器的函数
			setTimeout(updateCounter, 1);
		} else {
			// 如果当前值已经达到或超过目标值，将计数器的文本设置为目标值
			counter.innerText = target;
		}
	};
	// 首次执行更新计数器的函数
	updateCounter();
});

// 获取包含信息的元素
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

// 定义一组信息
const testimonials = [
	{
		name: "南风知我意",
		position: "安徽",
		photo: "../images/01.jpg",
		text: "书籍是夜间的伴侣。当你翻开它时，它会使你忘记压抑在心头的苦衷；书籍传授给你知识，增长你的才干；它从不妒忌，更不会疾恶如仇；它总是认真完成你的重托，无论时间多么长久，它绝不背叛友谊的誓言。",
	},
	{
		name: "十三",
		position: "山东",
		photo: "../images/02.jpg",
		text: "书籍深透人心，诗随血液循环。少小所读，至老犹记。书中所言他人之事，却使我们如同身历其境。无论何地，好书无须倾尽其囊，便可得之。而我们的吸呼也会充满了书香之气。",
	},
	{
		name: "心有灵犀",
		position: "新疆",
		photo: "../images/03.jpg",
		text: "那些永久的书籍。它在不同的时候去对不同的人说过同样的话，但是你此时只感觉他在为你而歌唱。如果你不听，他也不会恼，只会无声地从书页里渗出悲悯的叹息。你啪地合上书，就把一代先哲幽禁在里面。",
	},
	{
		name: "小叮当当",
		position: "西藏",
		photo: "../images/04.jpg",
		text: "书中自有千钟粟，书中自有黄金屋，书中自有颜如玉书中自有苦辣酸甜，书中自有悲欢离合，书中自有喜怒快乐书中自少年五彩的梦；书中自有中年朴质的影；书中自有老年夕阳的红书中自有感人的亲情，书中自有纯洁的友情，书中自有诚挚的感情",
	},
	{
		name: "那就岁岁平安吧",
		position: "云南",
		photo: "../images/05.jpg",
		text: "人生是稿子，脚印有如文字。每个人都是一本书，被人读，读别人。读的书多了，我对华丽的语言只欣赏，却不会心动。能打动我的，必是饱含深情的文字，也许不多，只寥寥数字，寥寥数语，却足以让人无法抵挡。",
	},
	{
		name: "没头脑和超高兴",
		position: "台湾",
		photo: "../images/06.jpg",
		text: "书是钥匙，能开启智慧之门书是阶梯，帮助人们登上理想的高峰书是良药，能医治愚昧之症书是乳汁，哺育人们成长书是你的最好伴侣，与你共度美好时光。",
	},
	{
		name: "念安",
		position: "广东",
		photo: "../images/07.jpg",
		text: "坏的东西无论如何少读也嫌太多，而好的作品无论怎样多读也嫌太少。劣书是损害我们精神思想的毒药。阅读好书的前提条件之一就是不要读坏书，因为生命是短暂的，时间和精力都极其有限。",
	},
];

// 定义一个用于轮换显示信息的变量
let idx = 1;

// 定义更新信息的函数
function updateTestimonial() {
	// 获取对象中的各项属性
	const { name, position, photo, text } = testimonials[idx];

	// 更新信息元素的内容
	testimonial.innerHTML = text;
	userImage.src = photo;
	username.innerHTML = name;
	role.innerHTML = position;

	// 将索引值增加1，以便显示下一条信息
	idx++;

	// 如果已经显示完了所有的信息，将索引值重置为0
	if (idx > testimonials.length - 1) {
		idx = 0;
	}
}

// 每隔10秒钟更新一次信息
setInterval(updateTestimonial, 10000);
