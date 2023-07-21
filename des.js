// ---- SUBSTITUTION BOXES ---- 
const S1 = {0b000000: 14,
      0b000010: 4,
      0b000100: 13,
      0b000110: 1,
      0b001000: 2,
      0b001010: 15,
      0b001100: 11,
      0b001110: 8,
      0b010000: 3,
      0b010010: 10,
      0b010100: 6,
      0b010110: 12,
      0b011000: 5,
      0b011010: 9,
      0b011100: 0,
      0b011110: 7,
      0b000001: 0,
      0b000011: 15,
      0b000101: 7,
      0b000111: 4,
      0b001001: 14,
      0b001011: 2,
      0b001101: 13,
      0b001111: 1,
      0b010001: 10,
      0b010011: 6,
      0b010101: 12,
      0b010111: 11,
      0b011001: 9,
      0b011011: 5,
      0b011101: 3,
      0b011111: 8,
      0b100000: 4,
      0b100010: 1,
      0b100100: 14,
      0b100110: 8,
      0b101000: 13,
      0b101010: 6,
      0b101100: 2,
      0b101110: 11,
      0b110000: 15,
      0b110010: 12,
      0b110100: 9,
      0b110110: 7,
      0b111000: 3,
      0b111010: 10,
      0b111100: 5,
      0b111110: 0,
      0b100001: 15,
      0b100011: 12,
      0b100101: 8,
      0b100111: 2,
      0b101001: 4,
      0b101011: 9,
      0b101101: 1,
      0b101111: 7,
      0b110001: 5,
      0b110011: 11,
      0b110101: 3,
      0b110111: 14,
      0b111001: 10,
      0b111011: 0,
      0b111101: 6,
      0b111111: 13,
      };

const S2 = {0b000000: 15,
      0b000010: 1,
      0b000100: 8,
      0b000110: 14,
      0b001000: 6,
      0b001010: 11,
      0b001100: 3,
      0b001110: 4,
      0b010000: 9,
      0b010010: 7,
      0b010100: 2,
      0b010110: 13,
      0b011000: 12,
      0b011010: 0,
      0b011100: 5,
      0b011110: 10,
      0b000001: 3,
      0b000011: 13,
      0b000101: 4,
      0b000111: 7,
      0b001001: 15,
      0b001011: 2,
      0b001101: 8,
      0b001111: 14,
      0b010001: 12,
      0b010011: 0,
      0b010101: 1,
      0b010111: 10,
      0b011001: 6,
      0b011011: 9,
      0b011101: 11,
      0b011111: 5,
      0b100000: 0,
      0b100010: 14,
      0b100100: 7,
      0b100110: 11,
      0b101000: 10,
      0b101010: 4,
      0b101100: 13,
      0b101110: 1,
      0b110000: 5,
      0b110010: 8,
      0b110100: 12,
      0b110110: 6,
      0b111000: 9,
      0b111010: 3,
      0b111100: 2,
      0b111110: 15,
      0b100001: 13,
      0b100011: 8,
      0b100101: 10,
      0b100111: 1,
      0b101001: 3,
      0b101011: 15,
      0b101101: 4,
      0b101111: 2,
      0b110001: 11,
      0b110011: 6,
      0b110101: 7,
      0b110111: 12,
      0b111001: 0,
      0b111011: 5,
      0b111101: 14,
      0b111111: 9,
      };

const S3 = {0b000000: 10,
      0b000010: 0,
      0b000100: 9,
      0b000110: 14,
      0b001000: 6,
      0b001010: 3,
      0b001100: 15,
      0b001110: 5,
      0b010000: 1,
      0b010010: 13,
      0b010100: 12,
      0b010110: 7,
      0b011000: 11,
      0b011010: 4,
      0b011100: 2,
      0b011110: 8,
      0b000001: 13,
      0b000011: 7,
      0b000101: 0,
      0b000111: 9,
      0b001001: 3,
      0b001011: 4,
      0b001101: 6,
      0b001111: 10,
      0b010001: 2,
      0b010011: 8,
      0b010101: 5,
      0b010111: 14,
      0b011001: 12,
      0b011011: 11,
      0b011101: 15,
      0b011111: 1,
      0b100000: 13,
      0b100010: 6,
      0b100100: 4,
      0b100110: 9,
      0b101000: 8,
      0b101010: 15,
      0b101100: 3,
      0b101110: 0,
      0b110000: 11,
      0b110010: 1,
      0b110100: 2,
      0b110110: 12,
      0b111000: 5,
      0b111010: 10,
      0b111100: 14,
      0b111110: 7,
      0b100001: 1,
      0b100011: 10,
      0b100101: 13,
      0b100111: 0,
      0b101001: 6,
      0b101011: 9,
      0b101101: 8,
      0b101111: 7,
      0b110001: 4,
      0b110011: 15,
      0b110101: 14,
      0b110111: 3,
      0b111001: 11,
      0b111011: 5,
      0b111101: 2,
      0b111111: 12,
      };

const S4 = {0b000000: 7,
      0b000010: 13,
      0b000100: 14,
      0b000110: 3,
      0b001000: 0,
      0b001010: 6,
      0b001100: 9,
      0b001110: 10,
      0b010000: 1,
      0b010010: 2,
      0b010100: 8,
      0b010110: 5,
      0b011000: 11,
      0b011010: 12,
      0b011100: 4,
      0b011110: 15,
      0b000001: 13,
      0b000011: 8,
      0b000101: 11,
      0b000111: 5,
      0b001001: 6,
      0b001011: 15,
      0b001101: 0,
      0b001111: 3,
      0b010001: 4,
      0b010011: 7,
      0b010101: 2,
      0b010111: 12,
      0b011001: 1,
      0b011011: 10,
      0b011101: 14,
      0b011111: 9,
      0b100000: 10,
      0b100010: 6,
      0b100100: 9,
      0b100110: 0,
      0b101000: 12,
      0b101010: 11,
      0b101100: 7,
      0b101110: 13,
      0b110000: 15,
      0b110010: 1,
      0b110100: 3,
      0b110110: 14,
      0b111000: 5,
      0b111010: 2,
      0b111100: 8,
      0b111110: 4,
      0b100001: 3,
      0b100011: 15,
      0b100101: 0,
      0b100111: 6,
      0b101001: 10,
      0b101011: 1,
      0b101101: 13,
      0b101111: 8,
      0b110001: 9,
      0b110011: 4,
      0b110101: 5,
      0b110111: 11,
      0b111001: 12,
      0b111011: 7,
      0b111101: 2,
      0b111111: 14,
      };

const S5 = {0b000000: 2,
      0b000010: 12,
      0b000100: 4,
      0b000110: 1,
      0b001000: 7,
      0b001010: 10,
      0b001100: 11,
      0b001110: 6,
      0b010000: 8,
      0b010010: 5,
      0b010100: 3,
      0b010110: 15,
      0b011000: 13,
      0b011010: 0,
      0b011100: 14,
      0b011110: 9,
      0b000001: 14,
      0b000011: 11,
      0b000101: 2,
      0b000111: 12,
      0b001001: 4,
      0b001011: 7,
      0b001101: 13,
      0b001111: 1,
      0b010001: 5,
      0b010011: 0,
      0b010101: 15,
      0b010111: 10,
      0b011001: 3,
      0b011011: 9,
      0b011101: 8,
      0b011111: 6,
      0b100000: 4,
      0b100010: 2,
      0b100100: 1,
      0b100110: 11,
      0b101000: 10,
      0b101010: 13,
      0b101100: 7,
      0b101110: 8,
      0b110000: 15,
      0b110010: 9,
      0b110100: 12,
      0b110110: 5,
      0b111000: 6,
      0b111010: 3,
      0b111100: 0,
      0b111110: 14,
      0b100001: 11,
      0b100011: 8,
      0b100101: 12,
      0b100111: 7,
      0b101001: 1,
      0b101011: 14,
      0b101101: 2,
      0b101111: 13,
      0b110001: 6,
      0b110011: 15,
      0b110101: 0,
      0b110111: 9,
      0b111001: 10,
      0b111011: 4,
      0b111101: 5,
      0b111111: 3,
      };

const S6 = {0b000000: 12,
      0b000010: 1,
      0b000100: 10,
      0b000110: 15,
      0b001000: 9,
      0b001010: 2,
      0b001100: 6,
      0b001110: 8,
      0b010000: 0,
      0b010010: 13,
      0b010100: 3,
      0b010110: 4,
      0b011000: 14,
      0b011010: 7,
      0b011100: 5,
      0b011110: 11,
      0b000001: 10,
      0b000011: 15,
      0b000101: 4,
      0b000111: 2,
      0b001001: 7,
      0b001011: 12,
      0b001101: 9,
      0b001111: 5,
      0b010001: 6,
      0b010011: 1,
      0b010101: 13,
      0b010111: 14,
      0b011001: 0,
      0b011011: 11,
      0b011101: 3,
      0b011111: 8,
      0b100000: 9,
      0b100010: 14,
      0b100100: 15,
      0b100110: 5,
      0b101000: 2,
      0b101010: 8,
      0b101100: 12,
      0b101110: 3,
      0b110000: 7,
      0b110010: 0,
      0b110100: 4,
      0b110110: 10,
      0b111000: 1,
      0b111010: 13,
      0b111100: 11,
      0b111110: 6,
      0b100001: 4,
      0b100011: 3,
      0b100101: 2,
      0b100111: 12,
      0b101001: 9,
      0b101011: 5,
      0b101101: 15,
      0b101111: 10,
      0b110001: 11,
      0b110011: 14,
      0b110101: 1,
      0b110111: 7,
      0b111001: 6,
      0b111011: 0,
      0b111101: 8,
      0b111111: 13,
      };

const S7 = {0b000000: 4,
      0b000010: 11,
      0b000100: 2,
      0b000110: 14,
      0b001000: 15,
      0b001010: 0,
      0b001100: 8,
      0b001110: 13,
      0b010000: 3,
      0b010010: 12,
      0b010100: 9,
      0b010110: 7,
      0b011000: 5,
      0b011010: 10,
      0b011100: 6,
      0b011110: 1,
      0b000001: 13,
      0b000011: 0,
      0b000101: 11,
      0b000111: 7,
      0b001001: 4,
      0b001011: 9,
      0b001101: 1,
      0b001111: 10,
      0b010001: 14,
      0b010011: 3,
      0b010101: 5,
      0b010111: 12,
      0b011001: 2,
      0b011011: 15,
      0b011101: 8,
      0b011111: 6,
      0b100000: 1,
      0b100010: 4,
      0b100100: 11,
      0b100110: 13,
      0b101000: 12,
      0b101010: 3,
      0b101100: 7,
      0b101110: 14,
      0b110000: 10,
      0b110010: 15,
      0b110100: 6,
      0b110110: 8,
      0b111000: 0,
      0b111010: 5,
      0b111100: 9,
      0b111110: 2,
      0b100001: 6,
      0b100011: 11,
      0b100101: 13,
      0b100111: 8,
      0b101001: 1,
      0b101011: 4,
      0b101101: 10,
      0b101111: 7,
      0b110001: 9,
      0b110011: 5,
      0b110101: 0,
      0b110111: 15,
      0b111001: 14,
      0b111011: 2,
      0b111101: 3,
      0b111111: 12,
      };

const S8 = {0b000000: 13,
      0b000010: 2,
      0b000100: 8,
      0b000110: 4,
      0b001000: 6,
      0b001010: 15,
      0b001100: 11,
      0b001110: 1,
      0b010000: 10,
      0b010010: 9,
      0b010100: 3,
      0b010110: 14,
      0b011000: 5,
      0b011010: 0,
      0b011100: 12,
      0b011110: 7,
      0b000001: 1,
      0b000011: 15,
      0b000101: 13,
      0b000111: 8,
      0b001001: 10,
      0b001011: 3,
      0b001101: 7,
      0b001111: 4,
      0b010001: 12,
      0b010011: 5,
      0b010101: 6,
      0b010111: 11,
      0b011001: 0,
      0b011011: 14,
      0b011101: 9,
      0b011111: 2,
      0b100000: 7,
      0b100010: 11,
      0b100100: 4,
      0b100110: 1,
      0b101000: 9,
      0b101010: 12,
      0b101100: 14,
      0b101110: 2,
      0b110000: 0,
      0b110010: 6,
      0b110100: 10,
      0b110110: 13,
      0b111000: 15,
      0b111010: 3,
      0b111100: 5,
      0b111110: 8,
      0b100001: 2,
      0b100011: 1,
      0b100101: 14,
      0b100111: 7,
      0b101001: 4,
      0b101011: 10,
      0b101101: 8,
      0b101111: 13,
      0b110001: 15,
      0b110011: 12,
      0b110101: 9,
      0b110111: 0,
      0b111001: 3,
      0b111011: 5,
      0b111101: 6,
      0b111111: 11,
      };

const S_BOXES = [S1, S2, S3, S4, S5, S6, S7, S8];

const PC_1 = [
    // Left half
    56, 48, 40, 32, 24, 16, 8,
    0, 57, 49, 41, 33, 25, 17,
    9, 1, 58, 50, 42, 34, 26,
    18, 10, 2, 59, 51, 43, 35,
    
    // Right half
    62, 54, 46, 38, 30, 22, 14,
    6, 61, 53, 45, 37, 29, 21,
    13, 5, 60, 52, 44, 36, 28,
    20, 12, 4, 27, 19, 11, 3
];

const PC_2 = [
    13, 16, 10, 23, 0, 4,
    2, 27, 14, 5, 20, 9,
    22, 18, 11, 3, 25, 7,
    15, 6, 26, 19, 12, 1,
    40, 51, 30, 36, 46, 54,
    29, 39, 50, 44, 32, 47,
    43, 48, 38, 55, 33, 52,
    45, 41, 49, 35, 28, 31
];

const IP = [
    57, 49, 41, 33, 25, 17, 9, 1,
    59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5,
    63, 55, 47, 39, 31, 23, 15, 7,
    56, 48, 40, 32, 24, 16, 8, 0,
    58, 50, 42, 34, 26, 18, 10, 2,
    60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6
];

const IP_INV = [
    39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30,
    37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28,
    35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26,
    33, 1, 41, 9, 49, 17, 57, 25,
    32, 0, 40, 8, 48, 16, 56, 24
];

const E_BOX = [
    31, 0, 1, 2, 3, 4,
    3, 4, 5, 6, 7, 8,
    7, 8, 9, 10, 11, 12,
    11, 12, 13, 14, 15, 16,
    15, 16, 17, 18, 19, 20,
    19, 20, 21, 22, 23, 24,
    23, 24, 25, 26, 27, 28,
    27, 28, 29, 30, 31, 0
];

const P_BOX = [
    15, 6, 19, 20, 28, 11, 27, 16,
    0, 14, 22, 25, 4, 17, 30, 9,
    1, 7, 23, 13, 31, 26, 2, 8,
    18, 12, 29, 5, 21, 10, 3, 24
];

const HALF_BLOCK_LENGTH = 32;
const BLOCK_LENGTH = 64;
const ROUND_KEY_LENGTH = 48;
const EFFECTIVE_KEY_LENGTH = 56;

function bitwiseXor(x, y) {
    return x.map((xi, i) => (parseInt(xi, 2) ^ parseInt(y[i], 2)).toString(2));
}

function ip(X) {
    return X.map((_, index) => X[IP[index]]);
}

function ip_inv(X) {
    return X.map((_, index) => X[IP_INV[index]]);
}

function eBox(R) {
    return Array(ROUND_KEY_LENGTH).fill(0).map((_, index) => R[E_BOX[index]]);
}

function keyMixing(R, roundKey) {
    return bitwiseXor(R, roundKey);
}

function sBox(R) {
    // Build an array of 6-bit substrings
    const subarrays = [];
    for (let i = 0; i < R.length; i += 6) {
        subarrays.push(R.slice(i, i + 6));
    }
    // Lookup each string in the appropriate S-box
    const substitution = subarrays.map((subarray, index) => S_BOXES[index][parseInt(subarray.join(''), 2)]);
    return Array.from(substitution.map(n => n.toString(2).padStart(4, "0")).join(''));
}

function pBox(R) {
    return R.map((_, index) => R[P_BOX[index]]);
}

function f(R, roundKey) {
    return pBox(sBox(keyMixing(eBox(R), roundKey)));
}

function performRound(L, R, roundKey) {
    return [R, bitwiseXor(L, f(R, roundKey))];
}

function leftRotate(X) {
    const res = X.slice(1);
    res.push(X[0]);
    return res;
}

function rightRotate(X) {
    const res = X.slice(0, X.length - 1);
    res.unshift(X[X.length - 1]);
    return res;
}

function pc1(key) {
    return key.map((_, index) => key[PC_1[index]]).slice(0, EFFECTIVE_KEY_LENGTH);
}

function pc2(partialRoundKey) {
    return partialRoundKey.map((_, index) => partialRoundKey[PC_2[index]]).slice(0, ROUND_KEY_LENGTH);
}

function nextRoundKey(tempRoundKey, i) {
    let L = tempRoundKey.slice(0, tempRoundKey.length / 2);
    let R = tempRoundKey.slice(tempRoundKey.length / 2, tempRoundKey.length);

    L = leftRotate(L);
    R = leftRotate(R);

    if (![1, 2, 9, 16].includes(i)) {
        L = leftRotate(L);
        R = leftRotate(R);
    }
    return L.concat(R);
}

function nextRoundKeyInv(tempRoundKey, i) {
    let L = tempRoundKey.slice(0, tempRoundKey.length / 2);
    let R = tempRoundKey.slice(tempRoundKey.length / 2, tempRoundKey.length);

    L = rightRotate(L);
    R = rightRotate(R);

    if (![1, 2, 9, 16].includes(i)) {
        L = rightRotate(L);
        R = rightRotate(R);
    }
    return L.concat(R);
}

function encrypt() {
    // Get the plaintext and encryption key (converting from hex to binary)
    const plaintext = Array.from(Array.from(document.getElementById("plaintext").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(4, "0")).join(''));
    // .value, 16).toString(2).padStart(BLOCK_LENGTH, "0"));
    const key = Array.from(Array.from(document.getElementById("encryptionKey").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(4, "0")).join(''));

    let tempRoundKey = pc1(key);

    // Perform an initial permutation
    const ip_res = ip(plaintext);

    let L = ip_res.slice(0, ip_res.length / 2);
    let R = ip_res.slice(ip_res.length / 2, ip_res.length);

    // Perform 16 rounds of operations
    for (let i = 1; i <= 16; i++) {
        tempRoundKey = nextRoundKey(tempRoundKey, i)
        let roundKey = pc2(tempRoundKey);
        [L, R] = performRound(L, R, roundKey);
    }
    const res = ip_inv(R.concat(L));
    // Get the final hex result
    let resHex = "";
    for (let i = 0; i < BLOCK_LENGTH; i += 4) {
        resHex += parseInt(res.slice(i, i + 4).join(''), 2).toString(16);
    }
    document.getElementById("encipheredMessage").innerHTML = resHex;
    // return ip_inv(R.concat(L));
}

function decrypt() {
    // Get the ciphertext and decryption key (converting from hex to binary)
    const ciphertext = Array.from(Array.from(document.getElementById("ciphertext").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(4, "0")).join(''));
    // .value, 16).toString(2).padStart(BLOCK_LENGTH, "0"));
    const key = Array.from(Array.from(document.getElementById("decryptionKey").value).map(symbol => parseInt(symbol, 16).toString(2).padStart(4, "0")).join(''));

    let tempRoundKey = pc1(key);
    let roundKey = pc2(tempRoundKey);

    // Perform an initial permutation
    const ip_res = ip(ciphertext);

    let L = ip_res.slice(0, ip_res.length / 2);
    let R = ip_res.slice(ip_res.length / 2, ip_res.length);

    // Perform 16 rounds of operations
    for (let i = 16; i >= 1; i--) {
        [L, R] = performRound(L, R, roundKey);
        tempRoundKey = nextRoundKeyInv(tempRoundKey, i)
        roundKey = pc2(tempRoundKey);
    }
    const res = ip_inv(R.concat(L));
    // Get the final hex result
    let resHex = "";
    for (let i = 0; i < BLOCK_LENGTH; i += 4) {
        resHex += parseInt(res.slice(i, i + 4).join(''), 2).toString(16);
    }
    document.getElementById("decipheredMessage").innerHTML = resHex;
    // return ip_inv(R.concat(L));
}