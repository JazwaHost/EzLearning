const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img img");
const original = document.querySelector(".modal-img");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    const originalImg = preview.getAttribute("data-original");
    original.src = originalImg;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
