function encrypt() {
    // Get the plaintext, encryption key and row length
    let plaintext = document.getElementById("plaintext").value;
    let key = document.getElementById("encryptionKey").value;
    let rowLength = parseInt(document.getElementById("rowLengthEncrypt").value);

    // Pad the plaintext with Xs as needed
    plaintext = plaintext.padEnd(plaintext.length + (rowLength - plaintext.length % rowLength), "X");

    // Use the relative ordering of characters in the key to read out the columns in order
    let sortedChars = key.split('').sort();
    let orderings = key.split('').map(c => { let i = sortedChars.indexOf(c); sortedChars[i] = '\0'; return i; });

    let ciphertext = "";

    for (let i = 0; i < key.length; i++) {
        let j = orderings.indexOf(i);
        while (j < plaintext.length) {
            ciphertext += plaintext.charAt(j);
            j += rowLength;
        }
    }
    document.getElementById("encipheredMessage").innerHTML = ciphertext;
}

function decrypt() {

}