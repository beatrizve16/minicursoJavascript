
// // Com base na tabela ao lado, escreva um programa que 
// leia o código de um item e a quantidade deste item. A 
// seguir, calcule e mostre o valor da conta a pagar.
// // Entrada Os dados de entrada contém dois valores 
// inteiros correspondentes ao código e à quantidade de
//  um item conforme tabela acima.
// // Saída O valor de saída deve conter a mensagem 
// "Total: R$ " seguido pelo valor a ser pago.

let codigo = prompt("código:")
let qtd = prompt("quantidade:")

let preco 

if (codigo == 1) {
    preco = 4.00
} else if (codigo == 2) {  
    preco = 4.50
} else if (codigo == 3) {
    preco = 5.00
} else if (codigo == 4) {
    preco = 2.00
} else if (codigo == 5) {
    preco = 1.50
} else {
    alert("Código inválido!")
}

let total = preco * qtd

alert("Total: R$" + total)