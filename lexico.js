const TOKENS = [
  [0, "write"],
  [1, "while"],
  [2, "until"],
  [3, "to"],
  [4, "then"],
  [5, "string"],
  [6, "repeat"],
  [7, "real"],
  [8, "read"],
  [9, "program"],
  [10, "procedure"],
  [11, "or"],
  [12, "of"],
  [13, "literal"],
  [14, "integer"],
  [15, "if"],
  [16, "identificador"],
  [17, "î"],
  [18, "for"],
  [19, "end"],
  [20, "else"],
  [21, "do"],
  [22, "declaravariaveis"],
  [23, "const"],
  [24, "char"],
  [25, "chamaprocedure"],
  [26, "begin"],
  [27, "array"],
  [28, "and"],
  [29, ">="],
  [30, ">"],
  [31, "="],
  [32, "<>"],
  [33, "<="],
  [34, "<"],
  [35, "+"],
  [36, "numreal"],
  [37, "numinteiro"],
  [38, "nomestring"],
  [39, "nomechar"],
  [40, "]"],
  [41, "["],
  [42, ";"],
  [43, ":"],
  [44, "/"],
  [45, ".."],
  [46, "."],
  [47, ","],
  [48, "*"],
  [49, ")"],
  [50, "("],
  [51, "$"],
  [52, "-"]
];


const identifiedTokens = [];

function readFile(file) {
  identifiedTokens.length = 0;
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
        const [tokenID, tokenValue] = TOKENS[j];
        if (remainingCode.startsWith(tokenValue)) {
          matchedToken = { tokenID, value: tokenValue };
          break;
        }
      }

      if (matchedToken) {
        const { tokenID, value } = matchedToken;
        const token = {
          position,
          value,
          line: lineNumber,
        };
        tokens.push(token);
        lexemas.push(value);
        identifiedTokens.push(tokenID);
        remainingCode = remainingCode.slice(value.length);
        position += value.length;
      } else {
        let delimiterFound = false;

        for (let j = 0; j < TOKENS.length; j++) {
          const [tokenID, tokenValue] = TOKENS[j];
          if (remainingCode.startsWith(tokenValue[0])) {
            const nextToken = getNextToken(remainingCode, TOKENS.slice(j));
            if (nextToken) {
              matchedToken = { tokenID, value: nextToken };
              delimiterFound = true;
              break;
            }
          }
        }

        if (delimiterFound) {
          const { tokenID, value } = matchedToken;
          const token = {
            tokenID,
            value,
            line: lineNumber,
          };
          tokens.push(token);
          lexemas.push(value);
          remainingCode = remainingCode.slice(value.length);
          tokenID += value.length;
        } else {
          const nextChar = remainingCode[0];
          if (nextChar.match(/\s/)) {
            remainingCode = remainingCode.slice(1);
            position++;
          } else {
            const invalidTokenMatch = remainingCode.match(/^\S+/);
            const invalidToken = invalidTokenMatch ? invalidTokenMatch[0] : "";
            const token = {
              value: "INVALID",
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
  console.log(identifiedTokens);
  toAnalyze(identifiedTokens);
  return { tokens, lexemas };
}

function getNextToken(remainingCode, tokenList) {
  for (let i = 0; i < tokenList.length; i++) {
    const [tokenValue] = tokenList[i];
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

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  readFile(file);
});