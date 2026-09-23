export function initHamburgerMenu() {
  const header = document.querySelector(".js-header");
  const hamburgerMenu = document.querySelector(".js-hamburger-menu");
  const hamburgerBtn = document.querySelector(".js-hamburger-btn");
  const hamburgerMenuElement = [header, hamburgerMenu];
  const bodyElement = document.body;

  hamburgerBtn.addEventListener("click", () => {
    hamburgerMenuElement.forEach((element) => {
      element.classList.toggle("is-open");
    });

    if (hamburgerMenu.classList.contains("is-open")) {
      bodyElement.classList.add("u-scroll-hidden");
    } else {
      bodyElement.classList.remove("u-scroll-hidden");
    }
  });
}
