function carregarRecorde(){
    let nomeCookie = "recorde=";
    let listaCookies = document.cookie.split(';');
    for(let i = 0; i < listaCookies.length; i++) {
      let c = listaCookies[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(nomeCookie) == 0) {
        return c.substring(nomeCookie.length, c.length);
      }
    }
    return 0;
  }

function salvarCookie(novoRecorde) {
    const data = new Date();
    data.setTime(data.getTime() + (10*24*60*60*1000));
    let expires = "expires="+ data.toUTCString();
    document.cookie = "recorde=" + novoRecorde + ";" + expires + ";path=/";
}

function desenhar(){
    tela.desenhar();
    placar.desenhar();
    cobra.desenhar();
    comida.desenhar();
    if (cobra.vida == 0) {
        if (placar.qtdPontos > placar.recorde) {
            salvarCookie(placar.qtdPontos);
            placar.recorde = placar.qtdPontos;
        }          
        placar.qtdPontos = 0;
        placar.nomeJogo = 'FIM DE JOGO';
        placar.nomeJogador = 'Clique na tela para iniciar...';
    }

    if (comida.foiComido(cobra.x[0],cobra.y[0])){
        comida = new Comida(++comida.valor,5)
    }
}
comida = new Comida(1,5);
const intervalo=window.setInterval(desenhar,1000/60);
canvasElemento.addEventListener("click",(evento) => {
    if (cobra.vida==0){
        nome=prompt("Informe o Nome do Jogador:"); 
        placar.nomeJogador=nome;
        placar.nomeJogo="IFRJ COBRA";
        placar.recorde = carregarRecorde(); 
        cobra.vida = 3;
        comida = new Comida(1,5);    
    }
});
document.addEventListener("keydown",(evento) => {
    if (evento.key == 6 ) cobra.direcao=0;
    if (evento.key == 3 ) cobra.direcao=45;
    if (evento.key == 2 ) cobra.direcao=90;
    if (evento.key == 1 ) cobra.direcao=135;
    if (evento.key == 4 ) cobra.direcao=180;
    if (evento.key == 7 ) cobra.direcao=225;
    if (evento.key == 8 ) cobra.direcao=270;
    if (evento.key == 9 ) cobra.direcao=315;
   // console.log("Tecla Pressionada: " + evento.key);
});
