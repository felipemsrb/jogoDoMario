const mario = document.querySelector('.mario');

const pula = () => {
mario.classList.add('.jump');

};



document.addEventListener('keydown', pula);