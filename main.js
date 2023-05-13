const TOKENS = [
    ["VAR", "var"],
    ["IDENTIFIER", /^[a-zA-Z_]\W*$/],
    ["EQUALS", "="],
    ["NUMBER", "\\d+"],
    ["PLUS", "\\+"],
    ["SEMICOLON", ";"],
    ["PRINT", "print"],
    ["LPAREN", "\\("],
    ["RPAREN", "\\)"],
    ["WRITE", "write"],
    ["WHILE", "while"],
    ["VARIABLE", "variavel"],
    ["UNTIL", "until"],
    ["TO", "to"],
    ["THEN", "then"],
    ["STRING", "string"],
    ["REPEAT", "repeat"],
    ["REAL", "real"],
    ["READ", "read"],
    ["PROGRAM", "program"],
    ["PROCEDURE", "procedure"],
    ["OR", "or"],
    ["OF", "of"],
    ["NOME_PROCEDURE", "nomeprocedure"],
    ["LITERAL", "literal"],
    ["INTEGER", "integer"],
    ["IF", "if"],
    ["FOR", "for"],
    ["END", "end"],
    ["ELSE", "else"],
    ["DO", "do"],
    ["DECLARA_VARIAVEIS", "declaravariaveis"],
    ["CONST", "const"],
    ["CHAR", "char"],
    ["CHAMA_PROCEDURE", "chamaprocedure"],
    ["BEGIN", "begin"],
    ["ARRAY", "array"],
    ["AND", "and"],
    ["GREATER_EQUAL", ">="],
    ["GREATER", ">"],
    ["EQUAL", "="],
    ["NOT_EQUAL", "<>"],
    ["LESS_EQUAL", "<="],
    ["LESS", "<"],
    ["ADD", "+"],
    ["REAL_NUMBER", "_numreal"],
    ["INTEGER_NUMBER", "_numinteiro"],
    ["VARIABLE_NAME", "_nomevariavel"],
    ["STRING_NAME", "_nomestring"],
    ["PROGRAM_NAME", "_nomeprograma"],
    ["PROCEDURE_NAME", "_nomeprocedure"],
    ["CHAR_NAME", "_nomechar"],
    ["RBRACKET", "]"],
    ["LBRACKET", "["],
    ["SEMICOLON", ";"],
    ["COLON", ":"],
    ["SLASH", "/"],
    ["RANGE", ".."],
    ["DOT", "."],
    ["COMMA", ","],
    ["MULTIPLY", "*"],
    ["RPAREN", ")"],
    ["LPAREN", "("],
    ["DOLLAR", "$"],
    ["HASH", "#"],
    ["SUBTRACT", "-"]
  ];
  
  function readFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const content = event.target.result;
      const { tokens, lexemas } = tokenize(content);
      displayTokens(tokens);
      displayLexemas(lexemas);
    };
    reader.readAsText(file);
  }

  const fileInput = document.getElementById("file-input");
  fileInput.addEventListener("change", function(event) {
  const file = event.target.files[0];
  readFile(file);
});


function tokenize(code) {
  const tokens = [];
  const lexemas = [];

  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    let remainingCode = line;

    let lineNumber = i + 1;

    while (remainingCode.length > 0) {
      let matchedToken = null;

      for (const [tokenName, pattern] of TOKENS) {
        if (typeof pattern === "string") {
          if (remainingCode.startsWith(pattern)) {
            matchedToken = { name: tokenName, value: pattern };
            break;
          }
        } else if (pattern instanceof RegExp) {
          const regexMatch = remainingCode.match(pattern);
          if (regexMatch && regexMatch.index === 0) {
            matchedToken = { name: tokenName, value: regexMatch[0] };
            break;
          }
        }
      }

      if (!matchedToken) {
        let nextDelimiterMatch = remainingCode.match(/^\s+/);
        let nextDelimiter = nextDelimiterMatch ? nextDelimiterMatch[0] : "";

        if (nextDelimiter.length === 0) {
          for (const [tokenName, pattern] of TOKENS) {
            if (typeof pattern === "string" && pattern.length === 1) {
              nextDelimiterMatch = remainingCode.match(new RegExp(`^\\${pattern}`));
              nextDelimiter = nextDelimiterMatch ? nextDelimiterMatch[0] : "";
              if (nextDelimiter.length > 0) {
                matchedToken = { name: tokenName, value: nextDelimiter };
                break;
              }
            }
          }
        }

        if (nextDelimiter.length === 0) {
          const nextWordMatch = remainingCode.match(/^(\S+)/);
          const nextWord = nextWordMatch ? nextWordMatch[1] : "";
          if (nextWord.length > 0) {
            matchedToken = { name: "IDENTIFIER", value: nextWord };
            nextDelimiter = nextWord;
          }
        }

        if (nextDelimiter.length > 0) {
          const tokenName = getTokenName(nextDelimiter);
          if (tokenName !== "INVALID") {
            matchedToken = { name: tokenName, value: nextDelimiter };
          }
        }
      }

      if (matchedToken) {
        const { name, value } = matchedToken;
        const token = {
          name: name,
          value: value,
          line: lineNumber,
        };
        tokens.push(token);
        lexemas.push(value);
        remainingCode = remainingCode.slice(value.length).trim();
      } else {
        const invalidTokenMatch = remainingCode.match(/^\S+/);
        const invalidToken = invalidTokenMatch ? invalidTokenMatch[0] : "";
        const token = {
          name: "INVALID",
          value: invalidToken,
          line: lineNumber,
        };
        tokens.push(token);
        remainingCode = remainingCode.slice(invalidToken.length).trim();
      }
    }
  }

  return { tokens, lexemas };
}





function getTokenName(value) {
  for (const [tokenName, pattern] of TOKENS) {
    if (typeof pattern === "string" && pattern === value) {
      return tokenName;
    } else if (pattern instanceof RegExp && pattern.test(value)) {
      return tokenName;
    }
  }
  return "INVALID";
}


  
  function displayTokens(tokens) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "";
    for (const { name, value, line } of tokens) {
      const tokenElement = document.createElement("p");
      tokenElement.textContent = `Token: (${name}, ${value}) - Linha: ${line}`;
      outputElement.appendChild(tokenElement);
    }
  }

  function displayLexemas(lexemas) {
    const lexemasElement = document.getElementById("lexemas");
    lexemasElement.innerHTML = "";
  
    for (const lexema of lexemas) {
      if (getTokenName(lexema) !== "IDENTIFIER") {
        const lexemaElement = document.createElement("li");
        lexemaElement.textContent = lexema;
        lexemasElement.appendChild(lexemaElement);
      }
    }
  }

  const compileButton = document.getElementById("compile-button");
    compileButton.addEventListener("click", function() {
      const file = fileInput.files[0];
      readFile(file);
});