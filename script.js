var a = prompt("Number :")
var b = prompt("Square :")
console.log("Entered Numbers :", a, b);

var output = 1;

if (b >= 0){

for (var i = 0; i < b; i++) {
    output *= a
}
}
prompt("answer :" ,output) 
// else{
//     for(var i = 0; i > b; i--){
//         output /= a
//     }
// }
console.log("Result :",output);