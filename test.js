import cssString from "./css.js";

let textPart = document.querySelector(".textPart");
// let htmlPart = document.querySelector(".html");
let cssPart = document.querySelector(".css");
const btnPause = document.querySelector(".btnPause");
const btnPlay = document.querySelector(".btnPlay");
const btnSlow = document.querySelector(".btnSlowSpeed");
const btnNormal = document.querySelector(".btnNormalSpeed");
const btnFast = document.querySelector(".btnFastSpeed");
const btnHighSpeed = document.querySelector(".btnHighSpeed");

let n = 0;

let timerSpeed = 150;

let print = setInterval(() => {
  n = n + 1;

  console.log(n);
  if (n > cssString.length) {
    clearInterval(print);
    return;
  }

  console.log(cssString.substring(0, n));
  //   输出从第0位到第n-1位，第n位是不会输出的
  textPart.innerText = cssString.substring(0, n);

  //   textPart滚动最底部，关键要在这里面执行
  // textPart.scrollIntoView(false);
  // textPart.scrollTop = 9999999;
  textPart.scrollTop = textPart.scrollHeight;

  //优化代码，让渲染部分跟文字部分都处于同一个计时器
  cssPart.innerHTML = cssString.substring(0, n);
}, timerSpeed);

let renderTextAndHtml = function () {
  n = n + 1;

  console.log(n);
  if (n > cssString.length) {
    clearInterval(print);
    return;
  }
  textPart.innerText = cssString.substring(0, n);
  textPart.scrollTop = textPart.scrollHeight;
  cssPart.innerHTML = cssString.substring(0, n);
};

let runTimer = function () {
  setInterval(renderTextAndHtml, timerSpeed);
};

let pauseTimer = function () {
  clearInterval(print);
};

// 暂停功能
btnPause.onclick = () => {
  pauseTimer();
};

// 播放功能
btnPlay.onclick = () => {
  // 这里也要清除计时器，避免同时产生多个计时器而无法控制
  pauseTimer();
  // z这里之所以要将奇迹是再次赋值给print，是为了下一次暂停时能够clearInterval(print)
  print = runTimer();
};

// 慢速功能
btnSlow.addEventListener("click", () => {
  pauseTimer();
  timerSpeed = 400;
  print = runTimer();
});

// 常速功能
btnNormal.onclick = () => {
  pauseTimer();
  timerSpeed = 150;
  print = runTimer();
};

// 快速功能
btnFast.onclick = () => {
  pauseTimer();
  timerSpeed = 0;
  print = runTimer();
};
