const fibonacci = function(a) {
    if (a<0) {
        return "OOPS"
    }
    return fibGen(a)
    
}
function fibGen(a) {
    //1 + 1 + 2 + 3 + 5
    //1, 1, n[i-1] + n[i -2], 
    let fibSeries = [];
    if (fibSeries.length <2) {
        
    }
    for (let i = 0; i < a; i++) {
        b = fibSeries[i-1]+fibSeries[i-2]
        if (!b) {
            b = 1
        }
        fibSeries.push(b)
    }
    //console.log(fibGen);
    
    return fibSeries[a-1]
}
// Do not edit below this line

module.exports = fibonacci;
