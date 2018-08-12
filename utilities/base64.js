var fs = require('fs');
var imageAsBase64 = fs.readFileSync('./Mona.jpg', 'base64');
console.log(imageAsBase64);
