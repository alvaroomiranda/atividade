var valor1 = parseInt(prompt("Digite o primeiro número:"));
var valor2 = parseInt(prompt("Digite o segundo número:"));
var valor3 = parseInt(prompt("Digite o terceiro número:"));
var valor4 = parseInt(prompt("Digite o quarto número:"));
var valor5 = parseInt(prompt("Digite o quinto número:"));

if ( valor1 > valor2 > valor3 > valor4 > valor5){
    alert( "O maior número é: " + valor1 + " e o menor é: " + valor3);
  } else if ( valor1 > valor3 > valor2){
    alert( "O maior número é: " + valor1 + " e o menor é: " + valor2);
  } else if ( valor2 > valor1 > valor3){
    alert( "O maior número é: " + valor2 + " e o menor é: " + valor3);
  } else if ( valor2 > valor3 > valor1){
    alert( "O maior número é: " + valor2 + " e o menor é: " + valor1);
  } else if ( valor3 > valor1 > valor2){
    alert( "O maior número é: " + valor3 + " e o menor é: " + valor2);
  } else if ( valor3 > valor2 > valor1){
    alert( "O maior número é: " + valor3 + " e o menor é: " + valor1);
  }

maiorValor(valor1, valor2, valor3);