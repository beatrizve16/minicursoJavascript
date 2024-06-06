let impares=0 
let pares =0

do{
    let num = prompt("Digite um numero (-1 para sair)")
    
    if (num%2==0){
        pares++
    } else if (num%2!=0){
        impares++
    }

} while(num !=-1)

alert("Quantidade de pares"+pares)
alert("Quantidade de impares"+impares)
