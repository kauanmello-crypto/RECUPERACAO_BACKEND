const entrada = require("readline-sync");

function calcularAproveitamento(util,total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXELENTE";
    } else if (percentual >= 75 && percentual <= 88.99) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const percentualUtil = entrada.questionFloat("total: ");
const percentualTotal = entrada.questionFloat("util: ");

const percentual = calcularAproveitamento(percentualTotal, percentualUtil);
const classificacao = classificarAproveitamento(percentual);

console.log("\n=== RELATÓRIO ===");

console.log(`quantidade util: ${percentualUtil}`);
console.log(`total: ${percentualTotal}`);
console.log(`percentual: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);