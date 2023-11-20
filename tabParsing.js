
        const tabParsing = new Array(78);
        for (let i = 0; i < 78; i++) { //verificar se é 78
            tabParsing[i] = new Array(43).fill(0);
        }
        const producoes = [
            [0],
            [8,16,31,46,47,35],//P1
            [48,49,50],//P2
            [21,16,26,12,31,48],//P3
            [44],//P4
            [2,52,33,53,31,54],//P5
            [16,55],//P6
            [44],//P7
            [36,16,55],//P8
            [52,33,53,31,54],//P9
            [44],//P10
            [14],//P11
            [6],//P12
            [5],//P13
            [9,16,56,31,47,31,50],//P14
            [44],//P15
            [39,52,33,53,57,38],//P16
            [44],//P17
            [36,52,33,53,57],//P18
            [44],//P19
            [22,51,18],//P20
            [58,31,51],//P21
            [44],//P22
            [10,40,59,60,41],//P23
            [61],//P24
            [44],//P25
            [36,59,60],//P26
            [62,63],//P27
            [30,62,63],//P28
            [42,62,63],//P29
            [44],//P30
            [64,65],//P31
            [37,64,65],//P32
            [34,64,65],//P33
            [44],//P34
            [39,61,38],//P35
            [16],//P36
            [12],//P37
            [11],//P38
            [13],//P39
            [23],//P40
            [15,66,4,47,67],//P41
            [61,68,61],//P42
            [26],//P43
            [27],//P44
            [29],//P45
            [25],//P46
            [28],//P47
            [24],//P48
            [19,47],//P49
            [44],//P50
            [16,69],//P51
            [17,16,32,61,3,61,20,47],//P52
            [70],//P53
            [61],//P54
            [39,71,72,38],//P55
            [44],//P56
            [16],//P57
            [12],//P58
            [11],//P59
            [23],//P60
            [36,71,72],//P61
            [44],//P62
            [63,1,66,20,47],//P63
            [7,39,16,38],//P64
            [13],//P65

        ];
    // Inicializar a Matriz de Parsing com zeros.
        for (let i = 0; i < 78; i++) {
            for (let j = 0; j < 44; j++) {
                tabParsing[i][j] = 0;
            }
        }
    // Inicializar os outros elementos da Matriz de Parsing.
    
    tabParsing[45][8] = 1
    tabParsing[46][2] = 2 
    tabParsing[46][21] = 2
    tabParsing[47][22] = 20
    tabParsing[48][2] = 4
    tabParsing[48][21] = 3
    tabParsing[49][2] = 5
    tabParsing[50][9] = 14
    tabParsing[50][22] = 15 
    tabParsing[51][1] = 21
    tabParsing[51][7] = 21
    tabParsing[51][10] = 21 
    tabParsing[51][15] = 21
    tabParsing[51][16] = 21
    tabParsing[51][17] = 21
    tabParsing[51][18] = 22 
    tabParsing[52][16] = 6
    tabParsing[53][5] = 13
    tabParsing[53][6] = 12
    tabParsing[53][14] = 11
    tabParsing[54][9] = 10 
    tabParsing[54][16] = 9
    tabParsing[54][22] = 10 
    tabParsing[55][36] = 8
    tabParsing[55][33] = 7
    tabParsing[56][39] = 16
    tabParsing[56][31] = 17 
    tabParsing[57][36] = 18
    tabParsing[57][38] = 19
    tabParsing[58][1] = 63
    tabParsing[58][7] = 64
    tabParsing[58][10] = 23
    tabParsing[58][15] = 41
    tabParsing[58][16] = 51
    tabParsing[58][17] = 52
    tabParsing[59][11] = 24
    tabParsing[59][12] = 24
    tabParsing[59][13] = 24
    tabParsing[59][16] = 24
    tabParsing[59][23] = 24
    tabParsing[59][39] = 24
    tabParsing[60][36] = 26
    tabParsing[60][41] = 25 
    tabParsing[61][11] = 27
    tabParsing[61][12] = 27
    tabParsing[61][13] = 27
    tabParsing[61][16] = 27
    tabParsing[61][23] = 27
    tabParsing[61][39] = 27
    tabParsing[62][11] = 31
    tabParsing[62][12] = 31
    tabParsing[62][13] = 31
    tabParsing[62][16] = 31
    tabParsing[62][23] = 31
    tabParsing[62][39] = 31
    tabParsing[63][3] = 30
    tabParsing[63][4] = 30
    tabParsing[63][20] = 30 
    tabParsing[63][24] = 30  
    tabParsing[63][25] = 30
    tabParsing[63][26] = 30
    tabParsing[63][27] = 30
    tabParsing[63][28] = 30
    tabParsing[63][29] = 30
    tabParsing[63][30] = 28
    tabParsing[63][31] = 30
    tabParsing[63][36] = 30
    tabParsing[63][38] = 30
    tabParsing[63][41] = 30
    tabParsing[63][42] = 29
    tabParsing[64][11] = 38
    tabParsing[64][12] = 37
    tabParsing[64][13] = 39
    tabParsing[64][16] = 36
    tabParsing[64][23] = 40
    tabParsing[64][39] = 35
    tabParsing[65][3] = 34
    tabParsing[65][4] = 34
    tabParsing[65][20] = 34 
    tabParsing[65][24] = 34  
    tabParsing[65][25] = 34
    tabParsing[65][26] = 34
    tabParsing[65][27] = 34
    tabParsing[65][28] = 34
    tabParsing[65][29] = 34
    tabParsing[65][30] = 34
    tabParsing[65][31] = 34
    tabParsing[65][34] = 33
    tabParsing[65][36] = 34
    tabParsing[65][37] = 32
    tabParsing[65][38] = 34
    tabParsing[65][41] = 34 
    tabParsing[65][42] = 34
    tabParsing[66][11] = 42
    tabParsing[66][12] = 42
    tabParsing[66][13] = 42
    tabParsing[66][16] = 42
    tabParsing[66][23] = 42
    tabParsing[66][39] = 42
    tabParsing[67][19] = 49
    tabParsing[67][31] = 50
    tabParsing[68][24] = 48
    tabParsing[68][25] = 46
    tabParsing[68][26] = 43
    tabParsing[68][27] = 44
    tabParsing[68][28] = 47
    tabParsing[68][29] = 45
    tabParsing[69][34] = 63
    tabParsing[69][31] = 53 
    tabParsing[69][32] = 54
    tabParsing[69][39] = 53 
    tabParsing[70][31] = 56
    tabParsing[70][39] = 55 
    tabParsing[71][11] = 59 
    tabParsing[71][12] = 58
    tabParsing[71][13] = 65
    tabParsing[71][16] = 57 
    tabParsing[71][23] = 60 
    tabParsing[72][36] = 61
    tabParsing[72][38] = 62