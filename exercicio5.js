function calcSalario() {
    let salariomin = 1293.20;
    let salario = parseFloat(prompt("Digite o valor do salário: "));
    let salarios = salario / salariomin;
    console.log("você recebe " + salarios.toFixed(2) + " salários mínimos.");
}
calcSalario();