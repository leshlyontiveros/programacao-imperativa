let acaoCarro = (qualquerNome) => {
console.log("o carro está " + qualquerNome)
}

let andar = () => {
return "andando"
}

let parar = () => {
return "parado"
}

acaoCarro(andar())
acaoCarro(parar())
