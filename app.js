const navbar = document.querySelector("nav"),
  menuBtn = document.querySelector(".menu i"),
  closeBtn = document.querySelector(".close"),
  arrowsIcon = document.querySelectorAll("nav ul li i"),
  searchIcon = document.querySelector(".search .icons i"),
  inputField = document.querySelector("input");

menuBtn.addEventListener("click", () => navbar.classList.toggle("show"));
closeBtn.addEventListener("click", () => menuBtn.click());
arrowsIcon.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    // console.log(arrow.parentElement.parentElement);
    arrow.parentElement.parentElement.classList.toggle("show_menu");
  });
});

searchIcon.addEventListener("click", () => {
  inputField.classList.toggle("show_input");
});
