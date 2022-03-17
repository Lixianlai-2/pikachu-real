import cssString from "./css.js";

let textPart = document.querySelector(".textPart");
let cssPart = document.querySelector(".css");
const btnPause = document.querySelector(".btnPause");
const btnPlay = document.querySelector(".btnPlay");
const btnSlow = document.querySelector(".btnSlowSpeed");
const btnNormal = document.querySelector(".btnNormalSpeed");
const btnFast = document.querySelector(".btnFastSpeed");

let n = 0;
// 设置播放速度
let timerSpeed = 150;

// -------------------------------------------
// 输出页面上半部分的文字
let print = setInterval(() => {
  n = n + 1;
  if (n > cssString.length) {
    clearInterval(print);
    return;
  }
  //   输出从第0位到第n-1位，第n位是不会输出的
  textPart.innerText = cssString.substring(0, n);

  //   textPart滚动最底部，关键要在这里面执行
  // textPart.scrollIntoView(false);
  // textPart.scrollTop = 9999999;
  textPart.scrollTop = textPart.scrollHeight;

  //优化代码，让渲染部分跟文字部分都处于同一个计时器
  cssPart.innerHTML = cssString.substring(0, n);
}, timerSpeed);

// -------------------------------------------
// 渲染下半部分的皮卡丘
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

// -------------------------------------------
// 几个功能集成到对象中
const player = {
  runTimer() {
    return setInterval(renderTextAndHtml, timerSpeed);
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
