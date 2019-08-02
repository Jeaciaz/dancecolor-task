let dropdownOpened;

window.addEventListener("load", () => {
  document.querySelectorAll(".header__dropdown").forEach(dropdown => {
    dropdown.addEventListener("click", toggleDropdown);
  });
});

function toggleDropdown(event) {
  console.log(123);
  if (!dropdownOpened) {
    dropdownOpened = event.currentTarget;
    dropdownOpened.setAttribute("data-opened", "");
    setTimeout(() => document.addEventListener("click", toggleDropdown), 0);
  } else {
    dropdownOpened.removeAttribute("data-opened");
    document.removeEventListener("click", toggleDropdown);
    dropdownOpened = undefined;
  }
}
