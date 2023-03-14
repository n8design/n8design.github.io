// <stdin>
var toggleMenu = (event) => {
  event.stopImmediatePropagation();
  console.debug(event.target.classList.toggle("is-active"), event.target.classList);
  console.debug(event.currentTarget.getAttribute("aria-controls"));
  let menuId = event.currentTarget.getAttribute("aria-controls");
  let hamMenu2 = document.getElementById(menuId);
  if (hamMenu2) {
    let isExpanded = hamMenu2.ariaExpanded === "true" ? true : false;
    console.debug("isExpanded", isExpanded);
    hamMenu2.ariaExpanded = (!isExpanded).toString();
  }
};
var hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click", toggleMenu);
