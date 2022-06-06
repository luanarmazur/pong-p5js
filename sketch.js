let comprimentoTela = 800;
let larguraTela = 600;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let diametroBolinha = 20
let raioBolinha = diametroBolinha / 2;
let xMinhaRaquete = 10;
let yRaquete = 300;
let larguraRaquete = 10;
let comprimentoRaquete = 80;
let xRaqueteOponente = comprimentoTela - 10;
let yRaqueteOponente = 300;
let colidiu = false;
let pontosOponente = 0
let meusPontos = 0

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(50);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  criaMinhaRaquete(xMinhaRaquete, yRaquete);
  moveMinhaRaquete()
  criaMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xMinhaRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
}

function criaBolinha (){
circle(xBolinha, yBolinha, diametroBolinha);  
}
function moveBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
    }
function colideBolinha (){
 if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0){
     velocidadeXBolinha = velocidadeXBolinha * -1
     }
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0){
     velocidadeYBolinha = velocidadeYBolinha * -1
     }
}
function criaMinhaRaquete(posicaoX, posicaoY){
rect(posicaoX, posicaoY,larguraRaquete,comprimentoRaquete)
}
function moveMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  yRaqueteOponente = yBolinha - comprimentoRaquete/ 2;
}


function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, raioBolinha) 
if (colidiu){ 
  velocidadeXBolinha *= -1;
     }
}

 function incluiPlacar(){
   fill(255)
   text(meusPontos, 200, 30);
   text(pontosOponente, 600, 30);
  }
 if(xBolinha < 10){
   pontosOponente *= 1;
  }

function pontuacaoJogo(){
  if(xBolinha > comprimentoTela - 10){
    meuspontos += 1;
   }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}