let cssString = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

.textPart {
  height: 50vh;
  overflow: auto;

  /* position: fixed; */
  width: 100%;
  /* top: 50%; */
  font-size: 16px;
}

/* 让滚动条消失 */
.textPart::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.html {
  border: 1px solid blue;
  background-color: rgb(255, 230, 0);
  /* position: fixed; */
  width: 100%;
  height: 50vh;
  /* top: 50%; */
}

.css {
  border: 1px solid red;
}

.skin {
  /* 设置为相对定位，其他的内容相对它进行位移变化 */

  position: relative;
  width: 420px;
  height: 240px;
  left: 50%;
  margin-left: -210px;
  top: 50%;
  margin-top: -120px;
  /* border: 1px solid green; */
}

/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是鼻子 */

.triangle {
  /* position: relative; */
  position: absolute;
  border: 10px solid black;
  border-color: rgb(0, 0, 0) transparent transparent transparent;
  width: 1px;
  height: 1px;
  left: 50%;
  top: 20%;
  margin-top: -10px;
  margin-left: -10px;
}

.circular_arc {
  background-color: rgb(0, 0, 0);
  width: 20px;
  height: 6px;
  /* 设置绝对定位后，就会找到上一个不是static的父元素作为定位基准，这里就是三角形triangle */
  /* xiu */
  position: absolute;
  top: -16px;
  left: -10px;
  border-radius: 100% 100% 0 0;
}

/* 实现鼠标hover时，鼻子的晃动效果 */
@-webkit-keyframes wave {
  0% {
  }
  25% {
    transform: rotate(4deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes wave {
  0% {
  }
  25% {
    transform: rotate(4deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.triangle:hover {
  -webkit-animation: wave 300ms infinite linear;
  animation: wave 300ms infinite linear;
}

/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是眼睛 */
.eye {
  position: absolute;
  border: 2px solid #000;
  width: 63px;
  height: 63px;
  /* 从上下排列变成左右排列 */
  /* display: inline-block; */
  left: 50%;
  top: 0%;
  /* top: 100px; */
  margin-left: -31.5px;
  border-radius: 50%;
  background-color: rgb(46, 46, 46);
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.eye::after {
  position: absolute;
  /* 必须要有这个content */
  content: "";
  display: block;
  width: 25px;
  height: 25px;
  left: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #000;
}
/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是嘴巴 */
.mouth {
  /* border: 3px solid orange; */
  width: 170px;
  height: 170px;
  /* position: absolute; */
  position: relative;
  left: 50%;
  top: 70px;
  margin-left: -85px;
  overflow: hidden;
}

.mouth .up {
  z-index: 1;
  /* border-color: #ffe600; */
}

.mouth .up .lip {
  border: 3px solid #000;
  width: 80px;
  height: 25px;
  top: -12px;
  left: 50%;
  position: absolute;
  border-top: none;
  background-color: #ffe600;
  z-index: 1;
}

.mouth .up .left-lip {
  border-bottom-left-radius: 60px 30px;
  transform: rotate(20deg);
  border-right: none;
  transform: translateX(-85px) rotate(-20deg) translateY(9px);
  /*  */
}

.mouth .up .right-lip {
  border-bottom-right-radius: 60px 30px;
  transform: rotate(20deg) translateY(8px) translateX(3px);
  border-left: none;
  /* z-index: 1; */
}

.mouth .down {
  position: absolute;
  /* background-color: #00039b; */
  width: 100%;
  /* height: 800px; */
  height: 100%;
  /* 这里是让舌头超出的部分隐藏 */
  overflow: hidden;
  top: 7px;
}

.down .tongue {
  border: 3px solid #000000;
  position: absolute;
  /* border: 1px solid rgb(36, 167, 64); */
  background-color: #9b000a;
  height: 500px;
  width: 100%;
  border-bottom-left-radius: 50% 80%;
  border-bottom-right-radius: 50% 80%;
  top: -213%;
  overflow: hidden;
  /* z-index: 0.9; */
}

.mouth .down .tongue .circle {
  position: absolute;
  /* border: 1px solid rgb(36, 167, 64); */
  background-color: #ff485f;
  height: 170px;
  width: 170px;
  top: 382px;
  left: -3px;
  border-top-left-radius: 50% 80%;
  border-top-right-radius: 50% 80%;
  /* top: 30px; */
  /* z-index: 0.1; */
}
/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是脸颊 */
.cheek {
  position: absolute;
  border: 2px solid black;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
}

/* 如果是同一层级，那么中间不能有空格 */
.cheek.left {
  /* transform: translateX(-190px); */
  background-color: #ff0000;
  margin-left: -190px;
}

.cheek.right {
  /* transform: translateX(110px); */
  background-color: #ff0000;
  margin-left: 110px;
}

.cheek.left a img {
  position: relative;
  right: 100px;
  /* 一种将元素围绕一个定点（由transform-origin属性指定）旋转而不变形的转换 */
  transform: rotateY(180deg);
}

.cheek.right a img {
  position: relative;
  right: -40px;
  /* transform: translateY(90deg); */
}
`;

export default cssString;
