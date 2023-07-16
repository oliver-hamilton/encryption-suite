function encrypt() {
    var input = document.getElementsByTagName("input")[0];
    var file = input.files[0];
    var img = document.createElement("img");
    img.src = window.URL.createObjectURL(file);
    img.width = 1200;
    img.height = 800;
    document.body.appendChild(img);

    // Use a canvas
    var canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 800;
    var ctx = canvas.getContext("2d");
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Edit image using LSB insertion
        // var imgData = ctx.createImageData(1200, 800);
        //var data = imgData.data;
        var pixels = ctx.getImageData(0, 0, 1200, 800);
        // 4 components per pixel for RGBA
        
        for (var i = 0; i < pixels.data.length; i++) {
            pixels.data[i] = 2 * Math.floor(pixels.data[i]/2); // + hiddenMessage[i];
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