<template>
  <div class="imgScroll">
    <div class="showContainer">
      <div class="container">
        <img
          src="https://dimg02.c-ctrip.com/images/100b11000000qezw729A4_R_1600_10000_Mtg_7.jpg"
          alt="A cat"
        />
        <img
          src="https://dimg05.c-ctrip.com/images/100u0x000000le38uA71D_R_1600_10000_Mtg_7.jpg"
          alt="A dog"
        />
        <img
          src="https://dimg08.c-ctrip.com/images/100811000000qrlfxA3E0_R_1600_10000_Mtg_7.jpg"
          alt="dandelion"
        />
      </div>
    </div>
    <div class="dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <div class="left-triangle triangle">
      <span>&lt;</span>
    </div>
    <div class="right-triangle triangle">
      <span>&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    function autoRullImg() {
      var timer = null;
      var showContainer = document.getElementsByClassName("showContainer")[0];
      var container = document.getElementsByClassName("container")[0];
      var imgNum = container.children.length;
      var oneImgWidth = container.children[0].offsetWidth;
      var leftTriangle = document.getElementsByClassName("left-triangle")[0];
      var rightTriangle = document.getElementsByClassName("right-triangle")[0];
      var dots = document.getElementsByClassName("dots")[0].children; //获取提示圆点
      var index = 0;

      function showDots(target) {
        var dots = document.getElementsByClassName("dots")[0].children;
        for (var i = 0; i < dots.length; i++) {
          if (i !== target) {
            dots[i].classList.remove("active"); //增加表示高亮的类名
          } else {
            dots[i].classList.add("active"); //去掉高亮
          }
        }
      }

      function movement(offset) {
        var oldLeft = parseInt(container.style.left);
        var newLeft = oldLeft + offset;
        container.style.left = newLeft + "px";
      }

      showContainer.onmouseover = function() {
        clearInterval(timer);
      };
      showContainer.onmouseout = function() {
        rullAuto();
      };

      function clickTriangle() {
        leftTriangle.onclick = function() {
          if (parseInt(container.style.left) >= 0) {
            container.style.left = -(imgNum - 1) * oneImgWidth + "px";
          } else {
            movement(oneImgWidth);
          }
          index = index - 1;
          if (index < 0) {
            index = imgNum - 1;
          }
          showDots(index);
        };
        rightTriangle.onclick = function() {
          if (parseInt(container.style.left) <= -(imgNum - 1) * oneImgWidth) {
            container.style.left = "0px";
          } else {
            movement(-oneImgWidth);
          }
          index = index + 1;
          if (index > imgNum - 1) {
            index = 0;
          }
          showDots(index);
        };
      }
      clickTriangle();

      function clickDots() {
        for (var i = 0; i < dots.length; i++) {
          (function(n) {
            dots[n].onclick = function() {
              container.style.left = -n * oneImgWidth + "px";
              index = n;
              showDots(index);
            };
          })(i);
        }
        return index;
      }
      clickDots();

      function rullAuto() {
        timer = setInterval(function() {
          movement(-oneImgWidth);
          index = index + 1;
          if (index > imgNum - 1) {
            index = 0;
          }
          showDots(index);
          if (parseInt(container.style.left) <= -imgNum * oneImgWidth) {
            container.style.left = "0px";
          }
        }, 5000);
      }
      rullAuto();
    }
    window.onload = autoRullImg;
  }
};
</script>

<style>
.imgScroll {
  width: 800px;
  margin: 0 auto;
  position: relative;
}
.imgScroll .showContainer {
  width: 800px;
  height: 533px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.imgScroll .showContainer .container {
  width: 9999px;
  position: absolute;
  left: 0px;
}
.imgScroll .showContainer .container img {
  display: block;
  float: left;
  width: 800px;
}
.imgScroll .triangle {
  position: absolute;
  top: 40%;
  cursor: pointer;
  font-size: 40px;
  color: lightgray;
}
.imgScroll .triangle:hover {
  color: gray;
}
.imgScroll .triangle.left-triangle {
  left: -50px;
}
.imgScroll .triangle.right-triangle {
  right: -50px;
}
.imgScroll .dots {
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.imgScroll .dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: lightgray;
  margin-right: 10px;
}
.imgScroll .dots .dot.active {
  background-color: gray;
}
</style>