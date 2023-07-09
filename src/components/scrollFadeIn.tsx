"use client";

export const ScrollFadeIn = () => {
  // 画面内に要素が入ってきたときに、要素をふわっと表示
  const showElements = function (entries: any) {
    entries.forEach((entry: any) => {
      // animate-slideIn（要素をスライドさせる）
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideIn");
      } else {
        entry.target.classList.remove("animate-slideIn");
      }
    });
  };

  // オブジェクトの作成
  const observer = new IntersectionObserver(showElements);

  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach((target) => {
    target.classList.add("opacity-0");
    observer.observe(target); // 要素が画面に入ったらshowElements()を実行
  });
};
