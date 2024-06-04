// Uma operadora de telefonia cobra R$ 50.00 
// por um plano básico que dá direito a 100 
// minutos de telefone. Cada minuto que exceder
//  a franquia de 100 minutos custa R$ 2.00. Fazer
//   um programa para ler a quantidade de minutos
//    que uma pessoa consumiu, daí mostrar o valor
//     a ser pago.


let num = prompt("digite a quantidade de minutos")
let preco = 50

if (num <=100) {
    alert("Valor a pagar: $" + preco); }
else if ( num > 100) {
    preco = (num - 50)*2
    alert("Valor a pagar: $" + preco); }
