const TOKENS = [
  [1, "while"],
  [2, "var"],
  [3, "to"],
  [4, "then"],
  [5, "string"],
  [6, "real"],
  [7, "read"],
  [8, "program"],
  [9, "procedure"],
  [10, "print"],
  [11, "nreal"],
  [12, "nint"],
  [13, "literal"],
  [14, "integer"],
  [15, "if"],
  [16, "ident"],
  [17, "for"],
  [18, "end"],
  [19, "else"],
  [20, "do"],
  [21, "const"],
  [22, "begin"],
  [23, "vstring"],
  [24, ">="],
  [25, ">"],
  [26, "="],
  [27, "<>"],
  [28, "<="],
  [29, "<"],
  [30, "+"],
  [31, ";"],
  [32, ":="],
  [33, ":"],
  [34, "/"],
  [35, "."],
  [36, ","],
  [37, "*"],
  [38, ")"],
  [39, "("],
  [40, "{"],
  [41, "}"],
  [42, "-"],
  [43, "$"],
  [44, "î"]
];

const lexemas = [];

// leitura dos arquivos
function readFile(file) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (event) {
    const content = event.target.result;
    const words = splitWords(content);
    const compare = compareWordsWithTokens(words, TOKENS);
    // Now 'content' contains the text from the file.
    displayTokens(compare);
    displayFileContent(words); // You can manipulate 'content' as needed.
  };
}

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  readFile(file);
});
// leitura dos arquivos

// Dividir o conteúdo em palavras usando uma expressao regular como separador
function splitWords(content) {
  const separatorRegex = /(;|\+|-|\*|\/|\[|\]|\{|\}|\\|"|<|>|'|'|\(|\)|=|\s)/g;

  const wordsWithSeparators = content.split(separatorRegex);

  // Filtrar os tokens vazios resultantes da divisão
  const words = wordsWithSeparators.filter(word => word.trim() !== '');
  console.log(words)
  return words;
}
// Dividir o conteúdo em palavras usando uma expressao regular como separador


function compareWordsWithTokens(WORDS, TOKENS) {
  const pilhaTokens = [];
  let linhaAtual = 1;
  let tokensComLinhas = [];
  let previousToken = null;

  for (let i = 0; i < WORDS.length; i++) {
    const word = WORDS[i];
    let foundToken = false;

    /*
    if (word.includes("\n\n")) {
      linhaAtual++;
      WORDS[i] = word.replace(/\n\n/g, ' ');
    }

    if (word.includes("\n")) {
      linhaAtual++;
      WORDS[i] = word.replace(/\n/g, ' ');
    }

    if (word.includes("\t")) {
      WORDS[i] = word.replace(/\t/g, ' ');
    } */

    for (let j = 0; j < TOKENS.length; j++) {
      const token = TOKENS[j][1];

      if (word === token) {
        pilhaTokens.push(TOKENS[j][0]);
        tokensComLinhas.push({
          token: TOKENS[j][0],
          linha: linhaAtual,
          wordToSearch: word,
        });

        if (word.includes(";")){
          linhaAtual++;
        }

        if (previousToken === 25 && TOKENS[j][0] === 29) {
          pilhaTokens.pop(); // Remove o último token adicionado (número 29)
          pilhaTokens.push(27); // Adiciona o token 27 (representando <>)
          tokensComLinhas.pop(); // Remove o último item adicionado
          tokensComLinhas.push({
            token: 27,
            linha: linhaAtual,
            wordToSearch: "<>"
          });
        }

        if (previousToken === 25 && TOKENS[j][0] === 26) {
          pilhaTokens.pop(); // Remove o último token adicionado (número 26)
          pilhaTokens.push(24); // Adiciona o token 24 (representando >=)
          tokensComLinhas.pop(); // Remove o último item adicionado
          tokensComLinhas.push({
            token: 24,
            linha: linhaAtual,
            wordToSearch: ">="
          });
        }

        if (previousToken === 29 && TOKENS[j][0] === 26) {
          pilhaTokens.pop(); // Remove o último token adicionado (número 26)
          pilhaTokens.push(28); // Adiciona o token 24 (representando <=)
          tokensComLinhas.pop(); // Remove o último item adicionado
          tokensComLinhas.push({
            token: 28,
            linha: linhaAtual,
            wordToSearch: "<="
          });
        }

        if (previousToken === 33 && TOKENS[j][0] === 26) {
          pilhaTokens.pop(); // Remove o último token adicionado (número 26)
          pilhaTokens.push(32); // Adiciona o token 24 (representando :=)
          tokensComLinhas.pop(); // Remove o último item adicionado
          tokensComLinhas.push({
            token: 32,
            linha: linhaAtual,
            wordToSearch: ":="
          });
        }

        previousToken = TOKENS[j][0];
        foundToken = true;
        break;
      }
    }

    if (!foundToken) {
      pilhaTokens.push(16);
      tokensComLinhas.push({
        token: 16,
        linha: linhaAtual,
        wordToSearch: word,
      });
      previousToken = 16;
    }
  }
  console.log(pilhaTokens);
  return tokensComLinhas;
}


function displayFileContent(words) {
  const fileContentElement = document.getElementById("file-content");
  fileContentElement.innerHTML = words.join("<br>");      
}


function displayTokens(tokens) {
  const tokensDiv = document.getElementById("tokens");
  tokensDiv.innerHTML = '';


  tokens.forEach(item => {
    const listItem = document.createElement('p');
    listItem.textContent = `Token: ${item.token} - Linha: ${item.linha} - Lexema: ${item.wordToSearch}`;
    tokensDiv.appendChild(listItem);
  });
};


