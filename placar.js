const placar = {
    qtdPontos:0,
    recorde:0,
    largura:800,
    altura:60,
    nomeJogador:"Clique na tela para iniciar...",
    nomeJogo:"IFRJ COBRA",  
    cor:"#FFFFFF",
    corFundo:"#01341D",
    desenhar(){
        canvasCtx.fillStyle= this.corFundo;
        canvasCtx.fillRect(0,0,placar.largura,placar.altura);
        canvasCtx.fillStyle= this.cor;
        canvasCtx.textBaseline = "top"
        canvasCtx.font= "18px Fantasy"
        canvasCtx.textAlign = "left"
        canvasCtx.fillText(this.nomeJogador, 10,10);
        canvasCtx.fillText(this.recorde + " Recorde", 10,36);
        canvasCtx.textBaseline = "top"
        canvasCtx.textAlign = "right"
        canvasCtx.fillText(cobra.vida + " vida(s)", 790,10);
        canvasCtx.fillText(this.qtdPontos + " pontos",790,36);
        canvasCtx.font= "30px Fantasy"
        canvasCtx.textBaseline = "top"
        canvasCtx.textAlign = "center"
        canvasCtx.fillText(this.nomeJogo,400,20);
    }
};