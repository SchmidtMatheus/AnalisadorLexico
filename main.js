const TOKENS = [
  [1, "VAR", "var"],
  [2, "IDENTIFIER", /^[a-zA-Z_][a-zA-Z0-9_]*$/],
  [3, "EQUALS", "="],
  [4, "NUMBER", "\\d+"],
  [5, "PLUS", "\\+"],
  [6, "SEMICOLON", ";"],
  [7, "PRINT", "print"],
  [8, "LPAREN", "\\("],
  [9, "RPAREN", "\\)"],
  [10, "WRITE", "write"],
  [11, "WHILE", "while"],
  [12, "VARIABLE", "variavel"],
  [13, "UNTIL", "until"],
  [14, "TO", "to"],
  [15, "THEN", "then"],
  [16, "STRING", "string"],
  [17, "REPEAT", "repeat"],
  [18, "REAL", "real"],
  [19, "READ", "read"],
  [20, "PROGRAM", "program"],
  [21, "PROCEDURE", "procedure"],
  [22, "OR", "or"],
  [23, "OF", "of"],
  [24, "NOME_PROCEDURE", "nomeprocedure"],
  [25, "LITERAL", "literal"],
  [26, "INTEGER", "integer"],
  [27, "IF", "if"],
  [28, "FOR", "for"],
  [29, "END", "end"],
  [30, "ELSE", "else"],
  [31, "DO", "do"],
  [32, "DECLARA_VARIAVEIS", "declaravariaveis"],
  [33, "CONST", "const"],
  [34, "CHAR", "char"],
  [35, "CHAMA_PROCEDURE", "chamaprocedure"],
  [36, "BEGIN", "begin"],
  [37, "ARRAY", "array"],
  [38, "AND", "and"],
  [39, "GREATER_EQUAL", ">="],
  [40, "GREATER", ">"],
  [41, "EQUAL", "="],
  [42, "NOT_EQUAL", "<>"],
  [43, "LESS_EQUAL", "<="],
  [44, "LESS", "<"],
  [45, "ADD", "+"],
  [46, "REAL_NUMBER", "_numreal"],
  [47, "INTEGER_NUMBER", "_numinteiro"],
  [48, "VARIABLE_NAME", "_nomevariavel"],
  [49, "STRING_NAME", "_nomestring"],
  [50, "PROGRAM_NAME", "_nomeprograma"],
  [51, "PROCEDURE_NAME", "_nomeprocedure"],
  [52, "CHAR_NAME", "_nomechar"],
  [53, "RBRACKET", "]"],
  [54, "LBRACKET", "["],
  [55, "SEMICOLON", ";"],
  [56, "COLON", ":"],
  [57, "SLASH", "/"],
  [58, "RANGE", ".."],
  [59, "DOT", "."],
  [60, "COMMA", ","],
  [61, "MULTIPLY", "*"],
  [62, "RPAREN", ")"],
  [63, "LPAREN", "("],
  [64, "DOLLAR", "$"],
  [65, "HASH", "#"],
  [66, "SUBTRACT", "-"]
];


  const DELIMITERS = TOKENS
  .filter(([tokenName]) => tokenName !== "IDENTIFIER")
  .map(([, pattern]) => pattern)
  .join("|");
  
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
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  
  function tokenize(code) {
    const tokens = [];
    const lexemas = [];
  
    const lines = code.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      let remainingCode = line;
  
      let lineNumber = i + 1;
      let position = 0;
  
      while (remainingCode.length > 0) {
        let matchedToken = null;
  
        for (const [tokenPosition, tokenName, pattern] of TOKENS) {
          if (typeof pattern === "string") {
            if (remainingCode.startsWith(pattern)) {
              matchedToken = { position, name: tokenName, value: pattern };
              break;
            }
          } else if (pattern instanceof RegExp) {
            const regexMatch = remainingCode.match(pattern);
            if (regexMatch && regexMatch.index === 0) {
              matchedToken = { position, name: tokenName, value: regexMatch[0] };
              break;
            }
          }
        }
  
        if (!matchedToken) {
          let nextDelimiterMatch = remainingCode.match(new RegExp(`^(${DELIMITERS})`));
          let nextDelimiter = nextDelimiterMatch ? nextDelimiterMatch[0] : "";
  
          if (nextDelimiter.length === 0) {
            const nextWordMatch = remainingCode.match(/^(\w+)/);
            const nextWord = nextWordMatch ? nextWordMatch[1] : "";
            if (nextWord.length > 0) {
              matchedToken = { position, name: "IDENTIFIER", value: nextWord };
              nextDelimiter = nextWord;
            }
          }
  
          if (nextDelimiter.length > 0) {
            const tokenPosition = getTokenPosition(nextDelimiter);
            if (tokenPosition !== -1) {
              const [, tokenName] = TOKENS[tokenPosition];
              matchedToken = { position, name: tokenName, value: nextDelimiter };
            }
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
          remainingCode = remainingCode.slice(value.length).trim();
          position += value.length;
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
          remainingCode = remainingCode.slice(invalidToken.length).trim();
          position += invalidToken.length;
        }
      }
    }
  
    return { tokens, lexemas };
  }
  
  function getTokenPosition(value) {
    for (let i = 0; i < TOKENS.length; i++) {
      const [, , pattern] = TOKENS[i];
      if (typeof pattern === "string" && pattern === value) {
        return i;
      } else if (pattern instanceof RegExp && pattern.test(value)) {
        return i;
      }
    }
    return -1;
  }
  
  function displayTokens(tokens) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "";
  
    for (const { name, value, line } of tokens) {
      if (name !== "IDENTIFIER") {
        const tokenPosition = getTokenPosition(name);
        const tokenElement = document.createElement("p");
        tokenElement.textContent = `Token: (${name}, ${value}) - Posição: ${tokenPosition} - Linha: ${line}`;
        outputElement.appendChild(tokenElement);
      }
    }
  }
  
  function getTokenPosition(tokenName) {
    for (let i = 0; i < TOKENS.length; i++) {
      if (TOKENS[i][1] === tokenName) {
        return i+1;
      }
    }
    return -1;
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