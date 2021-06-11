let produtos = ["livros", "fones", "maquiagem", "tablet", "macbook"];

console.log("O join é usado para transformar o array em texto");
console.log(produtos.join(","));

console.log("O pop é usado para exluir o último item do array");
produtos.pop();
console.log(produtos);

console.log("O push é usado para adicionar um item no final do array");
console.log(produtos.push("carteira"));
console.log(produtos);

console.log("O shift é usado para remover um item no começo do array");
produtos.shift();
console.log(produtos);

console.log("O unshift é usado para adicionar items no começo do array");
produtos.unshift("roupa");
console.log(produtos);