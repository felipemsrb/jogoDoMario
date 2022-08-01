


    
    
    
 let meusPontos = 0;   
 
 const yoshi = document.querySelector('.yoshi');
 const cano = document.querySelector('.cano');
 
 const pula = () => {
     yoshi.classList.add('jump');
     
     

setTimeout(() => {
    
    yoshi.classList.remove('jump');
    
}, 500);

};

const loop = setInterval(() => {
    
    const posicaoCano = cano.offsetLeft;
    const posicaoYoshi = +window.getComputedStyle(yoshi).bottom.replace('px', '');
    
    
    
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoYoshi < 80) {
        
        
        
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        yoshi.style.animation = 'none';
        yoshi.style.bottom = `${posicaoYoshi}px`;

        yoshi.src = "yoshiGameOver.png";
        yoshi.style.width = '75px'
        yoshi.style.marginLeft = '50px';
        
        
        
        
        
      
        
        
        
        clearInterval(loop);
        
    }  else if (posicaoCano > -2 && posicaoCano < 0 && posicaoYoshi > 80) {
        
        meusPontos += 1;
        document.querySelector('#score').innerHTML= meusPontos;
        console.log(posicaoCano)
        return meusPontos;
        
    }
}, 10); 



document.addEventListener('keydown', pula);