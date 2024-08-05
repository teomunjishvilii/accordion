const accordion_div = document.querySelectorAll(".accordion_header");
const accordion_body = document.querySelector(".accordion_body");
const accordion_header = document.querySelectorAll("accordion_header");
const arrowIcon = document.querySelector(".arrow i");

accordion_div.forEach(function (item) {
  item.addEventListener("click", function () {
    accordion_body.classList.toggle("active");

    //change the bg color of the accordion header when clicked
    this.classList.toggle("clicked");

    // change the arrow when clicked + scroll down smoothly
    if (accordion_body.classList.contains("active")) {
      arrowIcon.classList.remove("fa-chevron-down");
      arrowIcon.classList.add("fa-chevron-up");
      accordion_body.style.height = accordion_body.scrollHeight + "px";
    } else {
      arrowIcon.classList.add("fa-chevron-down");
      arrowIcon.classList.remove("fa-chevron-up");
      accordion_body.style.height = 0;
    }
  });
});
