
let nota = parseFloat(prompt("Digite uma nota de 0 a 100:"));


let conceito;

if (nota >= 90 && nota <= 100) {
    conceito = "A";
} else if (nota >= 80 && nota <= 89) {
    conceito = "B";
} else if (nota >= 70 && nota <= 79) {
    conceito = "C";
} else if (nota >= 60 && nota <= 69) {
    conceito = "D";
} else if (nota < 60) {
    conceito = "F";
} else {
    conceito = "Nota inválida";
}


alert("Conceito: " + conceito);