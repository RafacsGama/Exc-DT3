/*function validaNumero(num){
    if(!num) return "envie um número válido"
    return num;
}
validaNumero()*/
/*(function(a,b){
    return a + b
})
(1, 2)*/
/*const soma3 = (function(){
    return a + b
}) (1, 2)
console.log(soma3)*/

/*const calc = function (operacao, num1, num2){
    return operacao(num1, num2)
}
const soma = function (num1, num2){
    return num1 + num2
}
const sub = function(num1, num2){
    return num1 - num2
}
const resultSoma = calc(soma, 1, 2)
const resultSub = calc(sub, 1, 2)

console.log(resultSub)
console.log(resultSoma)
*/

//função spread. usa quando tá chamando a função
/*function sum(x, y, z){
    return x + y + z
}
const numbers = [1, 2, 3]
console.log (sum(...numbers))*/
//função rest = usa quando tá declarando uma função.
/*function confereTamanho (...args){
    console.log(args.length)
}
confereTamanho()
confereTamanho(1, 2)
confereTamanho(3, 4, 5)*/

//destructuring
/*const user = {
    id: 42,
    displayName: 'Jdoe',
    fullName: {
        firstName: 'Jhon',
        lastName: 'Doe'
    }
}

function userId({id}){
    return id
}

function getFullName({ fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`
}

console.log(userId(user))

console.log(getFullName(user))*/

//switch case => faz comparação de tipo e valor.
/*function getAnimal(id){
    switch(id){
        case 1: 
            return "cão"
        case 2:
            return "gato"
        case 3: 
            return "pássaro"
        case 4:
            return "boi"
        default:
            return "peixe" 
    }
}
console.log(getAnimal(1))
console.log(getAnimal(5))
console.log(getAnimal("1"))
console.log(getAnimal(2))*/
//for iteração. push é metodo de array.
/*function multiplicarPorDois(arr){
    let multiplicados = []
    for (let i = 0; i<arr.length; i++){
        multiplicados.push(arr[i]*2)
    }
    return multiplicados
}
const meusNumeros = [2, 33, 456, 356, 40]
console.log(multiplicarPorDois(meusNumeros))*/
//forin para propriedades enumeráveis
/*function foriInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop])
    }
}
const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "São João do Belmonte"
}
foriInExemplo(meuObjeto)*/
//for of
/*function logLetras(palavra){
    for(letra of palavra){
        console.log(letra)
    }
}
const palavra = "abacaxi"
logLetras(palavra)*/
//while = enquanto
/*function exemploWhile(){
    let num = 0

    while(num <= 5){
        console.log(num)
        num++
    }
}
exemploWhile()*/

//dowhile = sempre vai executar pelo menos 1 vez.
/*function exemploDoWhile(){
    let num = 0
    do{
        console.log(num)
        num++
    }while(num <= 5)
}
exemploDoWhile()*/

//call
/*const myObj = {
    num1: 2,
    num2: 5
}
function soma(a, b){
    console.log(this.num1 + this.num2 + a +b)
}
soma.call(myObj, 1, 5)*/

//aplly os argumentos são mandados dentro de um array
/*const pessoa = {
    nome: 'Miguel',
}
const animal = {
    nome: 'Godi',
}
function getSomething(){
    console.log(this.nome)
}
getSomething.apply(animal)*/

/*const myObj = {
    num1: 2,
    num2: 4,
}
function soma(a, b){
    console.log(this.num1 + this.num2 + a + b)
}
soma.apply(myObj, [1, 5])*/

//bind clona a estrutura da função onde é chamada e aplica o valor do objeto
//passado como parâmetro.
/*const retornaNomes = function(){
    return this.nome
}
let bruno = retornaNomes.bind({ nome: 'Bruno'})
console.log(bruno())*/

//tratamento de erros 
//dom exception > tratamento de erros relacionados a códigos rodando na página web.
// diferença entre throw e return 
//throw
/*function verificarPalindromo(string){
    if(!string) throw "String inválida!"
    return string === string.split('').reverse().join('') 
}
console.log(verificarPalindromo('omo'))*/
//true

//try...catch
/*function verificarPalindromo(string){
    if(!string) throw "String inválida!"
    return string === string.split('').reverse().join('') 
}
//console.log(verificarPalindromo('cat'))

function exemploTryCatch(string){
    try {
        verificarPalindromo(string)
    } catch (e) {
        console.log("Error!")
    }
}
console.log(exemploTryCatch('')) */

//finally = instrução chamada independente se tem erro ou não.
/*function verificarPalindromo(string){
    if(!string) throw "String inválida!"
    return string === string.split('').reverse().join('') 
}
function exemploTryCatch(string){
    try {
       return verificarPalindromo(string)
    } catch (e) {
        throw e
    } finally{
        console.log('A string enviada foi: ' + string)
    }
}
exemploTryCatch('ala')*/

//objeto error 
//new Error(message, fileName, lineNumber)
/*const MeuErro = new Error('Mensagem inválida')
MeuErro.name = 'InvalidMessage'
throw MeuErro*/

