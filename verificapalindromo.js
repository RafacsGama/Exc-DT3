function verificaPalindromo(string){
    if(!string) return

    return string.split("").reverse().join("") === string

}
//console.log(verificaPalindromo("DABALE ARROZ ALA ZORRA ELABAD"))

function verificaPalindromo2(string){
    if(!string) return "string inexistente"

    for(let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length -1 - i]){
            return false
        }
    }
    return true
}

//console.log (verificaPalindromo2("DABALE ARROZ ALA ZORRA ELABAD"))
console.log (verificaPalindromo2("arroz"))