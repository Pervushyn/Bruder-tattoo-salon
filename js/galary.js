
const modal = document.createElement('div');
modal.style.cssText = `
  position: fixed;
  inset: 0;
  width: auto;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;
document.body.appendChild(modal);

// Создаем элемент для изображения в модальном окне
const modalImg = document.createElement('img');
modalImg.style.maxWidth = 'auto';
modalImg.style.maxHeight = '100%';
modal.appendChild(modalImg);

// Функция для открытия модального окна с изображением
function openModal(src) {
  modalImg.src = src;
  modal.style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
  modalImg.src = '';
}

// Добавляем обработчики событий к изображениям галереи
document.querySelectorAll('.galary-item .images').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    openModal(this.src);
  });
});

// Добавляем обработчик событий к модальному окну для его закрытия
modal.addEventListener('click', closeModal);


