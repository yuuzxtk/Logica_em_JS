function ajustepreço(){
    let preço = parseFloat(prompt("Digite o valor do produto: "));
    let preço_ajuste = preço + (preço * 0.15);
    console.log("O valor do produto com ajuste é: " + preço_ajuste);
}
ajustepreço();