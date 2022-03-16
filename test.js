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

// textPart.innerText = "Hello!";

textPart.scrollIntoView(false);

let n = 0;

// let printCSS = setInterval(() => {
//   n = n + 1;

//   console.log(n);
//   if (n > cssString.length) {
//     clearInterval(print);
//     return;
//   }

//   console.log(cssString.substring(0, n));
//   //   输出从第0位到第n-1位，第n位是不会输出的
//   textPart.innerHTML = cssString.substring(0, n);
//   //   相隔300毫秒执行这个匿名函数
// }, 0);

let timerSpeed = 200;

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

  console.log(cssString.substring(0, n));

  textPart.innerText = cssString.substring(0, n);

  textPart.scrollTop = textPart.scrollHeight;

  cssPart.innerHTML = cssString.substring(0, n);
};

// 暂停功能
btnPause.onclick = () => {
  window.clearInterval(print);
};

// 播放功能
btnPlay.onclick = () => {
  // 让计时器部分继续进行就可以了
  print = setInterval(() => {
    renderTextAndHtml();
  }, timerSpeed);
};

// 慢速功能
btnSlow.onclick = () => {
  window.clearInterval(print);
  timerSpeed = 400;
  timer();
};

// 常速功能
btnSlow.onclick = () => {
  window.clearInterval(print);
  timerSpeed = 200;
  timer();
};

// 快速功能
btnSlow.onclick = () => {
  window.clearInterval(print);
  timerSpeed = 100;
  timer();
};

// 急速功能
btnSlow.onclick = () => {
  window.clearInterval(print);
  timerSpeed = 0;
  timer();
};
