document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, img, a');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Додаємо затримку перед додаванням класу 'visible'
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 200); // 1000 мс затримки

        // Відразу ж після активації анімації зупиняємо спостереження за цим елементом
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeInElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });
});