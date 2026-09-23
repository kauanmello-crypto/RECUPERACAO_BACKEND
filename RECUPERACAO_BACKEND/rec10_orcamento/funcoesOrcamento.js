
function calcularMaoDeObra(horas) {
    return horas * 95;
}

function calcularTotal(valorMateriais, horas) {
    const maoDeObra = calcularMaoDeObra(horas);
    return valorMateriais + maoDeObra;
}

function verificarDesconto(total) {
    if (total <= 10) {
        return "EM GARANTIA";
    } else {
        return "SEM DESCONTO";
    }
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
}