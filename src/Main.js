import {Tabuleiro} from './Tabuleiro.js';
import {State} from './State.js';

export class Main{
    
    state = new State();
    tabuleiro = new Tabuleiro();
    cntxPino = [];

    start(){
        this.init();

        setInterval(() => {

            this.redesenhaCanvas();
        }, 10);
    }

    /*Inicia os objetos do jogo*/
    init(){
        
        let canvas = document.getElementById("pino1");
        this.cntxPino.push(canvas.getContext('2d'));
        canvas.onclick = (event) => {

            this.handleCanvaOnClick(0, event.currentTarget);
        }

        canvas = document.getElementById("pino2");
        this.cntxPino.push(canvas.getContext('2d'));
        canvas.onclick = (event) => {

            this.handleCanvaOnClick(1, event.currentTarget);
        }

        canvas = document.getElementById("pino3");
        this.cntxPino.push(canvas.getContext('2d'));
        canvas.onclick = (event) => {

            this.handleCanvaOnClick(2, event.currentTarget);
        }

        this.tabuleiro.addDisco();
        this.tabuleiro.addDisco();
        this.tabuleiro.addDisco();
    }

    redesenhaCanvas(){
        const alturaDisco = 20;
        const larguraCanva = 200;
        const larguraPino = 20;

        /*itera os pinos*/
        for(let j = 0 ; j<3 ; j++){

            let discos;
            discos = this.tabuleiro.getDiscos(j);

            /*Apaga o canva do pino*/
            this.cntxPino[j].clearRect(0, 0, larguraCanva , larguraCanva);

            /*desenja novamente os pinos*/
            this.cntxPino[j].fillStyle = "#784516";
            this.cntxPino[j].fillRect(larguraCanva/2 - larguraPino/2 , 0 ,larguraPino, larguraCanva);

                
            /*Se o pino j não estiver selecionado*/
            if(this.state.pinoSelecionado != j){

               /*Itera os discos do pino j*/
                for(let i = 0 ; i<discos.length ; i++){
                    this.cntxPino[j].fillStyle = "#F7302D";
                    this.cntxPino[j].fillRect(larguraCanva/2 - Math.floor(discos[i]/2), 180 - alturaDisco*i, discos[i], alturaDisco);
                }
            }

            /*Se o pino j estiver selecionado e tiver discos*/
            else if(discos.length>0){

                /*Itera os discos do pino j, mas não desenha o ultimo*/
                for(let i = 0 ; i<discos.length - 1 ; i++){
                    this.cntxPino[j].fillStyle = "#F7302D";
                    this.cntxPino[j].fillRect(larguraCanva/2 - Math.floor(discos[i]/2), 180 - alturaDisco*i, discos[i], alturaDisco);
                }

                    
                this.cntxPino[j].fillStyle = "#F7302D";
                this.cntxPino[j].fillRect(larguraCanva/2 - Math.floor(discos[discos.length-1]/2), 0, discos[discos.length-1], alturaDisco);
            }
        }
    }


    /*define o evento de clique para cada pino.
    O estado de selecionado muda quando um pino é clicado,
    -1 indica nenhuma pino selecionado*/
    handleCanvaOnClick(pino, canva){
        //console.log(this.state.pinoSelecionado, pino);

        /*Caso não houver nenhum pino selecionado*/ 
        if(this.state.pinoSelecionado ==  -1){
            this.state.pinoSelecionado = pino;
        }
        else{
            /*caso houver um pino selecioando,
            mas o imediatamente selecionado é diferente
            do selecionado anteriormente*/
            if(this.state.pinoSelecionado != pino){
                if(this.tabuleiro.moveDisco(this.state.pinoSelecionado, pino)){
                    this.state.pinoSelecionado = -1; 
                }
            }
            else{
                this.state.pinoSelecionado = -1;
            }
            
        }
    }
}