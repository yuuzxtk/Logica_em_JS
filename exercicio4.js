function numProximos() {
    let a = parseInt(prompt("Digite um numero qualquer: "));
    let b = a + 1;
    let c = a - 1;
    console.log("O número digitado é: " + a);
    console.log("O número anterior é: " + c);
    console.log("O número posterior é: " + b);
}
numProximos();