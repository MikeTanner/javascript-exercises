const sumAll = function(x=1,y=3) {
    var a,b;
    if (x < 0 || y < 0) {
        return "ERROR"
    }
    if ((typeof x != "number") || (typeof y != "number")) {
        return "ERROR"
    }

    if (x < y) {
        a = x;
        b = y;
    }
    else{
        a = y;
        b = x;
    }
    var sum = 0;
    for (let i = 0; i <= (b-a); i++) {
          sum += (a+i) 
    }
    return sum;
};
sumAll();

// Do not edit below this line
module.exports = sumAll;
