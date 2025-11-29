/* SECTION SWITCHING */
function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
}

/* MOBILE MENU */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

/* AUTO-GALLERY */
const gallery = document.getElementById("autoGallery");
for (let i = 1; i <= 8; i++) {
  const div = document.createElement("div");
  div.textContent = "Image " + i;
  gallery.appendChild(div);
}

/* IMAGE SLIDER */
let slideIndex = 1;
function slideMove(n) {
  slideIndex += n;
  if (slideIndex > 5) slideIndex = 1;
  if (slideIndex < 1) slideIndex = 5;
  document.getElementById(
    "slideImg"
  ).src = `https://picsum.photos/800/350?random=${slideIndex}`;
}
