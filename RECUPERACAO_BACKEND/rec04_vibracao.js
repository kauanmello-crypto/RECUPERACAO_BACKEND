const entrada = require('readline-sync');

const vibracao = entrada.questionFloat("Digite o valor da vibracao: ");
let situacao;

if (vibracao <= 3) {
    situacao = "ESTAVEL"
}

else if (vibracao >= 3 && vibracao <= 6) {
    situacao = "ATENCAO"
}

else {
    situacao = "CRITICO"
}

console.log("=== RELTORIO ===")
console.log(`O valor informado foi ${vibracao}:`);
console.log(`classificao ${situacao}:`);


