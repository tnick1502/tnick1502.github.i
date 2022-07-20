document.addEventListener("DOMContentLoaded", () => {

})


const navItems = document.querySelectorAll(".menu_items[data-goto]");
if (navItems.length > 0) {
  navItems.forEach((item) => {
    item.addEventListener("click", onNavItemClick);
  });

  function onNavItemClick(event) {
    const navItem = event.target;
    if (navItem.dataset.goto && document.getElementById(navItem.dataset.goto)) {
      const gotoBlock = document.getElementById(navItem.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}
