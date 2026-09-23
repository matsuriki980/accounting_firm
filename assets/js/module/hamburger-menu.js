import { initHeaderBg } from "./header-bg.js";

export function initHamburgerMenu() {
  const header = document.querySelector(".js-header");
  const hamburgerMenu = document.querySelector(".js-hamburger-menu");
  const hamburgerBtn = document.querySelector(".js-hamburger-btn");
  const hamburgerMenuElement = [header, hamburgerMenu];
  const bodyElement = document.body;
  let hamburgerMenuPlug = false; // 開閉状態を判定

  // ヘッダー背景の初期化
  const updateHeaderBg = initHeaderBg();

  hamburgerBtn.addEventListener("click", () => {
    hamburgerMenuElement.forEach((element) => {
      element.classList.toggle("is-open");
    });

    const isMenuOpen = hamburgerMenu.classList.contains("is-open");

    if (isMenuOpen) {
      bodyElement.classList.add("u-scroll-hidden");
    } else {
      bodyElement.classList.remove("u-scroll-hidden");
    }

    // ハンバーガーメニューの状態が変わるのでヘッダー背景も更新する
    updateHeaderBg();
  });
}
