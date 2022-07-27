const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pula = () => {
mario.classList.add('jump');



setTimeout(() => {
    
    mario.classList.remove('jump');

}, 500);

};

const loop = setInterval(() => {
    
    const posicaoCano = cano.offsetLeft;

    if (posicaoCano <= 120) {
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;
    }
}, 10);

document.addEventListener('keydown', pula);