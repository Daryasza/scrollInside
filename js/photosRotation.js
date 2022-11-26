const cardItems = document.querySelectorAll('.card__item');

document.addEventListener('mousemove', function (e) {
  for (let i = 0; i < cardItems.length; i++) {
    let cardItem = cardItems[i];
    if (e.target === cardItem) {
      const cardHeightHalf = cardItem.offsetHeight / 2;
      const cardWidthHalf = cardItem.offsetWidth / 2;
      const root = document.querySelector(':root');
      const id = cardItem.id;

      cardItem.style.transform = `rotateY(${-(e.offsetX - cardWidthHalf)/4 }deg) rotateX(${(e.offsetY - cardHeightHalf)/4}deg)`;
      root.style.setProperty(`--shadow-opacity-${id}`, '1');
      root.style.setProperty(`--shadow-positionX-${id}`, `${e.offsetY}px`);
      root.style.setProperty(`--shadow-positionY-${id}`, `${e.offsetX}px`);
    }
  }
});

document.addEventListener('mouseout', function(e) {
  for (let i = 0; i < cardItems.length; i++) {
    let cardItem = cardItems[i];
    if (e.target === cardItem) {
      const root = document.querySelector(':root');
      const id = cardItem.id;


      cardItem.style.transform = 'rotate(0deg)';
      root.style.setProperty(`--shadow-opacity-${id}`, '0');
      root.style.setProperty(`--shadow-positionX-${id}`, '0px');
      root.style.setProperty(`--shadow-positionY-${id}`, '0px');
    }
  }
});


