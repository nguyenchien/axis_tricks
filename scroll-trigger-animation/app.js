const bgImage = document.getElementById('bgImage');
const content1 = document.getElementById('content1');
let animationStarted = false;

window.addEventListener('scroll', () => {
  const rect = content1.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // console.log('rect.bottom:', rect.bottom);
  // console.log('windowHeight:', windowHeight);

  if (!animationStarted && rect.bottom <= windowHeight) {
    bgImage.classList.add('show-animation');
    animationStarted = true;
  }
});

window.addEventListener('scroll', () => {
  const documentHeight = document.body.offsetHeight; // chiều cao toàn bộ document
  const viewHeight = window.innerHeight; // chiều cao màn hình
  const scrollableHeight = documentHeight - viewHeight; // Chiều cao có thể scroll
  const scrollY = window.scrollY; // vị trí cuộn hiện tại
  
  const percentScroll = (scrollY / scrollableHeight) * 100;
  const scrollBar = document.querySelector('.js-scroll-bar span');
  scrollBar.style.width = `${percentScroll}%`;
});