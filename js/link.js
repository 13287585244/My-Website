const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
finalMessage.style.display = "none";
runAnimation();

function runAnimation() {
	alert("资源找不到啦！");
	// console.log(2);
	nums.forEach((num, idx) => {
		// console.log(2);
		const nextTolast = nums.length - 1;
		num.addEventListener("animationend", (e) => {
			if (e.animationName === "goIn" && idx !== nextTolast) {
				num.classList.remove("in");
				num.classList.add("out");
			} else if (e.animationName === "goOut" && num.nextElementSibling) {
				console.log(num.nextElementSibling);
				num.nextElementSibling.classList.add("in");
				// alert(21);
			} else {
				counter.classList.add("hide");
				// alert(31);
				finalMessage.style.display = "block";
				left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
				left.addEventListener("mouseleave", () =>
					container.classList.remove("hover-left")
				);
				right.addEventListener("mouseenter", () =>
					container.classList.add("hover-right")
				);
				right.addEventListener("mouseleave", () =>
					container.classList.remove("hover-right")
				);
			}
		});
	});
}
