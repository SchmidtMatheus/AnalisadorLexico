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
  return words;
}
// Dividir o conteúdo em palavras usando uma expressao regular como separador


function compareWordsWithTokens(WORDS, TOKENS) {
  const pilhaTokens = [];
  let linhaAtual = 1;
  let tokensComLinhas = [];
  let previousToken = null;
  let inSingleQuotes = false;
  let inDoubleQuotes = false;
  let currentString = "";

  for (let i = 0; i < WORDS.length; i++) {
    const word = WORDS[i];
    let foundToken = false;

    // Check for single-quoted string
    if (word.includes("'")) {
      if (!inSingleQuotes) {
        inSingleQuotes = true;
        currentString += word;
        pilhaTokens.pop();
        tokensComLinhas.pop();
      } else {
        inSingleQuotes = false;
        currentString += word;
        pilhaTokens.push(23); // Token for vstring
        tokensComLinhas.push({
          token: 23,
          linha: linhaAtual,
          wordToSearch: currentString,
        });
        currentString = "";
        foundToken = true;
      }
    }

    // Check for double-quoted string
    if (word.includes('"')) {
      if (!inDoubleQuotes) {
        inDoubleQuotes = true;
        currentString += word;
        pilhaTokens.pop();
        tokensComLinhas.pop();
      } else {
        inDoubleQuotes = false;
        currentString += word;
        pilhaTokens.push(13); // Token for literal
        tokensComLinhas.push({
          token: 13,
          linha: linhaAtual,
          wordToSearch: currentString,
        });
        currentString = "";
        foundToken = true;
      }
    }

    if (inSingleQuotes || inDoubleQuotes) {
      currentString += word;
      continue;
    }

    // Check for other tokens
    for (let j = 0; j < TOKENS.length; j++) {
      const token = TOKENS[j][1];

      if (word === token) {
        pilhaTokens.push(TOKENS[j][0]);
        tokensComLinhas.push({
          token: TOKENS[j][0],
          linha: linhaAtual,
          wordToSearch: word,
        });

        if (word.includes(";")) {
          linhaAtual++;
        }

        // ... (existing code for handling special cases)

        previousToken = TOKENS[j][0];
        foundToken = true;
        break;
      }
    }

    // Handle non-token words
    if (!foundToken && !inSingleQuotes && !inDoubleQuotes) {
      if (/^\d{1,2}$/.test(word) && parseInt(word) >= 0 && parseInt(word) <= 100) {
        pilhaTokens.push(12); // Token for números inteiros (nint)
        tokensComLinhas.push({
          token: 12,
          linha: linhaAtual,
          wordToSearch: word,
        });
        previousToken = 12;
      } else if (/^\d+\.\d{1,2}$/.test(word) && parseFloat(word) >= 0 && parseFloat(word) <= 100) {
        pilhaTokens.push(11); // Token for números reais (nreal)
        tokensComLinhas.push({
          token: 11,
          linha: linhaAtual,
          wordToSearch: word,
        });
        previousToken = 11;
      } else {
        pilhaTokens.push(16);
        tokensComLinhas.push({
          token: 16,
          linha: linhaAtual,
          wordToSearch: word,
        });
        previousToken = 16;
      }
    }
  }

  console.log("Pilha gerada: ", pilhaTokens);
  sintatico(pilhaTokens);
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


