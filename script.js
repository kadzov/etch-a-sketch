const main = document.querySelector('#main')
for (let i = 0; i < 10; i++) {
  main.appendChild(document.createElement('div'))
}

console.log(main)
