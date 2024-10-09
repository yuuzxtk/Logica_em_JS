function mediaDeNotas(){
    let a = parseFloat(prompt("Digite a primeira nota: "));
    let b = parseFloat(prompt("Digite a segunda nota: "));
    let c = parseFloat(prompt("Digite a terceira nota: "));
    let media = (a + b + c) / 3;
    console.log("A média das notas é: " + media);
    if (media >= 6){
        console.log("Aprovado!");
    }
    else{
        console.log("Reprovado!");
    }
}
mediaDeNotas();