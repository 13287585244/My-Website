window.onload = function () {
  //banner

  var count = 0;
  var isgo = false;
  var timer;
  var ul_img = document.getElementsByClassName("ul_img")[0];
  var li_img = document.getElementsByClassName("li_img");
  var arrow = document.getElementsByClassName("arrow");
  var div_btn = document.getElementsByClassName("div_btn");
  div_btn[0].style.backgroundColor = "#111";

  showtime();
  function showtime() {
    timer = setInterval(function () {
      if (isgo == false) {
        count++;
        ul_img.style.transform = "translate(" + -1600 * count + "px)";
        if (count >= li_img.length - 1) {
          count = li_img.length - 1;
          isgo = true;
        }
      } else {
        count--;
        ul_img.style.transform = "translate(" + -1600 * count + "px)";
        if (count <= 0) {
          count = 0;
          isgo = false;
        }
      }
      for (var i = 0; i < div_btn.length; i++) {
        div_btn[i].style.backgroundColor = "#999";
      }
      div_btn[count].style.backgroundColor = "#111";
    }, 4000);
  }

  for (var i = 0; i < arrow.length; i++) {
    arrow[i].onmouseover = function () {
      clearInterval(timer);
    };
    arrow[i].onmouseout = function () {
      showtime();
    };
    arrow[i].onclick = function () {
      if (this.title == 0) {
        count++;
        if (count > 4) {
          count = 0;
        }
      } else {
        count--;
        if (count < 0) {
          count = 4;
        }
      }

      ul_img.style.transform = "translate(" + -1600 * count + "px)";

      for (var i = 0; i < div_btn.length; i++) {
        div_btn[i].style.backgroundColor = "#999";
      }
      div_btn[count].style.backgroundColor = "#111";
    };
  }
  for (var b = 0; b < div_btn.length; b++) {
    div_btn[b].index = b;
    div_btn[b].onmouseover = function () {
      clearInterval(timer);

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
      ul_img.style.transform = "translate(" + -1600 * this.index + "px)";
    };
    div_btn[b].onmouseout = function () {
      showtime();
    };
  }

  //广告
  var ad = document.getElementById("advertise");
  var close = document.querySelector(".close-btn");
  let boxHeight = ad.clientHeight,
    boxWidth = ad.clientWidth; //  获取广告框的宽度和高度
  let vw = window.innerWidth,
    vh = window.innerHeight; //  可视窗口大小
  let mx = 1,
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

  //搜索
  const search = document.querySelector(".search");
  const bton = document.querySelector(".bton");
  const input = document.querySelector(".input");

  bton.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
  });

  //放大镜
  var preview_img = document.querySelector(".bookbox");
  var mask = document.querySelector(".mask");
  var big = document.querySelector(".big");
  // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
  preview_img.addEventListener("mouseover", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });
  preview_img.addEventListener("mouseout", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });
  // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
  preview_img.addEventListener("mousemove", function (e) {
    // (1). 先计算出鼠标在盒子内的坐标
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // console.log(x, y);
    // (2) 减去盒子高度 的一半 是 就是我们mask 的最终 left 和top值了
    // (3) 我们mask 移动的距离
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    // (4) 如果x 坐标小于了0 就让他停在0 的位置
    // 遮挡层的最大移动距离
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
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";
    // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
    // 大图
    var bigIMg = document.querySelector(".bigImg");
    // 大图片最大移动距离
    var bigMax = bigIMg.offsetWidth - big.offsetWidth;
    // 大图片的移动距离 X Y
    var bigX = (maskX * bigMax) / maskMax;
    var bigY = (maskY * bigMax) / maskMaxY;
    bigIMg.style.left = -bigX + "px";
    bigIMg.style.top = -bigY + "px";
  });
};
