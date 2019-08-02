window.addEventListener("load", () => {
  const sliderPrevBtn = document.getElementById("examples-slider-btn-prev");
  const sliderNextBtn = document.getElementById("examples-slider-btn-next");

  sliderPrevBtn.addEventListener("click", event => {
    const slides = document.querySelectorAll("[data-order]");
    const slidesAmount = slides.length;

    slides.forEach(slide => {
      const order = parseInt(slide.getAttribute("data-order"));

      // Edge case - force-moving the first slide into last place for smoother animation
      if (order === 1) {
        slide.setAttribute("data-order", "ftl");
        setTimeout(() => slide.setAttribute("data-order", slidesAmount), 0);
      } else {
        slide.setAttribute("data-order", order - 1);
      }
    });
  });

  sliderNextBtn.addEventListener("click", event => {
    const slides = document.querySelectorAll("[data-order]");
    const slidesAmount = slides.length;

    slides.forEach(slide => {
      const order = parseInt(slide.getAttribute("data-order"));

      // Edge case - force-moving the last slide into first place for smoother animation
      if (order === slidesAmount) {
        slide.setAttribute("data-order", "ltf");
        setTimeout(() => slide.setAttribute("data-order", 1), 0);
      } else {
        slide.setAttribute("data-order", order + 1);
      }
    });
  });
});
