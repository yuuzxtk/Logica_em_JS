function verificarSoma() {
    // Lendo os valores de a, b e c
    let a = parseFloat(prompt("Digite o valor de a:"));
    let b = parseFloat(prompt("Digite o valor de b:"));
    let c = parseFloat(prompt("Digite o valor de c:"));

    // Calculando a soma de a e b
    let soma = a + b;

    // Imprimindo a soma
    console.log("A soma de a e b é: " + soma);

    // Verificando se a soma é maior que c
    if (soma > c) {
        console.log("A soma de a e b é maior que c.");
    } else {
        console.log("A soma de a e b não é maior que c.");
    }
}

// Chamando a função
verificarSoma();

