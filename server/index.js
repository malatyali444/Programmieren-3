var os = require("os");
var message = "Die Plattform ist " ;
function main (){
console.log(message + os.platform());
}
main();