const sky = document.querySelector('.sky');
for (let i = 1; i <= 20; i++) {
  const start = document.createElement('div');
  start.className = 'star star-'+i;
  sky.append(start);
}