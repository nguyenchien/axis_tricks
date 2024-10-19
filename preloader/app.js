window.addEventListener('load', ()=> {
  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.style.opacity = 0;
    wrapper.style.transition = 'opacity 0.5s ease';
    setTimeout(()=> {
      wrapper.style.display = 'none';
    }, 500);
  }
});