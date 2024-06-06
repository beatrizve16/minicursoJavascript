// Se a temperatura desceu do 1º para o 2º dia, mas subiu ou permaneceu constante do 2º para o 3º, as pessoas ficam felizes (primeira figura).
// Se a temperatura subiu do 1º para o 2º dia, mas desceu ou permaneceu constante do 2º para o 3º, as pessoas ficam tristes (segunda figura).
// Se a temperatura subiu do 1º para o 2º dia e do 2º para o 3º, mas subiu do 2º para o 3º menos do que subira do 1º para o 2º, as pessoas ficam tristes (terceira figura).
// Se a temperatura subiu do 1º para o 2º dia e do 2º para o 3º, mas subiu do 2º para o 3º no mínimo o tanto que subira do 1º para o 2º, as pessoas ficam felizes (quarta figura).
// Se a temperatura desceu do 1º para o 2º dia e do 2º para o 3º, mas desceu do 2º para o 3º menos do que descera do 1º para o 2º, as pessoas ficam felizes (quinta figura).
// Se a temperatura desceu do 1º para o 2º dia e do 2º para o 3º, mas desceu do 2º para o 3º no mínimo o tanto que descera do 1º para o 2º, as pessoas ficam tristes (sexta figura).
// Se a temperatura permaneceu constante do 1º para o 2º dia, as pessoas ficam felizes se subiu do 2º para o 3º dia ou tristes caso contrário (respectivamente, sétima e oitava figuras).

let t1 = prompt("digite a temperatura 1")
let t2 = prompt("digite a temperatura 2")
let t3 = prompt("digite a temperatura 3")


if (t1 > t2 && t2 < t3 || t1 > t2 && t2 == t3) {
    alert(":)")
}


else if (t1 < t2 && t2 > t3 || t1 < t2 && t2 == t3) {
    alert(":(")


} else if (t1 < t2 && t2 < t3 && t3 - t2 < t2 - t1) {
    alert(":(")

} else if (t1 < t2 && t2 < t3 && t2 - t1 < t3 - t2) {
    alert(":)")


} else if (t1 < t2 && t2 > t3 || t1 < t2 && t2 == t3) {
alert(":(")


} else if (t1 == t2) {
    if (t2 < t3) {
        alert(":)")

    } else if (t2 > t3) {
        alert(":(")

    }
}



