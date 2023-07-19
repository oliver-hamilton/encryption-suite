function encrypt() {
    // Get the plaintext, encryption key and row length
    let plaintext = document.getElementById("plaintext").value;
    let key = document.getElementById("encryptionKey").value;
    let rowLength = parseInt(document.getElementById("rowLengthEncrypt").value);
    let doubleTransposition = document.getElementById("doubleEncrypt").checked;

    // Pad the plaintext with Xs as needed
    if (plaintext.length % rowLength != 0) {
        plaintext = plaintext.padEnd(plaintext.length + (rowLength - plaintext.length % rowLength), "X");
    }

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

    // Repeat if double transposition
    if (doubleTransposition) {
        plaintext = ciphertext;
        ciphertext = "";
        for (let i = 0; i < key.length; i++) {
            let j = orderings.indexOf(i);
            while (j < plaintext.length) {
                ciphertext += plaintext.charAt(j);
                j += rowLength;
            }
        }
    }

    document.getElementById("encipheredMessage").innerHTML = ciphertext;
}

function decrypt() {
    // Get the ciphertext, encryption key and row length
    let ciphertext = document.getElementById("ciphertext").value;
    let key = document.getElementById("decryptionKey").value;
    let rowLength = parseInt(document.getElementById("rowLengthDecrypt").value);
    let doubleTransposition = document.getElementById("doubleDecrypt").checked;

    // Pad the ciphertext with Xs as needed
    if (ciphertext.length % rowLength != 0) {
        ciphertext = ciphertext.padEnd(ciphertext.length + (rowLength - ciphertext.length % rowLength), "X");
    }

    // Use the relative ordering of characters in the key to read out the columns in order
    let sortedChars = key.split('').sort();
    let orderings = key.split('').map(c => { let i = sortedChars.indexOf(c); sortedChars[i] = '\0'; return i; });

    let rowCount = ciphertext.length / rowLength;

    let plaintext = "";

    let rowIndex = 0;
    while (plaintext.length < ciphertext.length) {
        for (let i = 0; i < key.length; i++) {
            let j = orderings[i];
            plaintext += ciphertext.charAt(j * rowCount + rowIndex);
        }
        rowIndex++;
    }
    
    /*
        while (j < ciphertext.length) {
            plaintext += ciphertext.charAt(j);
            j += rowLength;
        }
    }
    */

    // Repeat if double transposition
    if (doubleTransposition) {
        ciphertext = plaintext;
        plaintext = "";
        rowIndex = 0;
        while (plaintext.length < ciphertext.length) {
            for (let i = 0; i < key.length; i++) {
                let j = orderings[i];
                plaintext += ciphertext.charAt(j * rowCount + rowIndex);
            }
            rowIndex++;
        }
    }

    document.getElementById("decipheredMessage").innerHTML = plaintext;
}