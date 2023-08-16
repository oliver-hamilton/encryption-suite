const S_BOX = [
    [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76],
    [0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0],
    [0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15],
    [0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75],
    [0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84],
    [0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf],
    [0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8],
    [0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2],
    [0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73],
    [0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb],
    [0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79],
    [0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08],
    [0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a],
    [0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e],
    [0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf],
    [0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16]
];


const S_BOX_INV = [[0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb],
[0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb],
[0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e],
[0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25],
[0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92],
[0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84],
[0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06],
[0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b],
[0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73],
[0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e],
[0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b],
[0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4],
[0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f],
[0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef],
[0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61],
[0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d]];

// First value of RC is a dummy value
const RCON = [[0x00, 0x00, 0x00, 0x00], 
        [0x01, 0x00, 0x00, 0x00],
        [0x02, 0x00, 0x00, 0x00],
        [0x04, 0x00, 0x00, 0x00],
        [0x08, 0x00, 0x00, 0x00],
        [0x10, 0x00, 0x00, 0x00],
        [0x20, 0x00, 0x00, 0x00],
        [0x40, 0x00, 0x00, 0x00],
        [0x80, 0x00, 0x00, 0x00],
        [0x1B, 0x00, 0x00, 0x00],
        [0x36, 0x00, 0x00, 0x00]];

// Key length in 32-bit words (4 words for AES-128)
const N = 4;

// Number of round keys needed
const R = 11;

// 32-bit words of the expanded key
let W = [];

const ARRAY_LENGTH = 4;

function rotateLeft(arr, i) {
    return arr.slice(i, arr.length).concat(arr.slice(0, i));
}

function rotateRight(arr, i) {
    return arr.slice(arr.length - i, arr.length).concat(arr.slice(0, arr.length - i));
}

function addGF(x, y) {
    return x.map((xi, i) => (parseInt(xi, 2) ^ parseInt(y[i], 2)).toString(2));
}

function multiplyGF(x, y) {
    const res = Array(15).fill(0);
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            res[14 - i - j] = res[14 - i - j] ^ (parseInt(x[7 - i], 2) * parseInt(y[7 - j], 2));
        }
    }
    // Reduce modulo irreducible polynomial x^8 + x^4 + x^3 + x + 1
    while (parseInt(res.join(''), 2) >= 2 ** 8) {
        // Find most significant non-zero digit
        let i = 0;
        while (i < 15 && res[i] == 0) {
            i++;
        }
        let shift = 6 - i;
        

        res[14-8 - shift] = res[14-8 - shift] ^ 1;
        res[14-4 - shift] = res[14-4 - shift] ^ 1;
        res[14-3 - shift] = res[14-3 - shift] ^ 1;
        res[14-1 - shift] = res[14-1 - shift] ^ 1;
        res[14-0 - shift] = res[14-0 - shift] ^ 1;
    }
    return res.slice(7, 15);
}

function subBytes(X) {
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        for (let j = 0; j < ARRAY_LENGTH; j++) {
            // Get the most and least significant nibble values
            const upperNibble = parseInt(X[i][j].slice(0, 4), 2);
            const lowerNibble = parseInt(X[i][j].slice(4, 8), 2);
            // Update the appropriate matrix entry
            X[i][j] = toByte(S_BOX[upperNibble][lowerNibble]);
        }
    }
    return X;
}

function subBytesInv(X) {
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        for (let j = 0; j < ARRAY_LENGTH; j++) {
            // Get the most and least significant nibble values
            const upperNibble = parseInt(X[i][j].slice(0, 4), 2);
            const lowerNibble = parseInt(X[i][j].slice(4, 8), 2);
            // Update the appropriate matrix entry
            X[i][j] = toByte(S_BOX_INV[upperNibble][lowerNibble]);
        }
    }
    return X;
}

function shiftRows(X) {
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        X[i] = rotateLeft(X[i], i);
    }
    return X;
}

function shiftRowsInv(X) {
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        X[i] = rotateRight(X[i], i);
    }
    return X;
}

function toByte(n) {
    return n.toString(2).padStart(8, "0");
}

function mixColumns(X) {
    const newX = [Array(4).fill(0), Array(4).fill(0), Array(4).fill(0), Array(4).fill(0)];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        newX[0][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(2), X[0][i]), 
                                    multiplyGF(toByte(3), X[1][i])
                                   ), 
                                   multiplyGF(toByte(1), X[2][i])
                             ), 
                             multiplyGF(toByte(1), X[3][i])
                       ).join('');

        newX[1][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(1), X[0][i]), 
                                    multiplyGF(toByte(2), X[1][i])
                                   ), 
                                   multiplyGF(toByte(3), X[2][i])
                             ), 
                             multiplyGF(toByte(1), X[3][i])
                       ).join('');

        newX[2][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(1), X[0][i]), 
                                    multiplyGF(toByte(1), X[1][i])
                                   ), 
                                   multiplyGF(toByte(2), X[2][i])
                             ), 
                             multiplyGF(toByte(3), X[3][i])
                       ).join('');

        newX[3][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(3), X[0][i]), 
                                    multiplyGF(toByte(1), X[1][i])
                                   ), 
                                   multiplyGF(toByte(1), X[2][i])
                             ), 
                             multiplyGF(toByte(2), X[3][i])
                       ).join('');
    }
    return newX;
}

function mixColumnsInv(X) {
    const newX = [Array(4).fill(0), Array(4).fill(0), Array(4).fill(0), Array(4).fill(0)];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        newX[0][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(14), X[0][i]), 
                                    multiplyGF(toByte(11), X[1][i])
                                   ), 
                                   multiplyGF(toByte(13), X[2][i])
                             ), 
                             multiplyGF(toByte(9), X[3][i])
                       ).join('');

        newX[1][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(9), X[0][i]), 
                                    multiplyGF(toByte(14), X[1][i])
                                   ), 
                                   multiplyGF(toByte(11), X[2][i])
                             ), 
                             multiplyGF(toByte(13), X[3][i])
                       ).join('');

        newX[2][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(13), X[0][i]), 
                                    multiplyGF(toByte(9), X[1][i])
                                   ), 
                                   multiplyGF(toByte(14), X[2][i])
                             ), 
                             multiplyGF(toByte(11), X[3][i])
                       ).join('');

        newX[3][i] = addGF(addGF(addGF(
                                    multiplyGF(toByte(11), X[0][i]), 
                                    multiplyGF(toByte(13), X[1][i])
                                   ), 
                                   multiplyGF(toByte(9), X[2][i])
                             ), 
                             multiplyGF(toByte(14), X[3][i])
                       ).join('');
    }
    return newX;
}

function addRoundKey(X, K) {
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        for (let j = 0; j < ARRAY_LENGTH; j++) {
            X[i][j] = addGF(Array.from(X[i][j]), K[j].slice(8*i, 8*i + 8)).join('');
        }
    }
    return X;
}

function subWord(word) {
    newWord = Array(4);
    for (let i = 0; i < word.length; i++) {
        // Get the most and least significant nibble values
        let upperNibble = parseInt(word[i].slice(0, 4).join(''), 2);
        let lowerNibble = parseInt(word[i].slice(4, 8).join(''), 2);
        // Update the appropriate word entry
        newWord[i] = toByte(S_BOX[upperNibble][lowerNibble]);
    }
    return newWord;
}

function bitwiseXor(x, y) {
    return x.map((xi, i) => (parseInt(xi, 2) ^ parseInt(y[i], 2)).toString(2));
}

function genRoundKeys(K) {
    for (let j = 0; j < 4 * R; j++) {
        // Use the original key to start
        if (j < N) {
            W.push(K[j]);
        }
        else if (j >= N && j % N == 0) {
            let rotateRes = rotateLeft(W[j-1], 8);
            let splitRes = Array(4);
            for (let k = 0; k < 4; k++) {
                splitRes[k] = rotateRes.slice(8*k, 8*k + 8);
            }
            let temp = bitwiseXor(Array.from(RCON[Math.floor(j/N)].map(n => toByte(n)).join('')), Array.from(subWord(splitRes).join('')));
            W.push(bitwiseXor(temp, Array.from(W[j - N])));
        }
        else {
            W.push(bitwiseXor(W[j - N], W[j - 1]));
        }
    }
}

function getRoundKey(i) {   
    return W.slice(4 * i, 4 * (i + 1));
}

function encrypt() {
    // Get the plaintext and encryption key (converting from hex to binary)
    const plaintext = []
    for (let k = 0; k < 16; k++) {
        plaintext.push(parseInt(document.getElementById("plaintext").value.slice(2 * k, 2 * (k + 1)), 16).toString(2).padStart(8, "0"));
    }
    let key = [];
    // const plaintext = Array.from(Array.from(document.getElementById("plaintext").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(8, "0")));
    // .value, 16).toString(2).padStart(BLOCK_LENGTH, "0"));
    //const key = Array.from(Array.from(document.getElementById("encryptionKey").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(8, "0")).join(''));
    for (let k = 0; k < 16; k++) {
        key.push(Array.from(parseInt(document.getElementById("encryptionKey").value.slice(2 * k, 2 * (k + 1)), 16).toString(2).padStart(8, "0")));
    }
    key = key.flat();
    
    const K = [];
    for (let i = 0; i < N; i++) {
        K.push(key.slice(32*i, 32*(i+1)));
    }
    const plaintextMatrix = [Array(4), Array(4), Array(4), Array(4)];

    for (let i = 0; i < ARRAY_LENGTH; i++) {
        for (let j = 0; j < ARRAY_LENGTH; j++) {
            plaintextMatrix[j][i] = plaintext[ARRAY_LENGTH * i + j];
        }
    }
    genRoundKeys(K);
    // plaintextMatrix[3][3] = toByte(0x1);

    let roundKey = getRoundKey(0);
    let res = addRoundKey(plaintextMatrix, roundKey);

    for (let i = 1; i <= 9; i++) {
        roundKey = getRoundKey(i);
        res = subBytes(res);
        res = shiftRows(res);
        res = mixColumns(res);
        res = addRoundKey(res, roundKey);
    }
    roundKey = getRoundKey(10);
    res = subBytes(res);
    res = shiftRows(res);
    res = addRoundKey(res, roundKey);

    // Get the final hex result
    let resHex = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            resHex += parseInt(res[j][i], 2).toString(16).padStart(2, "0");
        }
    }
    document.getElementById("encipheredMessage").innerHTML = resHex;
}

function decrypt() {
    // Get the ciphertext and decryption key (converting from hex to binary)
    // const ciphertext = Array.from(Array.from(document.getElementById("ciphertext").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(8, "0")));
    const ciphertext = [];
    for (let k = 0; k < 16; k++) {
        ciphertext.push(parseInt(document.getElementById("ciphertext").value.slice(2 * k, 2 * (k + 1)), 16).toString(2).padStart(8, "0"));
    }
    // .value, 16).toString(2).padStart(BLOCK_LENGTH, "0"));
    // const key = Array.from(Array.from(document.getElementById("decryptionKey").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(8, "0")).join(''));
    let key = [];
    for (let k = 0; k < 16; k++) {
        key.push(Array.from(parseInt(document.getElementById("decryptionKey").value.slice(2 * k, 2 * (k + 1)), 16).toString(2).padStart(8, "0")));
    }
    key = key.flat();

    const K = [];
    for (let i = 0; i < N; i++) {
        K.push(key.slice(32*i, 32*(i+1)));
    }
    const ciphertextMatrix = [Array(4), Array(4), Array(4), Array(4)];

    for (let i = 0; i < ARRAY_LENGTH; i++) {
        for (let j = 0; j < ARRAY_LENGTH; j++) {
            ciphertextMatrix[j][i] = ciphertext[ARRAY_LENGTH * i + j];
        }
    }
    // plaintextMatrix[3][3] = toByte(0x1);
    genRoundKeys(K);

    let roundKey = getRoundKey(10);
    let res = addRoundKey(ciphertextMatrix, roundKey);
    res = shiftRowsInv(res);
    res = subBytesInv(res);

    for (let i = 9; i >= 1; i--) {
        roundKey = getRoundKey(i);
        res = addRoundKey(res, roundKey);
        res = mixColumnsInv(res);
        res = shiftRowsInv(res);
        res = subBytesInv(res);   
    }
    roundKey = getRoundKey(0);
    res = addRoundKey(res, roundKey);

    // Get the final hex result
    let resHex = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            resHex += parseInt(res[j][i], 2).toString(16);
        }
    }
    document.getElementById("decipheredMessage").innerHTML = resHex;
}