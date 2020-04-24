const VISIBLE = 1;
const INVISIBLE = 0;
const MAX_WIDTH_MOBILE_HEADER = 968;

function openMenuButtonClicked() {
  const header = document.getElementById("mobile-header");
  header.style.display = "none";

  const menu = document.getElementById("menu");
  menu.style.visibility = "visible";
  menu.style.opacity = VISIBLE;
}

function closeMenuButtonClicked() {
  const menu = document.getElementById("menu");
  menu.style.visibility = null;
  menu.style.opacity = null;

  const header = document.getElementById("mobile-header");
  header.style.display = null;
}

function addHandlerToMenuButtons() {
  const openMenuButton = document.getElementById("open-menu");
  openMenuButton.onclick = openMenuButtonClicked;

  const closeMenuButton = document.getElementById("close-menu");
  closeMenuButton.onclick = closeMenuButtonClicked;
}

function hideMobileElementsOnResize() {
  if (window.innerWidth > MAX_WIDTH_MOBILE_HEADER) {
    closeMenuButtonClicked();
  }
}

document.addEventListener("DOMContentLoaded", addHandlerToMenuButtons);

window.addEventListener("resize", hideMobileElementsOnResize);
