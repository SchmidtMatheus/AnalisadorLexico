const TOKENS = [
  [1, "WRITE", "write"],
  [2, "WHILE", "while"],
  [3, "VARIABLE", "variavel"],
  [4, "UNTIL", "until"],
  [5, "TO", "to"],
  [6, "THEN", "then"],
  [7, "STRING", "string"],
  [8, "REPEAT", "repeat"],
  [9, "REAL", "real"],
  [10, "READ", "read"],
  [11, "PROGRAM", "program"],
  [12, "PROCEDURE", "procedure"],
  [13, "OR", "or"],
  [14, "OF", "of"],
  [15, "NOME_PROCEDURE", "nomeprocedure"],
  [16, "LITERAL", "literal"],
  [17, "INTEGER", "integer"],
  [18, "IF", "if"],
  [19, "Î", "î"],
  [20, "FOR", "for"],
  [21, "END", "end"],
  [22, "ELSE", "else"],
  [23, "DO", "do"],
  [24, "DECLARA_VARIAVEIS", "declaravariaveis"],
  [25, "CONST", "const"],
  [26, "CHAR", "char"],
  [27, "CHAMA_PROCEDURE", "chamaprocedure"],
  [28, "BEGIN", "begin"],
  [29, "ARRAY", "array"],
  [30, "AND", "and"],
  [31, "GREATER_EQUAL", ">="],
  [32, "GREATER", ">"],
  [33, "EQUAL", "="],
  [34, "NOT_EQUAL", "<>"],
  [35, "LESS_EQUAL", "<="],
  [36, "LESS", "<"],
  [37, "ADD", "+"],
  [38, "REAL_NUMBER", "_numreal"],
  [39, "INTEGER_NUMBER", "_numinteiro"],
  [40, "VARIABLE_NAME", "_nomevariavel"],
  [41, "STRING_NAME", "_nomestring"],
  [42, "PROGRAM_NAME", "_nomeprograma"],
  [43, "PROCEDURE_NAME", "_nomeprocedure"],
  [44, "CHAR_NAME", "_nomechar"],
  [45, "RBRACKET", "]"],
  [46, "LBRACKET", "["],
  [47, "SEMICOLON", ";"],
  [48, "COLON", ":"],
  [49, "SLASH", "/"],
  [50, "RANGE", ".."],
  [51, "DOT", "."],
  [52, "COMMA", ","],
  [53, "MULTIPLY", "*"],
  [54, "RPAREN", ")"],
  [55, "LPAREN", "("],
  [56, "DOLLAR", "$"],
  [57, "SUBTRACT", "-"],
];

function readFile(file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const content = event.target.result;
    const { tokens, lexemas } = tokenize(content);
    displayTokens(tokens);
    displayLexemas(lexemas);
    displayFileContent(content);
  };
  reader.readAsText(file);
}

function tokenize(code) {
  const tokens = [];
  const lexemas = [];

  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("##")) {
      // Ignore entire line as a comment
      continue;
    }

    let remainingCode = removeBlockComments(line);

    let lineNumber = i + 1;
    let position = 0;

    while (remainingCode.length > 0) {
      let matchedToken = null;

      for (let j = 0; j < TOKENS.length; j++) {
        const [, tokenName, tokenValue] = TOKENS[j];
        if (remainingCode.startsWith(tokenValue)) {
          matchedToken = { position, name: tokenName, value: tokenValue };
          break;
        }
      }

      if (matchedToken) {
        const { name, value } = matchedToken;
        const token = {
          position,
          name,
          value,
          line: lineNumber,
        };
        tokens.push(token);
        lexemas.push(value);
        remainingCode = remainingCode.slice(value.length);
        position += value.length;
      } else {
        let delimiterFound = false;

        for (let j = 0; j < TOKENS.length; j++) {
          const [, tokenName, tokenValue] = TOKENS[j];
          if (remainingCode.startsWith(tokenValue[0])) {
            const nextToken = getNextToken(remainingCode, TOKENS.slice(j));
            if (nextToken) {
              matchedToken = { position, name: tokenName, value: nextToken };
              delimiterFound = true;
              break;
            }
          }
        }

        if (delimiterFound) {
          const { name, value } = matchedToken;
          const token = {
            position,
            name,
            value,
            line: lineNumber,
          };
          tokens.push(token);
          lexemas.push(value);
          remainingCode = remainingCode.slice(value.length);
          position += value.length;
        } else {
          const nextChar = remainingCode[0];
          if (nextChar.match(/\s/)) {
            remainingCode = remainingCode.slice(1);
            position++;
          } else {
            const invalidTokenMatch = remainingCode.match(/^\S+/);
            const invalidToken = invalidTokenMatch ? invalidTokenMatch[0] : "";
            const token = {
              position,
              name: "INVALID",
              value: invalidToken,
              line: lineNumber,
            };
            tokens.push(token);
            lexemas.push(invalidToken);
            remainingCode = remainingCode.slice(invalidToken.length);
            position += invalidToken.length;
          }
        }
      }
    }
  }

  return { tokens, lexemas };
}

function getNextToken(remainingCode, tokenList) {
  for (let i = 0; i < tokenList.length; i++) {
    const [, , tokenValue] = tokenList[i];
    if (remainingCode.startsWith(tokenValue)) {
      return tokenValue;
    }
  }
  return null;
}



function getTokenPosition(value) {
  for (let i = 0; i < TOKENS.length; i++) {
    if (TOKENS[i][2] === value) {
      return TOKENS[i][0];
    }
  }
  return -1;
}

function removeBlockComments(line) {
  const blockCommentStart = "#*";
  const blockCommentEnd = "*#";
  let remainingLine = line;
  let index = 0;

  while (index < remainingLine.length) {
    const startCommentIndex = remainingLine.indexOf(blockCommentStart, index);
    if (startCommentIndex === -1) {
      break;
    }

    const endCommentIndex = remainingLine.indexOf(blockCommentEnd, startCommentIndex + blockCommentStart.length);
    if (endCommentIndex === -1) {
      // If end comment tag is not found, remove the rest of the line
      remainingLine = remainingLine.slice(0, startCommentIndex);
      break;
    }

    remainingLine =
      remainingLine.slice(0, startCommentIndex) +
      remainingLine.slice(endCommentIndex + blockCommentEnd.length);
    index = startCommentIndex; // Update the index to the position after the removed block comment
  }

  return remainingLine;
}

function displayTokens(tokens) {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  for (const { name, value, line } of tokens) {
    if (name !== "INVALID") {
      const tokenElement = document.createElement("p");
      tokenElement.textContent = `Token: (${name}, ${value}) - Linha: ${line}`;
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

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  readFile(file);
});
