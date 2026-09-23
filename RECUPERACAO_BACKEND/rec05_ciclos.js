const entrada = require('readline-sync');

const pecasPorCiclos = entrada.questionInt("Digite quandos produtos sao produzidos por ciclo: ");

let acumulado = 0;

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    acumulado += pecasPorCiclos;
    console.log (`ciclo ${ciclo} - Producao acumulada: ${acumulado}`);
}