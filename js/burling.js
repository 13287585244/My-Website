const bg = document.querySelector(".burling");
let load = 0;
let int = setInterval(blurring, 30);
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
    bg.style.display = "none";
  }
  bg.style.opacity = scale(load, 0, 100, 1, 0);
}
