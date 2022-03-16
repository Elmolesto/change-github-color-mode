const t = new Date;
if (t.getHours() < 7 || t.getHours() > 21) {
  document.querySelector("html").dataset.colorMode = "dark"
} else {
  document.querySelector("html").dataset.colorMode = "auto"
}
