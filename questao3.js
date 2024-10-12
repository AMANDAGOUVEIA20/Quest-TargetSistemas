/*
QUESTÃO 3

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa,
na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a - Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b - Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média;
*/

const fs = require('fs');


const dados = JSON.parse(fs.readFileSync('faturamentomensal.json', 'utf-8'));

function calcularFaturamento(dados) {
  let menorValor = Number.MAX_VALUE;
  let maiorValor = Number.MIN_VALUE;
  let soma = 0;
  let diasComFaturamento = dados.faturamento.length;

  dados.faturamento.forEach(estado => {
    if (estado.valor > 0) {
      if (estado.valor < menorValor) {
        menorValor = estado.valor;
      }
      if (estado.valor > maiorValor) {
        maiorValor = estado.valor;
      }
      soma += estado.valor;
    }
  });

  const media = soma / diasComFaturamento;
  let diasAcimaDaMedia = 0;

  dados.faturamento.forEach(estado => {
    if (estado.valor > media) {
      diasAcimaDaMedia++;
    }
  });

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}

const resultado = calcularFaturamento(dados);

console.log(`O menor valor de faturamento ocorrido em um dia do mês: R$${resultado.menorValor}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: R$${resultado.maiorValor}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${resultado.diasAcimaDaMedia}`);
