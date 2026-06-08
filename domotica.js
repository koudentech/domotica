// =====================
// SCROLL FADE-IN
// =====================

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".fade-in")
  .forEach(el => fadeObserver.observe(el));


// =====================
// VIDEO AUTOPLAY ON VIEW
// =====================

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    const video = entry.target;

    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }

  });
}, {
  threshold: 0.3
});

document.querySelectorAll("video")
  .forEach(video => videoObserver.observe(video));

  // =====================
// SCROLL DEMO
// =====================

document.getElementById("btn-demo")?.addEventListener("click", (e) => {

  e.preventDefault();

  const video = document.getElementById("video");

  if (!video) return;

  const y =
    video.getBoundingClientRect().top +
    window.pageYOffset +
    80; // píxeles extra

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });

});