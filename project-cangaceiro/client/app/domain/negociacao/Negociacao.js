class Negociacao{
    //Definindo as propriedades da classe no construtor
    constructor(_data, _quantidade, _valor){

        //Criando objeto literal
        Object.assign(this,{_quantidade: quantidade, _valor: valor})
        //Propriedades vindas dos construtor que precisam de alteração antes da atribuição devem ser atribuidas individualmente
        this._data = new Date(data.getTime());
        
        //this._data = data; - deste modo a data é alterado com setDate()

        //congelar objeto = nao recebem novas atribuições
        Object.freeze(this);
    }

    get data(){

        //Deste modo, caso haja um setDate(), apenas havera uma cópia modificada
        return new Date(this._data.getTime());

        //Deste modo a data era mutavel com setDate()
        //return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this.quantidade * this.valor;
    }
}