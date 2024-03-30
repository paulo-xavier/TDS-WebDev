document.querySelector('#form-busca').onsubmit = validaBusca; 

var botaoPausar = document.querySelector('.botao-pausa');

var controle = document.querySelector('.pause');
controle.onclick = pausarImagem; 

var bannerAtual = 0; 

var banners = [
    "assets/images/mario1.png", 
    "assets/images/mario2.png"
]


function validaBusca() {
    if (document.querySelector('#q').value == '') {
        alert("Invalid!! You must enter a word!");
        return false; 
    }
}

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2; 
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

function pausarImagem() {
    if (controle.className == 'pause'){
        clearInterval(timer);
        controle.className = 'play';
        botaoPausar.src = "assets/images/play.png";
    
    } else {
        timer = setInterval(trocaBanner, 1000); 
        controle.className = 'pause';
        botaoPausar.src = "assets/images/pause.png";
    }
}


/*Inicia a troca das imagens */

var timer = setInterval(trocaBanner, 2000); 




