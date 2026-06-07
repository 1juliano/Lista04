
let temp = parseFloat(prompt("Digite a temperatura em graus Celsius:"));


if (temp < 0) {
    alert("Muito frio");
} else if (temp >= 0 && temp <= 20) {
    alert("Frio");
} else if (temp >= 21 && temp <= 30) {
    alert("Agradável");
} else {
    alert("Calor");
}