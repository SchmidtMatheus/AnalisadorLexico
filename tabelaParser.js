let tabParsing = new Array(82);
for (let i = 0; i < 82; i++) {
    tabParsing[i] = new Array(54);
    for (let j = 0; j < 54; j++) {
        tabParsing[i][j] = 0;
    }
}

tabParsing[54][10] = 1;
tabParsing[55][47] = 2;
tabParsing[56][11] = 23;
tabParsing[56][28] = 24;
tabParsing[56][47] = 24;
tabParsing[57][27] = 4;
tabParsing[57][28] = 3;
tabParsing[57][47] = 4;
tabParsing[58][27] = 7;
tabParsing[58][31] = 8;
tabParsing[59][31] = 27;
tabParsing[60][6] = 21;
tabParsing[60][8] = 22;
tabParsing[60][19] = 19;
tabParsing[60][29] = 20;
tabParsing[60][32] = 14;
tabParsing[61][21] = 5;
tabParsing[61][27] = 6;
tabParsing[61][47] = 6;
tabParsing[62][21] = 9;
tabParsing[63][21] = 12;
tabParsing[63][31] = 13;
tabParsing[63][50] = 13;
tabParsing[64][44] = 11;
tabParsing[64][48] = 10;
tabParsing[64][50] = 11;
tabParsing[65][6] = 17;
tabParsing[65][8] = 18;
tabParsing[65][19] = 15;
tabParsing[65][29] = 16;
tabParsing[66][27] = 26;
tabParsing[66][28] = 26;
tabParsing[66][47] = 26;
tabParsing[66][51] = 25;
tabParsing[67][1] = 35;
tabParsing[67][2] = 31;
tabParsing[67][7] = 32;
tabParsing[67][9] = 33;
tabParsing[67][20] = 30;
tabParsing[67][23] = 36;
tabParsing[67][24] = 37;
tabParsing[67][30] = 34;
tabParsing[67][43] = 37;
tabParsing[68][24] = 29;
tabParsing[69][14] = 44;
tabParsing[69][15] = 44;
tabParsing[69][16] = 44;
tabParsing[69][17] = 44;
tabParsing[69][21] = 44;
tabParsing[69][51] = 44;
tabParsing[70][24] = 71;
tabParsing[70][25] = 70;
tabParsing[70][43] = 71;
tabParsing[71][21] = 72;
tabParsing[72][24] = 39;
tabParsing[72][43] = 39;
tabParsing[72][51] = 38;
tabParsing[73][14] = 41;
tabParsing[73][15] = 41;
tabParsing[73][16] = 41;
tabParsing[73][17] = 41;
tabParsing[73][18] = 40;
tabParsing[73][21] = 41;
tabParsing[73][51] = 41;
tabParsing[74][48] = 42;
tabParsing[75][14] = 46;
tabParsing[75][15] = 46;
tabParsing[75][16] = 46;
tabParsing[75][17] = 46;
tabParsing[75][18] = 46;
tabParsing[75][21] = 46;
tabParsing[75][51] = 46;
tabParsing[76][11] = 45;
tabParsing[76][28] = 45;
tabParsing[76][30] = 45;
tabParsing[76][32] = 45;
tabParsing[76][44] = 45;
tabParsing[76][48] = 45;
tabParsing[76][50] = 45;
tabParsing[77][44] = 49;
tabParsing[77][48] = 49;
tabParsing[77][50] = 49;
tabParsing[78][12] = 43;
tabParsing[78][21] = 43;
tabParsing[79][44] = 50;
tabParsing[79][48] = 50;
tabParsing[79][50] = 50;
tabParsing[80][43] = 73;
tabParsing[80][49] = 74;
tabParsing[81][14] = 52;
tabParsing[81][15] = 52;
tabParsing[81][16] = 52;
tabParsing[81][17] = 52;
tabParsing[81][18] = 52;
tabParsing[81][21] = 52;
tabParsing[81][51] = 52;

let producoes = [
    [10,21,43,55,47],//P1
    [56,57,58,59],//P2
    [28,21,36,60,43,61],//P3
    [22],//P4
    [21,36,60,43,61],//P5
    [22],//P6
    [27,62,44,60,43,63],//P7
    [22],//P8
    [21,64],//P9
    [48,21],//P10
    [22],//P11
    [62,44,60,43,63],//P12
    [22],//P13
    [32,42,15,46,15,41,13,65],//P14
    [19],//P15
    [29],//P16
    [6],//P17
    [8],//P18
    [19],//P19
    [29],//P20
    [6],//P21
    [8],//P22
    [11,21,66,58,59,43,56],//P23
    [22],//P24
    [51,62,44,60,43,63,50],//P25
    [22],//P26
    [31,67,43,68,24],//P27
    [67,43,68],//P28
    [22],//P29
    [20,42,69,41,5,31,67,24,70],//P30
    [2,42,69,41,26,31,67,24],//P31
    [7,3,42,69,41],//P32
    [9,51,71,50],//P33
    [30,21,72],//P34
    [1,51,73,74,50],//P35
    [23,42,21,36,69,41,4,42,69,41,26,31,67,24],//P36
    [22],//P37
    [51,62,50],//P38
    [22],//P39
    [18],//P40
    [69],//P41
    [48,73,74],//P42
    [22],//P43
    [75,76,77],//P44
    [78,79],//P45
    [15],//P46
    [21],//P47
    [16], // P48
    [17], // P49
    [14], // P50
    [51, 69, 50], // P51
    [36, 80], // P52
    [39, 80], // P53
    [35, 80], // P54
    [34, 80], // P55
    [38, 80], // P56
    [37, 80], // P57
    [22], // P58
    [40, 75, 76], // P59
    [53, 75, 76], // P60
    [75, 76], // P61
    [40, 75, 76], // P62
    [53, 75, 76], // P63
    [12, 75, 76], // P64
    [22], // P65
    [49, 78, 79], // P66
    [45, 78, 79], // P67
    [33, 78, 79], // P68
    [22], // P69
    [25, 31, 67, 24], // P70
    [22], // P71
    [21, 81], // P72
    [48, 21], // P73
    [22], // P74
]
    