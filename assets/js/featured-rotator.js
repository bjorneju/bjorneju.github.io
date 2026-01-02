document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".featured-rotator__item");
  if (items.length <= 1) return;

  let index = 0;

  setInterval(() => {
    items[index].classList.remove("is-active");
    index = (index + 1) % items.length;
    items[index].classList.add("is-active");
  }, 10000); // 10 seconds
});
