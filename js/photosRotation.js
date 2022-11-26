const cardItems = document.querySelectorAll('.card__item');

document.addEventListener('mousemove', function (e) {
  for (let i = 0; i < cardItems.length; i++) {
    let cardItem = cardItems[i];
    if (e.target === cardItem) {
      const cardHeightHalf = cardItem.offsetHeight / 2;
      const cardWidthHalf = cardItem.offsetWidth / 2;

      cardItem.style.transform = `rotateY(${-(e.offsetX - cardWidthHalf)/4 }deg) rotateX(${(e.offsetY - cardHeightHalf)/4}deg)`;
      cardItem.style.boxShadow = `inset ${e.offsetX}px ${e.offsetY}px 100px 10px rgba(0, 0, 0, 0.5)`
    }
  }
});

document.addEventListener('mouseout', function(e) {
  for (let i = 0; i < cardItems.length; i++) {
    let cardItem = cardItems[i];
    if (e.target === cardItem) {
      cardItem.style.transform = 'rotate(0deg)';
      cardItem.style.boxShadow = 'none';
    }
  }
});

