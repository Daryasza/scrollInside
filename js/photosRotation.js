const cardItems = document.querySelectorAll('.card__item');

document.addEventListener('mousemove', function (e) {
  for (let i = 0; i < cardItems.length; i++) {
    let cardItem = cardItems[i];
    if (e.target === cardItem) {
      const cardHeightHalf = cardItem.offsetHeight / 2;
      const cardWidthHalf = cardItem.offsetWidth / 2;

      cardItem.style.transform = `rotateY(${-(e.offsetX - cardWidthHalf)/4 }deg) rotateX(${(e.offsetY - cardHeightHalf)/4}deg)`;
    }
  }
});

document.addEventListener('mouseout', function(e) {
  for (let i = 0; i < cardItems.length; i++) {
    let cardItem = cardItems[i];
    if (e.target === cardItem) {
      cardItem.style.transform = 'rotate(0deg)';
    }
  }
});

