// Leia um valor inteiro N. Este valor será a quantidade 
// de valores inteiros X que serão lidos em seguida. Mostre
//  quantos destes valores X estão dentro do intervalo [10,20]
//  e quantos estão fora do intervalo, mostrando essas informações

let qtd = prompt("Digite a quantidade de números");
dentro = 0;
for (i=0; i<qtd; i++) {
    let num = prompt("Digite o número:");
    if (num > 10 && num < 20) {
        dentro++;
        }
}

alert("A quantidade de números dentro do intervalo é: " + dentro);
