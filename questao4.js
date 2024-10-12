/*      
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação 
que cada estado teve dentro do valor total mensal da distribuidora.  
*/

const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('faturamentomensal.json', 'utf-8'));

function calcularPercentual(dados) {
  const faturamento = dados.faturamento;
  const valorTotal = faturamento.reduce((total, estado) => total + estado.valor, 0);

  console.log(`Faturamento Total: R$${valorTotal.toFixed(2)}`);

  faturamento.forEach(estado => {
    const percentual = (estado.valor / valorTotal) * 100;
    console.log(`O estado ${estado.estado} representa ${percentual.toFixed(2)}% do faturamento mensal.`);
  });
}

calcularPercentual(dados);
