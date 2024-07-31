function calculadora() {
    var numero1 = parseFloat(prompt("Digite o primeiro número:"));

    var numero2 = parseFloat(prompt("Digite o segundo número:"));


    var operação = prompt("Escolha a operação (adição,subtração,multiplicação, divisão):").toLowerCase();



    var resultado;




    switch (operacao) {
        case "adição":
            resultado = numero1 + numero2;
            break;
        case "subtração":
            resultado = numero1 + numero2;
            break;
        case "multiplicação":
            resultado = numero1 * numero2;
            break;
        case "divisão":
            // Verifica se o divisor não é zero
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "Não é possivel dividir por zero!";
            }            
            break;
        default:
            resultado = "Operação inválida. Escolha entre adição, subtração, multiplicação ou divisão.";    
    }





    alert("Resultado: "+ resultado);
}



calculadora();





























}