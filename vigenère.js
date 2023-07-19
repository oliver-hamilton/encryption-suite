function encrypt() {
    // Get the plaintext, encryption key and row length
    let plaintext = document.getElementById("plaintext").value;
    let key = document.getElementById("encryptionKey").value;
    // Repeat the key to match the length of the plaintext, trimming the end if necessary
    let repeatedKey = key.repeat(Math.ceil(plaintext.length / key.length)).slice(0, plaintext.length);

    // Use modular arithmetic to compute each character of the ciphertext
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        let newAlphaIndex = ((plaintext.charCodeAt(i) - 97) + (repeatedKey.charCodeAt(i) - 97)) % 26;
        ciphertext += String.fromCharCode(newAlphaIndex + 97);
    }
    document.getElementById("encipheredMessage").innerHTML = ciphertext;
}

function decrypt() {
    // Get the ciphertext, encryption key and row length
    let ciphertext = document.getElementById("ciphertext").value;
    let key = document.getElementById("encryptionKey").value;
    // Repeat the key to match the length of the ciphertext, trimming the end if necessary
    let repeatedKey = key.repeat(Math.ceil(ciphertext.length / key.length)).slice(0, ciphertext.length);

    // Use modular arithmetic to compute each character of the plaintext
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        // Subtract instead of add for decryption
        let newAlphaIndex = ((ciphertext.charCodeAt(i) - 97) - (repeatedKey.charCodeAt(i) - 97) + 26) % 26;
        plaintext += String.fromCharCode(newAlphaIndex + 97);
    }
    document.getElementById("decipheredMessage").innerHTML = plaintext;
}