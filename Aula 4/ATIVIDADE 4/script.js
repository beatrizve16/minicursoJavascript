



let A = parseFloat(prompt("Digite o lado A:"));
let B = parseFloat(prompt("Digite o lado B:"));
let C = parseFloat(prompt("Digite o lado C:"));

if (A >= B + C || B >= A + C || C >= A + B) {
    alert("Não forma um triângulo");
} else if (A * A === B * B + C * C || B * B === A * A + C * C || C * C === A * A + B * B) {
    alert("Triângulo Retângulo");
} else if (A === B && A === C && B === C) {
    alert("Triângulo Equilátero");
} else if (A === B || A === C || B === C) {
    alert("Triângulo Isósceles");
} else {
    alert("Triângulo Escaleno");
}

