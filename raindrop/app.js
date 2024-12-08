function createRainDrop() {
  const raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');
  const x = Math.random() * window.innerWidth;
  raindrop.style.left = `${x}px`;
  raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
  document.body.append(raindrop);
  raindrop.addEventListener('animationend', ()=>{
    createRipple(x, window.innerHeight - 10);
    raindrop.remove();
  })
}

function createRipple(x, y) {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.left = `${x - 5}px`;
  ripple.style.top = `${y}px`;
  document.body.append(ripple);
  ripple.addEventListener('animationend', ()=>{
    ripple.remove();
  });
}

setInterval(createRainDrop, 100);