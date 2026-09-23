const entrada = require("readline-sync");

let soma = 0;

for (let i = 1; i <= 6; i++) {
    const tempo = entrada.questionFloat(`Digite o tempo ${i}: `);
    soma += tempo;
}

const media = soma / 6;

console.log("\n=== RESULTADO ===");
console.log(`Soma do tempo: ${soma}`);
console.log(`Média final: ${media}`);