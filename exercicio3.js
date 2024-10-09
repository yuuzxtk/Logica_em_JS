function somaDeIguais() {
    let a = parseInt(prompt("Digite o valor de a:"));
    let b = parseInt(prompt("Digite o valor de b:"));

    if (a == b) {
        console.log("Os valores de a e b são iguais.");
        let c = a + b;
        console.log("A soma de a e b é: " + c);	
    }
    else{
        console.log("Os valores de a e b são diferentes.");
    }
}
somaDeIguais();