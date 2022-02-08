var nome = "Jhonatan";

var notaPrimeiroBimestre = 9;
var notaSegundoBimestre = 7;
var notaTerceiroBimestre = 4;
var notaQuartoBimestre = 2;

var notaSoma =
  notaPrimeiroBimestre +
  notaSegundoBimestre +
  notaTerceiroBimestre +
  notaQuartoBimestre;

var notaFinal = notaSoma / 4;

var notaFixada = notaFinal.toFixed(2);

console.log("Bem vindo, " + nome);
console.log("Nota final: " + notaFixada);

if (notaFixada > 7.0) {
  console.log("Você foi aprovado!");
} else {
  console.log("Você foi reprovado...");
}

//Isso é um comentário

//Revisão
//Variáveis, string, console.log, toFixed, operações matemáticas, concatenação

//Desafio 2. Alterar o estilo da página