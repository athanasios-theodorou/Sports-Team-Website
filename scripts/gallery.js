document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const slides = document.getElementsByClassName("mySlides");
  const thumbnails = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

  const galleryImages = document.querySelectorAll(".media-grid img");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let slideIndex = 1;

  // --- open modal when clicking gallery image
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      showSlides((slideIndex = index + 1));
    });
  });

  // --- close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // --- prev / next buttons
  prevBtn.addEventListener("click", () => {
    showSlides((slideIndex -= 1));
  });

  nextBtn.addEventListener("click", () => {
    showSlides((slideIndex += 1));
  });

  // --- thumbnail navigation
  Array.from(thumbnails).forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      showSlides((slideIndex = index + 1));
    });
  });

  // --- slide logic
  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let slide of slides) {
      slide.style.display = "none";
    }

    for (let thumb of thumbnails) {
      thumb.classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].classList.add("active");

    captionText.textContent = thumbnails[slideIndex - 1].alt;
  }

  showSlides(slideIndex);
});
