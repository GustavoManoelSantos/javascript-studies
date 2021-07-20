// JavaScript Básico

//Declaração de variáveis
var exemplo;

//Valores que podem ser definidos às variáveis
exemplo = 1 ; //números
exemplo = 0.01; // Number (inteiros e reais)
exemplo = 'string'; 
exemplo = "string"; //ambos definem strings
exemplo = true; // valores booleanos
exemplo = null; //significa vazio
exemplo = undefined; // igual ao null

// Objetos são coleções de pares chave e valor e são definidos entre chaves
var obj = {
    study: "JavaScript",
    acontecendo: true,
};

//Acessando as propriedades do objeto
obj.study;
obj.acontecendo;

//Criar novas propriedades no objeto por meio de atribuições
obj.javascript = "linguagem";

//Criar objetos dentro de objetos
obj.second_obj = {}


// Arrays (lista indexada de valores)
var vazio = []; //definição de array vazio

var valores = [1, 2, 3, 4];

valores[0] //Retorna o primeiro elemento do array
valores.length // tamanho do array
valores[valores.length-1] //último elemento do array
valores[4] = 5 //adiciona um novo valor ao array por atribuição
valores[4] = 6 //alterar elemento do array por atribuição


//Arrays e objetos podem conter uns aos outros

//array contendo objeto
var array_obj = [
    {value_x: 1, value_y: 1},
    {value_x: 2, value_y: 2},
];


//objeto contendo array
var obj_array = {
    array1: [[1, 2], [3, 4]],
    array2: [[5, 6], [7, 8]],
};


//operadores

//matemáticos
1 + 2; //adição
"1" + "2"; //somar números ou concatenar strings
2 - 1; //subtração
2 / 1; //divisão
1 * 2; //multiplicação


//aritiméticos - nesses casos a variável recebe o valor após a operação
var aritimetico = 0; //definir variável
aritimetico++; //soma 1 à variável
aritimetico--; //subtrai 1 da variável
aritimetico += 2; //soma 2 (ou qualquer valor) à variàvel
aritimetico *= 2; // multiplica a variável


//de igualdade e relacionais
var x = 10, y = 5;
x == y; //verdadeiro: x é igual a y
x != y; //verdadeiro: x é diferente de y
x < y; //verdadeiro: x é menor que y
x > y; //verdadeiro: x é maior que y
x <= y; //verdadeiro: x é menor ou igual a y
x >= y; //verdadeiro: x é maior ou igual y
"um" == "dois"; //falso: as duas strings são diferentes
"um" > "dois"; //u é alfabeticamente maior que d
false == (y > x); //verdadeiro: falso é igual a falso

//lógicos
(x == 1) && (y == 3); // "e": retorna verdadeiro se as duas condições são verdadeiras
(x == 1) || (y == 3); //"ou": retorna verdadeiro se alguma das condições forem verdadeiras
!(x == y) //inverte um valor booleano


//Funções

//Definindo uma função

function soma1(x){
    return x+1;
}

var y = 4;
soma1(y);
//console.log(soma1(y));

//funções podem ser atribuidas a variáveis
var quadrado = function(x){
    return x*x;
}

quadrado(soma1(y))
//console.log(quadrado(soma1(y)))

//funções que recebem as propriedades de um objeto são chamadas de método
var array = []; //criação de array vazio
array.push(1, 2, 3, 4, 5) //adicionando elementos ao array
//array.reverse() //inverte a ordem dos elementos do array

//A palavra "this" se refere ao objeto que o método se refere
array.raiz = function (){
    var posicao3 = this[2];
    var posicao5 = this[4];

    return Math.sqrt(posicao5*posicao5 - posicao3*posicao3)
}

//console.log(array.raiz())


//Definir função construtora para inicializar objeto
function Pontos(value_x, value_y){
    
    this.value_x = value_x;

    this.value_y = value_y;
}

//criar nova instância com a palavra "new"
var ponto1 = new Pontos(1, 1);

//criando método para objetos Pontos através do objeto prototype que está ligado à função construtora
Pontos.prototype.r = function(){
    return Math.sqrt(
        this.value_x * this.value_x +
        this.value_y * this.value_y
    );
};

//console.log(ponto1.r())

//Diferenças de let e var

//var = permite declarações repetidas no mesmo bloco, permite duas variáveis com o mesmo nome no mesmo bloco, são levadas para o início do bloco (hoisting)

//let = não permite declarações repetidas no mesmo bloco, não permite duas variáveis com o mesmo nome no mesmo bloco, também há o hoisting, mas o acesso só é permitido após atribuição