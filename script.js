const galleryImages = document.querySelectorAll(".gallery-item");
const lightboxModal = document.querySelector(".lightbox");
const lightBoxImage = document.getElementById("lightbox-image");
const closeModal = document.getElementById("close");

galleryImages.forEach((e) => {
  e.addEventListener("click", () => {
    lightBoxImage.src = e.src.replace("-thumbnail", "");
    lightboxModal.style.display = "flex";
  })
});

closeModal.addEventListener("click", () => {
  lightboxModal.style.display = "none";
});

lightboxModal.addEventListener("click", () => {
  lightboxModal.style.display = "none";
})