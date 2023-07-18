function encrypt() {
    // Get the plaintext and encryption key
    let plaintext = document.getElementById("plaintext").value;
    let key = document.getElementById("encryptionKey").value;

    // Repeat the key for the length of the plaintext
    let repeatedKey = key.repeat((plaintext.length / key.length) + 1).slice(0, plaintext.length);

    let ciphertext = "";
    // Perform the encryption bitwise
    for (let i = 0; i < plaintext.length; i++) {
        ciphertext += (parseInt(plaintext.charAt(i)) ^ parseInt(repeatedKey.charAt(i))).toString();
    }

    document.getElementById("encipheredMessage").innerHTML = ciphertext;

}

function decrypt() {
    // Get the ciphertext and decryption key
    let ciphertext = document.getElementById("ciphertext").value;
    let key = document.getElementById("decryptionKey").value;

    // Repeat the key for the length of the plaintext
    let repeatedKey = key.repeat((ciphertext.length / key.length) + 1).slice(0, ciphertext.length);

    let plaintext = "";
    // Perform the encryption bitwise
    for (let i = 0; i < ciphertext.length; i++) {
        plaintext += (parseInt(ciphertext.charAt(i)) ^ parseInt(repeatedKey.charAt(i))).toString();
    }

    document.getElementById("decipheredMessage").innerHTML = plaintext;
}