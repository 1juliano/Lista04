
let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let n3 = parseFloat(prompt("Digite o terceiro número:"));


let maior;

if (n1 >= n2 && n1 >= n3) {
    maior = n1;
} else if (n2 >= n1 && n2 >= n3) {
    maior = n2;
} else {
    maior = n3;
}


alert("O maior número é: " + maior);