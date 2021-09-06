start();
function start() {
  let size = prompt('How many squares?');
  if (size > 100) {
    size = 100;
  }
  const main = document.querySelector('#main');
  main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement('div');
    main.appendChild(grid);
  }
  main.addEventListener('mouseover', (e) => {
    if (e.target.hasAttribute('style')) {
      const value =
        e.target.getAttribute('style').match(/(?<=brightness\()\d\.?\d?/) - 0.1;
      e.target.style.filter = `brightness(${value})`;
    } else {
      e.target.style.backgroundColor =
        '#' + Math.random().toString(16).slice(-6);
      e.target.style.filter = `brightness(1)`;
    }
  });
}
const button = document.querySelector('button');
button.addEventListener('click', () => {
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  start();
});
