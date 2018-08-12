var fs = require('file-system');
var imageAsBase64 = fs.readFileSync('./Mona.jpg', 'base64');
console.log(imageAsBase64);
