let tokens = [8,16,31,16,26,12,31,16,26,12,31,21,16,26];
let pilha = [43]; // $ topo da pilha - gramatica

pilha = producoes[1].concat(pilha);
pilha = pilha.filter(item => item !== 0);

console.log(pilha);

let X = pilha[0];
let a = tokens[0];

while (X !== 43) { // enquanto pilha não estiver vazia
    console.log(X);
    console.log(a);
    console.log(pilha);
    
    if (X === 44) { // se o topo da pilha for vazio
        pilha.shift();
        X = pilha[0];
    } else {
        if (X <= 44) { // topo da pilha é um terminal
            if (X === a) { // deu match
                pilha.shift();
                tokens.shift();
                X = pilha[0];
                
                if (tokens.length !== 0) {
                    a = tokens[0];
                }
            } else {
                console.log('Error');
                break;
            }
        } else {
            let topo = producoes[parseInt(tabParsing[X][a])].concat(pilha); // empilha as producoes correspondentes
            
            if (topo[0] === 44) { // se topo vazio X recebe o novo topo da pilha
                X = topo[0];
            } else {
                if (topo[0] !== 44) { // se topo não vazio atualiza a pilha
                    pilha.shift();
                    pilha = producoes[parseInt(tabParsing[X][a])].concat(pilha);
                    pilha = pilha.filter(item => item !== 0);
                    X = pilha[0];
                } else {
                    console.log('Error');
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