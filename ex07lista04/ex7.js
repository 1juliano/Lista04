
let idade = parseInt(prompt("Digite sua idade:"));


let tipo;

if (idade < 12) {
    tipo = "Infantil";
} else if (idade >= 12 && idade <= 17) {
    tipo = "Adolescente";
} else if (idade >= 18 && idade <= 64) {
    tipo = "Adulto";
} else if (idade > 64) {
    tipo = "Sênior";
} else {
    tipo = "Idade inválida";
}


alert("Tipo de ingresso: " + tipo);