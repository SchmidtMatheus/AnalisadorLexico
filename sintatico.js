class TabParsing {
    constructor() {
        this.tabParsing = new Array(78);
        for (let i = 0; i < 78; i++) { //verificar se é 78
            this.tabParsing[i] = new Array(43).fill(0);
        }
        this.producoes = [
            [9,17,34,46,47,38,0,0],//P1
            [48,49,50,0,0,0,0,0],//P2
            [23,17,27,13,34,48,0,0],//P3
            [21,0,0,0,0,0,0,0],//P4
            [3,52,36,53,34,54,0,0],//P5
            [17,55,0,0,0,0,0,0],//P6
            [21,0,0,0,0,0,0,0],//P7
            [39,17,55,0,0,0,0,0],//P8
            [52,36,53,34,54,0,0,0],//P9
            [21,0,0,0,0,0,0,0],//P10
            [15,0,0,0,0,0,0,0],//P11
            [7,0,0,0,0,0,0,0],//P12
            [6,0,0,0,0,0,0,0],//P13
            [10,17,56,34,47,34,50,0],//P14
            [21,0,0,0,0,0,0,0],//P15
            [42,52,36,53,57,41,0,0],//P16
            [21,0,0,0,0,0,0,0],//P17
            [39,52,36,53,57,0,0,0],//P18
            [21,0,0,0,0,0,0,0],//P19
            [24,51,19,0,0,0,0,0],//P20
            [58,34,51,0,0,0,0,0],//P21
            [21,0,0,0,0,0,0,0],//P22
            [11,33,59,60,32,0,0,0],//P23
            [16,66,5,47,67,0,0,0],//P24
            [17,69,0,0,0,0,0,0],//P25
            [18,17,35,61,4,61,22,47],//P26
            [1,66,22,47,0,0,0,0],//P27
            [8,42,17,41,0,0,0,0],//P28
            [70,0,0,0,0,0,0,0],//P29
            [35,61,0,0,0,0,0,0],//P30
            [42,71,72,41,0,0,0,0],//P31
            [21,0,0,0,0,0,0,0],//P32
            [17,0,0,0,0,0,0,0],//P33
            [13,0,0,0,0,0,0,0],//P34
            [12,0,0,0,0,0,0,0],//P35
            [2,0,0,0,0,0,0,0],//P36
            [39,71,72,0,0,0,0,0],//P37
            [21,0,0,0,0,0,0,0],//P38
            [61,0,0,0,0,0,0,0],//P39
            [39,59,60,0,0,0,0,0],//P40
            [21,0,0,0,0,0,0,0],//P41
            [62,63,0,0,0,0,0,0],//P42
            [31,62,63,0,0,0,0,0],//P43
            [44,62,63,0,0,0,0,0],//P44
            [21,0,0,0,0,0,0,0],//P45
            [64,65,0,0,0,0,0,0],//P46
            [40,64,65,0,0,0,0,0],//P47
            [37,64,65,0,0,0,0,0],//P48
            [21,0,0,0,0,0,0,0],//P49
            [42,61,41,0,0,0,0,0],//P50
            [17,0,0,0,0,0,0,0],//P51
            [13,0,0,0,0,0,0,0],//P52
            [12,0,0,0,0,0,0,0],//P53
            [14,0,0,0,0,0,0,0],//P54
            [2,0,0,0,0,0,0,0],//P55
            [61,68,61,0,0,0,0,0],//P56
            [27,0,0,0,0,0,0,0],//P57
            [28,0,0,0,0,0,0,0],//P58
            [30,0,0,0,0,0,0,0],//P59
            [26,0,0,0,0,0,0,0],//P60
            [29,0,0,0,0,0,0,0],//P61
            [25,0,0,0,0,0,0,0],//P62
            [20,47,0,0,0,0,0,0],//P63
            [21,0,0,0,0,0,0,0],//P64
            [17,69,0,0,0,0,0,0],//P65
            [18,17,35,61,4,61,22,47],//P66
            [70,0,0,0,0,0,0,0],//P67
            [35,61,0,0,0,0,0,0],//P68
            [42,71,72,41,0,0,0,0],//P69
            [21,0,0,0,0,0,0,0],//P70
            [17,0,0,0,0,0,0,0],//P71
            [13,0,0,0,0,0,0,0],//P72
            [12,0,0,0,0,0,0,0],//P73
            [2,0,0,0,0,0,0,0],//P74
            [14,0,0,0,0,0,0,0],//P75
            [39,71,72,0,0,0,0,0],//P76
            [21,0,0,0,0,0,0,0],//P77
            [1,66,22,47,0,0,0,0],//P78
            [8,42,17,41,0,0,0,0],//P79
        ];
    // Inicializar a Matriz de Parsing com zeros.
        for (let i = 0; i < 78; i++) {
            for (let j = 0; j < 43; j++) {
                this.tabParsing[i][j] = 0;
            }
        }
    // Inicializar os outros elementos da Matriz de Parsing.
    
    this.tabParsing[45][9] = 1;
    this.tabParsing[46][2] = 2;
    this.tabParsing[46][21] = 2;
    this.tabParsing[46][23] = 2;
    this.tabParsing[47][24] = 20;
    this.tabParsing[48][21] = 4;
    this.tabParsing[48][23] = 3;
    this.tabParsing[49][3] = 5;
    this.tabParsing[50][10] = 14;
    this.tabParsing[50][21] = 15;
    this.tabParsing[51][1] = 21;
    this.tabParsing[51][8] = 21;
    this.tabParsing[51][11] = 21;
    this.tabParsing[51][16] = 21;
    this.tabParsing[51][17] = 21;
    this.tabParsing[51][18] = 21;
    this.tabParsing[51][21] = 22;
    this.tabParsing[52][17] = 6;
    this.tabParsing[53][6] = 13;
    this.tabParsing[53][7] = 12;
    this.tabParsing[53][15] = 11;
    this.tabParsing[54][17] = 9;
    this.tabParsing[54][21] = 10;
    this.tabParsing[55][21] = 7;
    this.tabParsing[55][39] = 8;
    this.tabParsing[56][21] = 17;
    this.tabParsing[56][42] = 16;
    this.tabParsing[57][21] = 19;
    this.tabParsing[57][39] = 18;
    this.tabParsing[58][1] = 78;
    this.tabParsing[58][8] = 79;
    this.tabParsing[58][11] = 23;
    this.tabParsing[58][16] = 24;
    this.tabParsing[58][17] = 65;
    this.tabParsing[58][18] = 66;
    this.tabParsing[59][2] = 39;
    this.tabParsing[59][12] = 39;
    this.tabParsing[59][13] = 39;
    this.tabParsing[59][14] = 39;
    this.tabParsing[59][17] = 39;
    this.tabParsing[59][42] = 39;
    this.tabParsing[60][21] = 41;
    this.tabParsing[60][39] = 40;
    this.tabParsing[61][2] = 42;
    this.tabParsing[61][12] = 42;
    this.tabParsing[61][13] = 42;
    this.tabParsing[61][14] = 42;
    this.tabParsing[61][17] = 42;
    this.tabParsing[61][42] = 42;
    this.tabParsing[62][2] = 46;
    this.tabParsing[62][12] = 46;
    this.tabParsing[62][13] = 46;
    this.tabParsing[62][14] = 46;
    this.tabParsing[62][17] = 46;
    this.tabParsing[62][42] = 46;
    this.tabParsing[63][21] = 45;
    this.tabParsing[63][31] = 43;
    this.tabParsing[63][44] = 44;
    this.tabParsing[64][2] = 55;
    this.tabParsing[64][12] = 53;
    this.tabParsing[64][13] = 52;
    this.tabParsing[64][14] = 54;
    this.tabParsing[64][17] = 51;
    this.tabParsing[64][42] = 50;
    this.tabParsing[65][21] = 49;
    this.tabParsing[65][37] = 48;
    this.tabParsing[65][40] = 47;
    this.tabParsing[66][2] = 56;
    this.tabParsing[66][12] = 56;
    this.tabParsing[66][13] = 56;
    this.tabParsing[66][14] = 56;
    this.tabParsing[66][17] = 56;
    this.tabParsing[66][42] = 56;
    this.tabParsing[67][20] = 63;
    this.tabParsing[67][21] = 64;
    this.tabParsing[68][25] = 62;
    this.tabParsing[68][26] = 60;
    this.tabParsing[68][27] = 57;
    this.tabParsing[68][28] = 58;
    this.tabParsing[68][29] = 61;
    this.tabParsing[68][30] = 59;
    this.tabParsing[69][21] = 67;
    this.tabParsing[69][35] = 68;
    this.tabParsing[69][42] = 67;
    this.tabParsing[70][21] = 70;
    this.tabParsing[70][42] = 69;
    this.tabParsing[71][2] = 74;
    this.tabParsing[71][12] = 73;
    this.tabParsing[71][13] = 72;
    this.tabParsing[71][14] = 75;
    this.tabParsing[71][17] = 71;
    this.tabParsing[72][21] = 77;
    this.tabParsing[72][39] = 76;
        }
    };
  
  let pilha = [43]; // Topo da pilha
  let aux = 0;
  
  pilha = [producoes[0], pilha];
  pilha = pilha.filter(item => item !== 0); // Remove os zero da tabela de producoes
  
  let X = pilha[0];
  let a = tokens[0];
  let tokens = [8,16,31,16,26,12,31,16,26,12,31,21,16,26];
  
  while (X !== 43) { // Enquanto a pilha não estiver vazia
    console.log(pilha);
    console.log(X);
    console.log(a);
  
    aux++;
  
    if (X === 44) { // Se o topo da pilha for vazio
        pilha.shift();
        X = pilha[0];
    } else {
        if (X <= 44) { // Topo da pilha é um terminal
            if (X === a) { // Deu match :D
                pilha.shift();
                tokens.shift();
                X = pilha[0];
                if (tokens.length !== 0) {
                    a = tokens[0];
                }
            } else {
                console.log('Erro Sintático na Linha: '); // + linhatoken[aux-1]
                break;
            }
        } else { // Topo da pilha é um não terminal
            let topo = [producoes[tabParsing[X][a] - 1], pilha]; // Empilha as produções correspondentes
            if (topo[0] === 44) { // Se topo vazio, X recebe o novo topo da pilha
                aux--;
                X = topo[0];
            } else {
                if (topo[0] !== 44) { // Se topo não vazio, atualiza a pilha
                    pilha.shift();
                    pilha = [producoes[tabParsing[X][a]],pilha]; //empilha as producoes
                    pilha = pilha.filter(item => item !== 0);
                    X = pilha[0];
                } else {
                    console.log('Erro Sintático na Linha: '); // + linhatoken[aux-1]
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