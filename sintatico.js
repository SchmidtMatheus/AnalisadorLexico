 
  let pilha = [43]; // Topo da pilha
  let aux = 0;
  
  pilha = [producoes[0], pilha];
  pilha = pilha.filter(item => item !== 0); // Remove os zero da tabela de producoes
  
  let X = pilha[0];
  let a = tokens[0];
  let tokens = [8,16,31,16,26,12,31,16,26,12,31,21,16,26];
  
  while (X !== 43) { // Enquanto a pilha não estiver vazia
    console.log(pilha);
    console.log(X);
    console.log(a);
  
    aux++;
  
    if (X === 44) { // Se o topo da pilha for vazio
        pilha.shift();
        X = pilha[0];
    } else {
        if (X <= 44) { // Topo da pilha é um terminal
            if (X === a) { // Deu match :D
                pilha.shift();
                tokens.shift();
                X = pilha[0];
                if (tokens.length !== 0) {
                    a = tokens[0];
                }
            } else {
                console.log('Erro Sintático na Linha: '); // + linhatoken[aux-1]
                break;
            }
        } else { // Topo da pilha é um não terminal
            let topo = [producoes[tabParsing[X][a] - 1], pilha]; // Empilha as produções correspondentes
            if (topo[0] === 44) { // Se topo vazio, X recebe o novo topo da pilha
                aux--;
                X = topo[0];
            } else {
                if (topo[0] !== 44) { // Se topo não vazio, atualiza a pilha
                    pilha.shift();
                    pilha = [producoes[tabParsing[X][a]],pilha]; //empilha as producoes
                    pilha = pilha.filter(item => item !== 0);
                    X = pilha[0];
                } else {
                    console.log('Erro Sintático na Linha: '); // + linhatoken[aux-1]
                    break;
                }
            }
        }
    }
  }
  
  console.log('Pilha: ');
  console.log(pilha);
  console.log('Entrada: ');
  console.log(tokens);