


    
    
let meusPontos = 0;   
    
 
 const mario = document.querySelector('.mario');
 const cano = document.querySelector('.cano');
 const somPulo = document.getElementById('som-pulo');
 
 const pula = () => {
     mario.classList.add('jump');
     somPulo.play();
     
     
     
     setTimeout(() => {
         
         mario.classList.remove('jump');
    
}, 500);

};

const loop = setInterval(() => {
    
    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');
    const musicaGameOver = document.getElementById('game-over');
    const musicaMario = document.getElementById('musica-mario');
    
    console.log(posicaoCano)
    
    
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80) {
        
        
        
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = "./imagens/game-over.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px';
        
        musicaMario.pause();
        musicaGameOver.play();
        
        
        
        
      
        
        
        
        clearInterval(loop);
        
    }  else if ( posicaoCano > -2 && posicaoCano < 0 && posicaoMario > 80) {
        
        meusPontos += 1;
        document.querySelector('#score').innerHTML= meusPontos;
        return meusPontos;

    }
}, 10); 



document.addEventListener('keydown', pula);