export const isInViewPort = (selector) => {
  const sectionToObserve = document.querySelectorAll(selector);

  sectionToObserve.forEach((element) => {
    const observer = new IntersectionObserver((entries) => {
      element.classList.toggle("animate", entries[0].isIntersecting);
    });

    if (element) return observer.observe(element);
  });
};
