
let valor = parseFloat(prompt("Digite o valor da compra:"));


let valorFinal;

if (valor > 100) {
    valorFinal = valor * 0.9; 
    alert("Desconto aplicado! Valor final: R$ " + valorFinal.toFixed(2));
} else {
    alert("Sem desconto. Valor final: R$ " + valor.toFixed(2));
}