


    
    
    
 let meusPontos = 0;   
 
 const yoshi = document.querySelector('.yoshi');
 const cano = document.querySelector('.cano');
 const somPulo = document.getElementById('som-pulo');
 
 const pula = () => {
     yoshi.classList.add('jump');
     somPulo.play();
     
     

setTimeout(() => {
    
    yoshi.classList.remove('jump');
    
}, 500);

};

const loop = setInterval(() => {
    
    const posicaoCano = cano.offsetLeft;
    const posicaoYoshi = +window.getComputedStyle(yoshi).bottom.replace('px', '');
    const musicaGameOver = document.getElementById('game-over');
    const musicaYoshi = document.getElementById('musica-yoshi');
    
    
    
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoYoshi < 80) {
        
        
        
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        yoshi.style.animation = 'none';
        yoshi.style.bottom = `${posicaoYoshi}px`;

        yoshi.src = "./imagens/yoshiGameOver.png";
        yoshi.style.width = '75px'
        yoshi.style.marginLeft = '50px';

        musicaYoshi.pause();
        musicaGameOver.play();
        
        
        
        
        
        
      
        
        
        
        clearInterval(loop);
        
    }  else if (posicaoCano > -2 && posicaoCano < 0 && posicaoYoshi > 80) {
        
        meusPontos += 1;
        document.querySelector('#score').innerHTML= meusPontos;
        console.log(posicaoCano)
        return meusPontos;
        
    }
}, 10); 



document.addEventListener('keydown', pula);