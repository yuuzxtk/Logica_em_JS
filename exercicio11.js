function calcPreço(){
    let preço = parseFloat(prompt("Digite o valor do produto: "));
    let formadepagamento = parseInt(prompt("Digite a forma de pagamento: 1- À vista em dinheiro ou cheque, 2- À vista no cartão de crédito, 3- Em duas vezes, 4- Em três vezes"));
    if (formadepagamento == 1){
        let preço_final = preço - (preço * 0.15);
        console.log("O valor do produto com desconto é: " + preço_final);
}
else if (formadepagamento == 2){
    preço_final = preço - (preço * 0.1);
    console.log("O valor do produto com desconto é: " + preço_final);
}
else if (formadepagamento == 3){
    console.log("O valor do produto é: " + preço);
}
else if (formadepagamento == 4){
    preço_final = preço + (preço * 0.1);
    console.log("O valor do produto com juros é: " + preço_final);
}
else{
    console.log("Forma de pagamento inválida.");
}
}
calcPreço();