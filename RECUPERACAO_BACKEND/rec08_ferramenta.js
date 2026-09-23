const entrada = require('readline-sync');

const ferramentas = [];

for (let i = 0; i< 4; i++ ) {
    const ferramenta = {
         nome: entrada.question(`Digite o nome da ${i+1} primeira ferramenta:`),
         quantidade: entrada.questionInt("Digite a quantidade: "),
         Minimo: entrada.questionInt("Digite o minimo: ")
    }
    ferramentas.push(ferramenta);
}
console.log("=== RELATORIO DE ESTOQUE ===");

for (let i = 0; i< ferramentas.length; i++){
    const ferramenta = ferramentas[i];

    let situacao;

    if (ferramenta.quantidade < ferramenta.Minimo){
        situacao = "REPOR";
    }else{
        situacao ="ESTOQUE SUFICIENTE";
    }
    console.log(`ferramenta: ${ferramenta.nome}`);
    console.log(`quantidade: ${ferramenta.quantidade}`);
    console.log(`Minimo: ${ferramenta.Minimo}`);
    console.log(`situacao: ${situacao}`);
    console.log("-".repeat(20));
}
