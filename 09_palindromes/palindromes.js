const palindromes = function (a = "") {
    a = a.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '');
    //iter thru string, concat
    let reverse = ""
    for (const i of a) {
        reverse = i+reverse
    }
    console.log(reverse, a)
    return reverse == a;
};
/* palindromes("greg.")
 */// Do not edit below this line
module.exports = palindromes;
