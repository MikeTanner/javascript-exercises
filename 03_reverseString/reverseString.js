const reverseString = function(str="") {
    output = "";
    for (let i = str.length; i > 0; i--) {
        output += str[i-1];
        
    }
    console.log(output)
    return output;

};
reverseString("str")

// Do not edit below this line
module.exports = reverseString;
