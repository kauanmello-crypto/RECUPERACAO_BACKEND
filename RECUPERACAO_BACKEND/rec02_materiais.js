const entrada = require('readline-sync');

const peca = entrada.question ("Digite o nome da peca: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preco unitario: ");

const total = quantidade * precoUnitario

console.log(`\n === RELATORIO ===`);

console.log(` peca: ${peca}`);
console.log(` quantidade: ${quantidade}`);
console.log(` preco unitario: ${precoUnitario.toFixed(2)}`);
console.log(` total: ${total.toFixed(2)}`);
