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
  [29, ">"],
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
    console.log(compare);
    console.log(words); // You can manipulate 'content' as needed.
  };
}

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  readFile(file);
});
// leitura dos arquivos

// Dividir o conteúdo em palavras usando o espaço como separador
function splitWords(content) {
  const words = content.split(' ');
  return words;
}
// Dividir o conteúdo em palavras usando o espaço como separador


function compareWordsWithTokens(WORDS, TOKENS) {
  const pilhaTokens = [];

  for (let i = 0; i < WORDS.length; i++) {
    const wordToSearch = WORDS[i];
    for (let j = 0; j < TOKENS.length; j++) {
      const token = TOKENS[j][1]; // Obtenha a palavra do token em TOKENS
      if (wordToSearch === token) {
        pilhaTokens.push(TOKENS[j][0]); // Armazene a posição do token em pilhaTokens
        break; // Saia do loop interno assim que encontrar uma correspondência
      }
    }
  }

  return pilhaTokens
}

/*
function displayTokens(tokens) {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  for (const { value, line } of tokens) {
    if (value !== "INVALID") {
      const tokenElement = document.createElement("p");
      tokenElement.textContent = `Token: ${value} - Linha: ${line}`;
      outputElement.appendChild(tokenElement);
    }
  }
}


function displayLexemas(lexemas) {
  const lexemasElement = document.getElementById("lexemas");
  lexemasElement.innerHTML = "";

  for (const lexema of lexemas) {
    const lexemaElement = document.createElement("li");
    lexemaElement.textContent = lexema;
    lexemasElement.appendChild(lexemaElement);
  }
}

function displayFileContent(content) {
  const fileContentElement = document.getElementById("file-content");
  fileContentElement.textContent = content;
}
*/
