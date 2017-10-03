var a,
    b,
    operation,
    plusOrMinus;

a = prompt('Enter a');
b = prompt('Enter b');

operation = (a * a) - (2 * a * b) + (b * b);

if (operation > 0) {
    plusOrMinus = "positive"
}  else if (operation < 0) {
    plusOrMinus = "negative"
} else {
    plusOrMinus = "nor positive neither negative"
};
        
              
document.getElementById("result").innerHTML = 'The result of the operation is:<br> ' + operation;

document.getElementById("result2").innerHTML = 'The result is ' + plusOrMinus;