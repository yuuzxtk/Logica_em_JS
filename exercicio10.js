function calcLitros(){
    let velocidade = parseFloat(prompt("Digite a velocidade média do carro: "));
    let distancia = parseFloat(prompt("Digite a distância percorrida: "));
    let litros = distancia / 12;
    let tempo = distancia / velocidade;
    console.log("O tempo de viagem é: " + tempo.toFixed(2) + " horas.");
    console.log("A quantidade de litros necessária é: " + litros.toFixed(2) + " litros.");
}
calcLitros();