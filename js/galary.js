const modal = document.createElement('div');
modal.style.cssText = `
  position: fixed;
  top: calc(0px + 24px); // Отступаем 24px сверху для хедера
  left: 0;
  width: 100%;
  height: calc(100% - 24px); // Вычитаем высоту хедера из общей высоты
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
document.body.appendChild(modal);

// Создаем элемент для изображения в модальном окне
const modalImg = document.createElement('img');
modalImg.style.maxWidth = '80%';
modalImg.style.maxHeight = '80%';
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