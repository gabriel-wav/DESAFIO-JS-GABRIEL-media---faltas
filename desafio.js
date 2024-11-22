let prompt = require ("prompt-sync")(); //importando biblioteca


let nome_aluno = prompt("Digite nome do aluno: "); // entrada de dados
let nota1 = prompt("Digite nota 1 do aluno: ");
let nota2 = prompt("Digite nota 2 do aluno: ");
let nota3 = prompt("Digite nota 3 do aluno: ");
let faltas = prompt("Digite porcentagem de faltas: ");

nota1 = Number(nota1); //convertendo variavel em number
nota2 = Number(nota2);
nota3 = Number(nota3);
faltas = Number(faltas);

// Somar as notas
let soma = nota1 + nota2 + nota3;

// Calcular a média
let media = soma / 3;

console.log("Soma das notas: ", soma);
console.log("Média das notas: ", media.toFixed(2));
console.log("Porcentagem de faltas: ", faltas); //exibir soma, média e faltas

if (media >= 7 && faltas < 25 ) //saída de dados
{
    console.log("ALUNO APROVADO");
}

else if (media >= 5 && media < 7 && faltas < 25 ) 
{
    console.log("ALUNO EM RECUPERAÇÃO");
}

else if (media < 5 || faltas >= 25) 
{
    console.log("ALUNO REPROVADO");
}




