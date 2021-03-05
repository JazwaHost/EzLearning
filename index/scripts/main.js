if (
  localStorage.getItem("color-mode") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("color-mode"))
) {
  document.documentElement.setAttribute("color-mode", "dark");
}

function openNav(x) {
  x.classList.toggle("change");
  document.getElementById("nav-bar").classList.toggle("open");
  document.getElementById("check").classList.toggle("check");
}

function check(x) {
  document.getElementById("mobile_nav_button").classList.toggle("change");
  document.getElementById("nav-bar").classList.toggle("open");
  document.getElementById("check").classList.toggle("check");
}

const toggleColorMode = (e) => {
  if (e.currentTarget.classList.contains("light--hidden")) {
    document.documentElement.setAttribute("color-mode", "light");

    localStorage.setItem("color-mode", "light");
    return;
  }

  document.documentElement.setAttribute("color-mode", "dark");
  localStorage.setItem("color-mode", "dark");
};

const toggleColorButtons = document.querySelectorAll(".color_mode_btn");

toggleColorButtons.forEach((btn) => {
  btn.addEventListener("click", toggleColorMode);
});
