var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrado = document.getElementsByClassName('quadrado');
      

mudarJogador('X');

function escolherQuadrado(id){

    if(vencedor !== null){
        return;
    }

    //console.log(id);
    var quadrado = document.getElementById(id);
    //verificar se o quadrado já foi clicado
    if(quadrado.innerHTML !== '-'){
        return;                         //este return evita o código abaixo de ser utilizado , caso já alterado 
    }
 
    quadrado.innerHTML = jogador;       //todo inner da classe quadrado poderá ser alterado, conteudo
    quadrado.style.color = '#000';

    //verificar o jogador da vez
    if(jogador === 'X'){
        jogador ='O';
    }else{
        jogador ='X';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1,quadrado2,quadrado3);
        mudaVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4,quadrado5,quadrado6);
        mudaVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7,quadrado8,quadrado9);
        mudaVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudaVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2,quadrado5,quadrado8);
        mudaVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3,quadrado6,quadrado9);
        mudaVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1,quadrado5,quadrado9);
        mudaVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3,quadrado5,quadrado7);
        mudaVencedor(quadrado3);
        return;
    }

}

function mudaVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
      
   
}

function mudaCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
    
}

function checaSequencia(quadrado1,quadrado2,quadrado3){
    var eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eigual = true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for(var i=1; i<=9;i++){
    var quadrado = document.getElementById(i);
    quadrado.style.background = '#eee';
    quadrado.style.color ='#eee';
    quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}