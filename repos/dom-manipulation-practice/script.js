const container = document.querySelector('#container');

const p = document.createElement('p');
p.classList.add('red-paragraph');
p.textContent = 'Hey I\'m red!';
p.style.color = 'red'

container.appendChild(p);

const h3 = document.createElement('h3')
h3.textContent = 'I\'m a blue h3'
h3.style.color = 'blue'

container.appendChild(h3)

const div = document.createElement('div')
div.style.backgroundColor = 'pink'
div.style.borderColor = 'black'

const h1 = document.createElement('h1')
h1.textContent = 'I\'m in a div'

const p2 = document.createElement('p')
p2.textContent = 'ME TOO!'

div.appendChild(h1)
div.appendChild(p2)

container.appendChild(div)


const btn = document.querySelector('#btn')
btn.addEventListener('click', (e) => {
    e.target.style.background = "yellow"
})
