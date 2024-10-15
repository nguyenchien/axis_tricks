const starts = document.querySelectorAll('.rating input');
starts.forEach(start => {
  start.addEventListener('change', () => {
    const startValue = start.id.replace('start', '');
    alert(`You have rated: ${startValue} ${startValue > 1 ? 'starts' : 'start'}`);
  });
})

