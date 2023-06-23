let indexTokens;
let pilhaProdLine = [];
let tokensIn = [];

function toAnalyze(identifiedTokens) {
  tokensIn = identifiedTokens.map(termoCode => termoCode[0]);
  indexTokens = tokensIn.length;

  for (let j = 0; j < producoes.length; j++) {
    if (tokensIn[0][0] === producoes[j][0]) {
      pilhaProdLine = producoes[j];
      break;
    }
  }

  console.log('Pilha ref: ', pilhaProdLine);
  console.log('Tokens: ', tokensIn[0]);

  while (pilhaProdLine.length !== 0) {
    if (pilhaProdLine.length === 0) {
      console.log('**** PILHAS VAZIAS !!! ****');
      break;
    } else if (tokensIn[0].length === 0) {
      tokensIn.shift();
    } else if (tokensIn[0][0] === pilhaProdLine[0]) {
      console.log('Comparação TOKEN/REF: ', tokensIn[0][0], ' ', pilhaProdLine[0]);
      console.log('Match ', tokensIn[0][0]);
      tokensIn[0].shift();
      pilhaProdLine.shift();

      console.log('pilha ref: ', pilhaProdLine);
      console.log('Tokens: ', tokensIn[0]);
    } else if (pilhaProdLine[0] > 53) {
      console.log('Comparação TOKEN/REF: ', tokensIn[0][0], ' ', pilhaProdLine[0]);
      shunt();
    } else {
      console.log('ERRO LÉXICO-> LINHA:', indexTokens - tokensIn.length + 1, 'TOKEN:', tokensIn[0][0], 'ESPERADO:', pilhaProdLine[0]);
      break;
    }
  }
}

function shunt() {
  console.log('TabParsing: ' + pilhaProdLine[0], ' ', tokensIn[0][0]);

  if (tabParsing[pilhaProdLine[0]][tokensIn[0][0]] === 0) {
    console.log('ERRO TabParsing');
  } else if (producoes[tabParsing[pilhaProdLine[0]][tokensIn[0][0]]][0] === 17) {
    console.log('--- Retorna NULO ---');
    pilhaProdLine.shift();
    console.log('pilha ref: ', pilhaProdLine);
    console.log('pilha tokens: ', tokensIn[0]);
  } else {
    console.log('ATUALIZAÇÃO!! nova pilha: ', producoes[tabParsing[pilhaProdLine[0]][tokensIn[0][0]]]);

    pilhaProdLine.splice(1, 0, ...producoes[tabParsing[pilhaProdLine[0]][tokensIn[0][0]]]);
    pilhaProdLine.shift();
    console.log('pilha ref: ', pilhaProdLine);
    console.log('pilha tokens: ', tokensIn[0]);
    console.log('Comparação TOKEN/REF: ', tokensIn[0][0], ' ', pilhaProdLine[0]);
  }
}
