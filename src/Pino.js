import {Pilha} from "./Pilha.js"

export class Pino{
    pilha = new Pilha();

    constructor(){

    }

    colocaDisco(disco){
        this.pilha.empilha(disco);
    }

    retiraDisco(){
        return this.pilha.retira();
    }

    numeroDiscos(){
        return this.pilha.vet.length;
    }
}