const labels = document.querySelectorAll(".form-control label");
let btn = document.querySelector(".btn");
let input = document.querySelectorAll("input");
labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
		.join("");
});
function checkEmail() {
	const email = document.querySelector("#email").value;
	const password = document.querySelector("#password").value;
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailRegex.test(email)) {
		// alert(11);
		alert("请输入正确的邮箱");
		return false;
	} else if (password === "") {
		// alert(21);
		alert("请输入密码");
		return false;
	} else {
		// alert(33);
		window.open("index.html");
	}
}
