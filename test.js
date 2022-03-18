import cssString from "./css.js";

const textPart = document.querySelector(".textPart");
const cssPart = document.querySelector(".css");
const btnPause = document.querySelector(".btnPause");
const btnPlay = document.querySelector(".btnPlay");
const btnSlow = document.querySelector(".btnSlowSpeed");
const btnNormal = document.querySelector(".btnNormalSpeed");
const btnFast = document.querySelector(".btnFastSpeed");

let n = 0;
// 设置播放速度
let timerSpeed = 100;

// -------------------------------------------
// 页面的渲染
let print = setInterval(() => {
  n = n + 1;
  if (n > cssString.length) {
    clearInterval(print);
    return;
  }

  // 形成页面上半部分的代码文字
  textPart.innerText = cssString.substring(0, n); // 输出从第0位到第n-1位，第n位是不会输出的

  // 让页面的上半部分滚动最底部（关键要在这里面执行）
  textPart.scrollTop = textPart.scrollHeight;
  // textPart.scrollIntoView(false);
  // textPart.scrollTop = 9999999;

  // 形成页面的下半部分皮卡丘
  cssPart.innerHTML = cssString.substring(0, n);
}, timerSpeed);

// -------------------------------------------
// print功能放入函数中，方便后面再次调用
let renderTextAndHtmlFn = function () {
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

// -------------------------------------------
// 几个功能集成到对象中
const player = {
  runTimer() {
    // setInterval会执行函数，也就是下面的renderTextAndHtmlFn
    return setInterval(renderTextAndHtmlFn, timerSpeed);
  },

  pauseTimer() {
    clearInterval(print);
  },

  pauseFeature() {
    // 整个对象中的pauseTimer属性
    player.pauseTimer();
  },

  playFeature() {
    player.pauseTimer();
    print = player.runTimer();
  },

  slowPlayFeature() {
    timerSpeed = 400;
    player.playFeature();
  },

  normalPlayFeature() {
    timerSpeed = 100;
    player.playFeature();
  },

  fastPlayFeature() {
    timerSpeed = 0;
    player.playFeature();
  },
};

// -------------------------------------------
// 暂停功能
btnPause.onclick = player.pauseFeature;

// 播放功能
btnPlay.onclick = player.playFeature;

// 慢速功能
btnSlow.onclick = player.slowPlayFeature;

// 常速功能
btnNormal.onclick = player.normalPlayFeature;

// 快速功能
btnFast.onclick = player.fastPlayFeature;
