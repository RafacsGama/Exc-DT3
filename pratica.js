/*const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18',
    },
    {
        nome: 'Poedro',
        nota: 8,
        turma: '20',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '20',
    },
]
function alunosAprovados(array, media){
    let aprovados = []

    for(let i = 0; i < array.length; i++){

        const {nota, nome} = array[i]

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados
}
console.log(alunosAprovados(alunos, 5))*/
/*
function calculeIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}
const pessoa2 = {
    nome: "Carla",
    idade: 26
}
const animal = {
    nome: "Fiona",
    idade: 5,
    raça: "Pug"
}
//console.log(calculeIdade.call(pessoa2, 30))
console.log(calculeIdade.apply(animal, [30]))*/
//atividade prática erros..
function validaArray(arr, num){
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros")

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object")
    
        if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number")    
    
        if(arr.length !== num) throw new RangeError('Tamanho inválido') 

        return arr
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um erro de referência!")
            console.log(e.message)
        } else if (e instanceof TypeError){
                console.log("Este erro é um erro de tipo!")
                console.log(e.message)
        } else if (e instanceof RangeError){
            console.log("Este erro é um erro de range!")
            console.log(e.message)
        } else {
            console.log('Ocorreu um tipo de erro não esperado:' + e)
        }
    }
}
console.log(validaArray([1,2,3,4,5],5))