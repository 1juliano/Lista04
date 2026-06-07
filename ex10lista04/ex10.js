
let velocidade = parseFloat(prompt("Digite a velocidade (km/h):"));
let tempo = parseFloat(prompt("Digite o tempo (em horas):"));


let distancia = velocidade * tempo;


alert("Distância percorrida: " + distancia.toFixed(2) + " km");