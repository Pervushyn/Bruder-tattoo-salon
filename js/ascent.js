document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a'); // Вибираємо всі елементи для анімації
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Конфігурація спостерігача, відсоток видимості елемента перед тим, як він стає "видимим"
    });
  
    fadeInElements.forEach(element => {
      element.classList.add('fade-in'); // Додаємо клас для ефекту зникнення
      observer.observe(element); // Починаємо спостерігати за кожним елементом
    });
  });