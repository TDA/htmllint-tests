var htmllint = require('htmllint');
var opts = {

};

// uses a default, global linter instance
var output = htmllint('./danish.html', opts);
console.log(output);
