let subtracao = (nro1, nro2) => {
    return `${nro1}-${nro2} = ${nro1-nro2} `;
}

let soma = (nro1, nro2) => {
    return `${nro1}+${nro2} = ${nro1+nro2} `;
}

let multiplicacao = (nro1, nro2) => {
    return `${nro1}*${nro2} = ${nro1*nro2} `;
}

let divisao = (nro1, nro2) => {
    return `${nro1}/${nro2} = ${nro1/nro2} `;
}
module.exports = [subtracao, soma, multiplicacao, divisao]