const entrada = require('readline-sync');

const setores = [];

for (let setor = 0; setor <6; setor++ ){
    const nome = entrada.question(`Digite o nome do setor ${setor + 1}:`);
    setores.push(nome);
}

for (let i = 0; i < setores.length; i++ ){ 
    console.log(`${i+1} - ${setores[i]}`);
}