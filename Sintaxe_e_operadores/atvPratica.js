function comparaNumeros(num1,num2){
    /*const sao_iguais = num1 === num2
    const soma = num1 + num2*/
    /*if(sao_iguais){
        return "São iguais!"
    }
    return "Não são iguais!"*/
    //return sao_iguais ? "São iguais" : "Não são iguais, oras."
    if(!num1 || !num2) return "Defina dois números!"
    const primeiraFrase = criaPrimeiraFrase(num1, num2)
    const segundaFrase = criaSegundaFrase(num1, num2)
    return`${ primeiraFrase} ${segundaFrase}`
}
function criaPrimeiraFrase(num1, num2){
   let sao_iguais = ''
    if(num1 !== num2){
        sao_iguais = 'Não'
    }
    return `Os números ${num1} e ${num2} ${sao_iguais} são iguais.`
}
function criaSegundaFrase(num1, num2){
    const soma = num1 + num2
    
    let menorQue10 = 'menor'
    let menorQue20 = 'menor'
    const compara10 = soma > 10
    const compara20 = soma > 20
    if(compara10){
        menorQue10 = 'maior'        
    }
    if (compara20){
        menorQue20 = 'maior'
    }
    return `Sua soma é ${soma}, que é ${menorQue10} que 10 e ${menorQue20} que 20.`
}
console.log(comparaNumeros())