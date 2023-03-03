const nota1 = parse(prompt("Digite sua primeira nota:"));
const nota2 = parseFloat(prompt("Digite sua segunda nota:"));
const nota3 = parseFloat(prompt("Digite sua terceira nota:"));

const calculo = (nota1+nota2+nota3)/3

console.log("sua nota é:",calculo)

if(calculo >= 5){
    console.log("Você foi aprovado, A")
}
else if(calculo < 4.9 && calculo >=3 ){
    console.log("Você foi aprovado, B")
}
else(calculo < 2.9 && calculo >0 ){
    console.log("Você foi aprovado, B")  
}