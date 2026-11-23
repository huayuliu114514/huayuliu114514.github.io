// 樱花飘落动画：生成一片片 CSS 花瓣，随机大小/速度/位置，悬浮于页面上方
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var container = document.createElement("div");
  container.className = "sakura-container";
  container.setAttribute("aria-hidden", "true");

  var count = window.innerWidth < 600 ? 10 : 18;

  for (var i = 0; i < count; i++) {
    var petal = document.createElement("div");
    petal.className = "sakura-petal";

    var size = 9 + Math.random() * 9; // 9 ~ 18 px
    var duration = 9 + Math.random() * 9; // 9 ~ 18 s

    petal.style.left = (Math.random() * 100).toFixed(2) + "vw";
    petal.style.width = size.toFixed(1) + "px";
    petal.style.height = (size * 1.35).toFixed(1) + "px";
    petal.style.animationDuration = duration.toFixed(1) + "s";
    // 负延迟：让花瓣一进页面就分布在不同高度，而不是同时从顶部出发
    petal.style.animationDelay = (-Math.random() * duration).toFixed(1) + "s";
    petal.style.setProperty("--petal-opacity", (0.35 + Math.random() * 0.4).toFixed(2));

    container.appendChild(petal);
  }

  document.body.appendChild(container);
})();
