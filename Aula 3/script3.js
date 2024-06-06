// Ler um número inteiro N e calcular todos os seus divisores.
let num = prompt("Digite um número");

for (i=0; i<num; i++) {
    if (i%num==0) {
        alert("Divisores:" + i);
        }
}

