function tabuada(){
    let a = parseInt(prompt("Digite um número para ver a tabuada: "));
    let b = 1;
    while(b <= 10){
        console.log(a + " x " + b + " = " + a * b);
        b++;
    }
}
tabuada();