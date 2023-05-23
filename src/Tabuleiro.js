import {Pino} from "./Pino.js";

export class Tabuleiro{
    pinos = [];

    constructor(){
        this.pinos.push(new Pino());
        this.pinos.push(new Pino());
        this.pinos.push(new Pino());
    }

    /*Move um disco do pino1 para o pino2*/
    moveDisco(pino1, pino2){
        let disco;

        /*se os numero são indices válido*/
        if(pino1 >= 0 && pino1 <= 2 && pino2 >= 0 && pino2 <= 2){
            
            /*Verifica se há discos no pino 2*/
            if(this.pinos[pino2].numeroDiscos()>0){
                
                /*Se o disco do pino1 é menor que o que vai abaixo dele */
                if(this.pinos[pino1].pilha.olha() < this.pinos[pino2].pilha.olha()){

                    disco = this.pinos[pino1].retiraDisco();
                    this.pinos[pino2].colocaDisco(disco);

                    return true;
                }
            }
            else{

                disco = this.pinos[pino1].retiraDisco();
                this.pinos[pino2].colocaDisco(disco);

                return true;
            }
        }

        return false;
    }
    
    /*adiciona um disco ao pino 0*/
    addDisco(){

        let primeiroPino = this.pinos[0];
        let diametro;

        if(primeiroPino.numeroDiscos()>0){

            diametro = primeiroPino.pilha.olha() - 30;       
        }else{

            diametro = 200;
        }

        primeiroPino.colocaDisco(diametro);
    }

    /*retorna o vetor com os valores dos discos*/
    getDiscos(n){
        return this.pinos[n].pilha.vet;
    }
}