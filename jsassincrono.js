//assincrono = o que não ocorre ao mesmo tempo.
//promises
//3 estagios
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida')
        }, 3000)
    })
    
    const resolved = await myPromise
        .then((result) => result + ' Passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message))
        
    return resolved
}

console.log(resolvePromise())

//deu xabu
