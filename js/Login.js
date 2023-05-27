const labels = document.querySelectorAll(".form-control label");
let btn = document.querySelector(".btn");
let input = document.querySelectorAll("input");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
  email.onchange = function () {
    var email = this.value;
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var input = document.querySelector("input");
    btn.addEventListener("click", function () {
      if (reg.test(email)) {
        window.open("index.html");
        // alert("邮箱格式正确");
      } else {
        alert("邮箱格式不正确");
      }
    });
  };
});
