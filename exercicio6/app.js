const [subtracao, soma, multiplicacao, divisao] = require('./calcular/calcular');

let subtrair = subtracao(10, 8) //2
console.log(subtrair);

let somar = soma(5, 6) //11
console.log(somar);

let multiplicar = multiplicacao(9, 4) //36
console.log(multiplicar);

let dividir = divisao(9, 3) //3
console.log(dividir);