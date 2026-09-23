const entrada = require('readline-sync');
const nivelOleo = entrada.questionInt("Digite o nivel do oleo em porcemtagem: ");

if (nivelOleo >= 40 && nivelOleo <= 80 ) {
    console.log("NIVEL NORMAL");
} else {
    console.log("INSPECAO NECESSARIA");
}
console.log(`valor informado ${nivelOleo}%:`)