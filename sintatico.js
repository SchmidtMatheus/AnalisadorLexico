function sintatico(pilhaTokens){

    // 8,16,31,21,16,26,12,31,21,16,26,12,31,2,16,33,14,31,9,16,39,16,33,14,38,31,22,10,40,13,41,31,18,31,22,18,35
    // 8,16,31,21,16,26,12,31,21,16,26,12,31,2,16,33,14,31,9,16,39,16,33,14,38,31,22,10,40,13,41,31,18,31,22,16,39,12,38,31,18,35
    // 8,16,31,2,16,33,14,31,22,18,35

    const tokens = [8,16,31,21,16,26,12,31,21,16,26,12,31,2,16,33,14,31,9,16,39,16,33,14,38,31,22,10,40,13,41,31,18,31,22,16,39,12,38,31,18,35]
    let pilha = [43]; // $ topo da pilha - gramatica
    
    pilha = producoes[1].concat(pilha);
    pilha = pilha.filter(item => item !== 0);
    
    let X = pilha[0];
    let a = pilhaTokens[0];
    let nivel = 0;
    let varZone = false;
    let procedureZone = false;
    let constZone = false;
    let cont = 1;
    let tokensIdents = {}
    let analiseSemantica = new AnaliseSemantica();
    
    while (X !== 43) { // enquanto pilha não estiver vazia
        console.log("Produções",pilha);
        console.log("Pilha de comparação: ",X);
        console.log("Pilha de entrada: ",a);
        
        if (X === 44) { // se o topo da pilha for vazio
            pilha.shift();
            X = pilha[0];
        } else {
            if (X <= 44) { // topo da pilha é um terminal
                if (X === a) { // deu match

            if (a === 2) {
                varZone = true; 
            }
            if (varZone && (a === 22 || a === 9)) {
                varZone = false;
            }

            if (a === 9) {
                procedureZone = true;
                nivel = 1; 
            }

            if (procedureZone && a === 39) {
                procedureZone = false;
            }

            if (a === 21) {
                constZone = true;
            }

            if (constZone && a === 31) {
                constZone = false;
            }

            if (varZone && a === 16) {
                const nomeIdent = tokensIdents[cont];
                let categoria = '';

                if (constZone) {
                    categoria = 'constante';
                } else if (procedureZone) {
                    categoria = 'procedure';
                } else if (varZone) {
                    categoria = 'variavel';
                }

                analiseSemantica.adicionarSimbolo(nomeIdent, categoria, '', nivel);
                cont += 1;
                analiseSemantica.visualizarTabela();
                analiseSemantica.verificarTiposOperacaoMatematica();
                
            }

                    pilha.shift();
                    pilhaTokens.shift();
                    X = pilha[0];
                    console.log(pilhaTokens)
                    if (pilhaTokens.length !== 0) {
                        a = pilhaTokens[0];
                    }
                } else {
                    console.log('Mismatch Error');
                    break;
                }
            } else {
                if (tabParsing[X][a]!== 0) { // se existe uma produção
                    console.log('producao: ' + tabParsing[X][a]);
                    pilha.shift();
                    pilha = producoes[tabParsing[X][a]].concat(pilha);
                    pilha = pilha.filter(item => item !== 0);
                    X = pilha[0];
                } else {
                    console.log('Error: No Production');
                    break;
                }
            }
        }
    }
    
    console.log('Pilha: ');
    console.log(pilha);
    console.log('Entrada: ');
    console.log(pilhaTokens);
}