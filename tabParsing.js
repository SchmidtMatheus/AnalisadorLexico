
        const tabParsing = new Array(78);
        for (let i = 0; i < 78; i++) { //verificar se é 78
            tabParsing[i] = new Array(43).fill(0);
        }
        const producoes = [
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
            [15,66,4,47,67],//P24
            [16,69],//P25
            [17,16,32,61,3,61,20,47],//P26
            [1,66,20,47],//P27
            [7,39,16,38],//P28
            [70],//P29
            [32,61],//P30
            [39,71,72,38],//P31
            [44],//P32
            [16],//P33
            [12],//P34
            [11],//P35
            [23],//P36
            [36,71,72],//P37
            [44],//P38
            [61],//P39
            [36,59,60],//P40
            [44],//P41
            [62,63],//P42
            [30,62,63],//P43
            [42,62,63],//P44
            [44],//P45
            [64,65],//P46
            [37,64,65],//P47
            [34,64,65],//P48
            [44],//P49
            [39,61,38],//P50
            [16],//P51
            [12],//P52
            [11],//P53
            [13],//P54
            [23],//P55
            [61,68,61],//P56
            [26],//P57
            [27],//P58
            [29],//P59
            [25],//P60
            [28],//P61
            [24],//P62
            [19,47],//P63
            [44],//P64
            [16,69],//P65
            [17,16,32,61,3,61,20,47],//P66
            [70],//P67
            [32,61],//P68
            [39,71,72,38],//P69
            [44],//P70
            [16],//P71
            [12],//P72
            [11],//P73
            [23],//P74
            [13],//P75
            [36,71,72],//P76
            [44],//P77
            [1,66,20,47],//P78
            [7,39,16,38],//P79
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
    tabParsing[46][44] = 2
    tabParsing[47][22] = 20
    tabParsing[48][21] = 3
    tabParsing[48][2] = 4 
    tabParsing[48][44] = 4
    tabParsing[49][2] = 5
    tabParsing[50][9] = 14
    tabParsing[50][44] = 15
    tabParsing[50][22] = 15 
    tabParsing[51][1] = 21
    tabParsing[51][7] = 21
    tabParsing[51][10] = 21 
    tabParsing[51][15] = 21
    tabParsing[51][16] = 21
    tabParsing[51][17] = 21
    tabParsing[51][44] = 22
    tabParsing[51][18] = 22 
    tabParsing[52][16] = 6
    tabParsing[53][5] = 13
    tabParsing[53][6] = 12
    tabParsing[53][14] = 11
    tabParsing[54][16] = 9
    tabParsing[54][44] = 10
    tabParsing[54][9] = 10 
    tabParsing[54][22] = 10 
    tabParsing[55][36] = 8
    tabParsing[55][44] = 7
    tabParsing[55][33] = 7 
    tabParsing[56][39] = 16
    tabParsing[56][44] = 17
    tabParsing[56][31] = 17 
    tabParsing[57][36] = 18
    tabParsing[57][44] = 19
    tabParsing[57][38] = 19
    tabParsing[58][1] = 78
    tabParsing[58][7] = 79
    tabParsing[58][10] = 23
    tabParsing[58][15] = 24
    tabParsing[58][16] = 65
    tabParsing[58][17] = 66
    tabParsing[59][11] = 39
    tabParsing[59][12] = 39
    tabParsing[59][13] = 39
    tabParsing[59][16] = 39
    tabParsing[59][23] = 39
    tabParsing[59][39] = 39
    tabParsing[60][36] = 40
    tabParsing[60][44] = 41
    tabParsing[60][41] = 41 
    tabParsing[61][11] = 42
    tabParsing[61][12] = 42
    tabParsing[61][13] = 42
    tabParsing[61][16] = 42
    tabParsing[61][23] = 42
    tabParsing[61][39] = 42
    tabParsing[62][11] = 46
    tabParsing[62][12] = 46
    tabParsing[62][13] = 46
    tabParsing[62][16] = 46
    tabParsing[62][23] = 46
    tabParsing[62][39] = 46
    tabParsing[63][30] = 43
    tabParsing[63][42] = 44
    tabParsing[63][44] = 45   
    tabParsing[63][41] = 45 
    tabParsing[64][11] = 53
    tabParsing[64][12] = 52
    tabParsing[64][13] = 54
    tabParsing[64][16] = 51
    tabParsing[64][23] = 55
    tabParsing[64][39] = 50
    tabParsing[65][34] = 48
    tabParsing[65][37] = 47
    tabParsing[65][44] = 49
    tabParsing[65][41] = 49 
    tabParsing[66][11] = 56
    tabParsing[66][12] = 56
    tabParsing[66][13] = 56
    tabParsing[66][16] = 56
    tabParsing[66][23] = 56
    tabParsing[66][39] = 56
    tabParsing[67][19] = 57
    tabParsing[67][44] = 58
    tabParsing[68][11] = 60
    tabParsing[68][12] = 59
    tabParsing[68][13] = 61
    tabParsing[68][16] = 58
    tabParsing[68][23] = 62
    tabParsing[68][39] = 57
    tabParsing[69][34] = 63
    tabParsing[69][44] = 64
    tabParsing[69][31] = 67 
    tabParsing[69][39] = 67 
    tabParsing[70][11] = 53
    tabParsing[70][12] = 52
    tabParsing[70][13] = 54
    tabParsing[70][16] = 68
    tabParsing[70][23] = 55
    tabParsing[70][39] = 69 
    tabParsing[71][12] = 72 
    tabParsing[71][30] = 66
    tabParsing[71][42] = 66
    tabParsing[71][44] = 66 
    tabParsing[72][11] = 53
    tabParsing[72][12] = 52
    tabParsing[72][13] = 54
    tabParsing[72][16] = 74
    tabParsing[72][23] = 55
    tabParsing[72][38] = 77  
    tabParsing[72][39] = 73