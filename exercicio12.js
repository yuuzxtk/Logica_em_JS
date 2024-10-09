function calcTriangulo(){
    let a = parseFloat(prompt("Digite o primeiro lado do triangulo: "));
    let b = parseFloat(prompt("Digite o segundo lado do triangulo: "));
    let c = parseFloat(prompt("Digite o terceiro lado do triangulo: "));
    if (a == b && b == c){
        console.log("O triângulo é equilátero!");
    } else if (a == b || b == c || a == c){
        console.log("O triângulo é isósceles!");
    }
    else{
        console.log("O triângulo é escaleno!");
    }
    
}
calcTriangulo();