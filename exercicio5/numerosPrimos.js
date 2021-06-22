let numerosPrimos = [1, 2, 3, 5, 7]
let numeros = [...numerosPrimos, 11, 13, 17, 19, 23]
console.log(numeros)

function maiorNumero(n) {
    return Math.min(...n)
}
console.log(maiorNumero(numeros))