const colors = ['black', 'teal', 'purple', 'navy'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
};

const switchColor = () => {
    const randomColor = getRandomNumber();
    console.log(randomColor);
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
}

btn.addEventListener('click', switchColor);