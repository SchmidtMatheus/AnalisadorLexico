class AnaliseSemantica {
    constructor() {
        this.tabelaSimbolos = {};
    }

    // Adiciona um símbolo na tabela de símbolos (já verifica se naquele nível há o mesmo símbolo declarado)
    adicionarSimbolo(nome, categoria, tipo, nivel) {
        if (!(nome in this.tabelaSimbolos) || this.tabelaSimbolos[nome]['Nivel'] !== nivel) {
            this.tabelaSimbolos[nome] = {'Categoria': categoria, 'Tipo': tipo, 'Nivel': nivel};
        } else {
            console.log(`Símbolo '${nome}' já existe na tabela de símbolos.`);
        }
    }

    // Faz a remoção de um símbolo pelo seu nome.
    removerSimbolo(nome) {
        if (nome in this.tabelaSimbolos) {
            delete this.tabelaSimbolos[nome];
            console.log(`Símbolo '${nome}' removido da tabela de símbolos.`);
        } else {
            console.log(`Símbolo '${nome}' não encontrado na tabela de símbolos.`);
        }
    }

    // Imprime a tabela - Apenas para desenvolvimento
    visualizarTabela() {
        console.log("Tabela de Símbolos:");
        for (let nome in this.tabelaSimbolos) {
            const info = this.tabelaSimbolos[nome];
            console.log(`[${nome} | ${info['Categoria']} | ${info['Tipo']} | ${info['Nivel']}]`);
        }
    }

    removeSimbolosNivel(nivel) {
        const simbolosARemover = Object.keys(this.tabelaSimbolos).filter(nome => this.tabelaSimbolos[nome]['Nivel'] === nivel);
        for (let nome of simbolosARemover) {
            delete this.tabelaSimbolos[nome];
        }
        console.log(`Removidos todos os símbolos do nível ${nivel}.`);
    }

    verificarTiposOperacaoMatematica(operador, tipo1, tipo2) {
        if (tipo1 !== tipo2) {
            console.log(`Erro semântico: Tipos incompatíveis para a operação '${operador}'.`);
        }
        if(tipo1 == "string"|| tipo2 == "string"){
            console.log(`Erro semântico: String é incompátivel para a operação '${operador}'.`);
        }
    }
    
    obterTipoVariavel(nome) {
        if (nome in this.tabelaSimbolos) {
            return this.tabelaSimbolos[nome]['Tipo'];
        } else {
            console.log(`Variável '${nome}' não encontrada na tabela de símbolos.`);
            return null; // Ou lança uma exceção, dependendo da lógica do seu programa
        }
    }
}
