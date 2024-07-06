const cobra ={
    x:[400],
    y:[260],
    r:10,
    tamanho:1,
    cor:"yellow",
    direcao:0,
    vida:0,
    morrer(){
        this.vida--
        this.x=[400]
        this.y=[260]
        if (this.vida == 2) this.cor="orange" 
        if (this.vida == 1) this.cor="red" 
        if (this.vida == 0) this.cor="black" 
    },  
    mover()
    {
        direcaoRad = this.direcao*Math.PI/180;
              
        this.x.unshift(this.x[0]+Math.round(Math.cos(direcaoRad)));
        this.x.pop()
        this.y.unshift(this.y[0]+Math.round(Math.sin(direcaoRad)))
        this.y.pop()

        if ((this.x[0] > tela.largura - this.r) ||
            (this.x[0] < this.r)  ||
            (this.y[0] > tela.altura - this.r + placar.altura) ||
            (this.y[0] < this.r + placar.altura) || this.teveColisao()) this.morrer()

    },
    crescer()
    {
        for (let i = 0; i < 100; ++i){
            this.x.unshift(this.x[0]);
            this.y.unshift(this.y[0]);
        }
        cobra.tamanho++;
    },
    teveColisao(){
        
        if (this.x[40] != this.x[41] || this.y[40] != this.y[41])
            for (let i = 4*this.r+1; i < this.x.length; ++i){
                distCabecaCorpo=Math.sqrt((this.x[0]-this.x[i])**2+(this.y[0]-this.y[i])**2)
                if (distCabecaCorpo < 2*this.r) return true
            }
        return false

    },
    desenhar(){
        canvasCtx.fillStyle= this.cor;
        for (let i = 0; i < this.x.length; ++i){
            canvasCtx.beginPath();
            canvasCtx.arc(this.x[i],this.y[i],this.r,2*Math.PI,false);
            canvasCtx.fill();
        }
        if (this.vida > 0) this.mover();     
    }
    
};