
export class Pilha{
   vet = [];

    constructor(){}
    
    empilha(valor){
        if(typeof valor === 'number'){
            this.vet.push(valor);
        }
    }

    olha(){
        if(this.vet.length>0){
            return this.vet[this.vet.length-1];
        }
    }

    retira(){
        if(this.vet.length>0){
            return this.vet.pop();
        }
    }
}
