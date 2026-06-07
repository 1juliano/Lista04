
let quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));


let preco;

if (quantidade < 12) {
    preco = 1.30;
} else {
    preco = 1.00;
}


let total = quantidade * preco;


alert("Total da compra: R$ " + total.toFixed(2));