const emberCount = 100;

function createEmber() {
  const ember = document.createElement('div');
  const size = Math.random() * 10 + 10;
  ember.classList.add('ember');
  ember.style.left = `${Math.random() * 100}vw`;
  ember.style.width = `${size}px`;
  ember.style.height = `${size}px`;
  ember.style.animationDuration = `${Math.random() * 4 + 6}s`;
  ember.style.animationDelay = `${Math.random() * 2}s`;
  document.body.appendChild(ember);
  ember.addEventListener('animationend', () => {
    ember.remove();
    createEmber();
  })
}

for (let i = 1; i < emberCount; i++) {
  createEmber();
}