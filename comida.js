class Comida {
    cor='blue';
    cobraComeu=false;
    constructor(valor,tamanho){
        this.r = tamanho;
        this.valor = valor;
        this.x = Math.round(this.r+(tela.largura-this.r)*Math.random())
        this.y = Math.round(this.r+placar.altura+(tela.altura-this.r)*Math.random()) 
    }
    desenhar(){
        canvasCtx.fillStyle= this.cor;
        canvasCtx.beginPath();
        canvasCtx.arc(this.x,this.y,this.r,2*Math.PI,false);
        canvasCtx.fill();
    }
    foiComido(posX,posY){
        let distCobraComida=Math.sqrt((posX-this.x)**2+(posY-this.y)**2);
        if (distCobraComida < (this.r+cobra.r)) {
            console.log('A cobra comeu!')
            placar.qtdPontos+= this.valor;
            this.cobraComeu=true;
            this.cor=tela.cor;
            cobra.crescer();
            return true;
        }
    }
}