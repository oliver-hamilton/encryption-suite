function encrypt() {
    var fileInput = document.getElementById("fileInputEncrypt");
    var file = fileInput.files[0];
    var img = document.createElement("img");
    img.src = window.URL.createObjectURL(file);
    // img.style.maxWidth = "800px";
    // document.body.appendChild(img);

    // Get the message to hide
    var hiddenMessage = document.getElementById("hiddenMessageEncrypt").value;
    // Add a string of '#' characters to terminate the message in an identifiable way
    hiddenMessage += "###";
    // Convert to a binary string
    var messageBinary = "";
    for (let i = 0; i < hiddenMessage.length; i++) {
        let charCode = hiddenMessage.charCodeAt(i);
        messageBinary += charCode.toString(2).padStart(7, "0");
    }

    img.onload = function() {
        // Use a canvas
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Edit image using LSB insertion
        // var imgData = ctx.createImageData(1200, 800);
        //var data = imgData.data;
        var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // 4 components per pixel for RGBA
        let j = 0;
        for (var i = 0; j < messageBinary.length; i++) {
            if (i % 4 == 3) {
                continue;
            }
            if (i < pixels.data.length) {
                // let test0 = pixels.data[i];
                // let test = parseInt(messageBinary[i]);
                // let test2 = 2 * Math.floor(pixels.data[i]/2) + parseInt(messageBinary[i]);
                pixels.data[i] = 2 * Math.floor(pixels.data[i]/2) + parseInt(messageBinary[j]);
                j++;
            }
        }

        ctx.putImageData(pixels, 0, 0);

        // Prompt user for download
        var link = document.createElement("a");
        link.download = "filename";
        link.href = canvas.toDataURL();
        link.click();

        /*
        var img2 = document.createElement("img");
        img2.src = canvas.toDataURL();
        document.body.appendChild(img2);
        */
    }
}

function decrypt() {
    var fileInput = document.getElementById("fileInputDecrypt");
    var file = fileInput.files[0];
    var img = document.createElement("img");
    img.src = window.URL.createObjectURL(file);
    // img.style.maxWidth = "800px";
    // document.body.appendChild(img);

    // Build a binary message string
    var messageBinary = "";

    img.onload = function() {
        // Use a canvas
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Edit image using LSB insertion
        // var imgData = ctx.createImageData(1200, 800);
        //var data = imgData.data;
        var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // 4 components per pixel for RGBA
        const terminationString = "#".charCodeAt(0).toString(2).padStart(7, "0").repeat(3);
        let i = 0;
        // let j = 0;
        while (messageBinary.slice(-21) != terminationString && i < pixels.data.length) {
            if (i % 4 != 3) {
                // let test = pixels.data[i];
                messageBinary += (pixels.data[i] % 2).toString();
            }
            i++;
        }

        
        // Convert binary to string message
        var hiddenMessage = "";
        for (let i = 0; i < messageBinary.length; i += 7) {
            let charCode = parseInt(messageBinary.slice(i, i + 7), 2);
            hiddenMessage += String.fromCharCode(charCode);
        }
        

        // Output the hidden message without the termination characters
        var outputElement = document.getElementById("decryptedMessage");
        outputElement.innerHTML = hiddenMessage.slice(0, -3);

        
        // var img2 = document.createElement("img");
        // img2.src = canvas.toDataURL();
        // document.body.appendChild(img2);
        
    }
}