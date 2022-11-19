const findTheOldest = function(a =[]) {
    const sorted = a.sort((last, current)=> {
        deathOne = last.yearOfDeath;
        deathTwo = current.yearOfDeath;
        if (!last.yearOfDeath) {
            deathOne = new Date().getFullYear();
        }
        if (!current.yearOfDeath) {
            deathTwo = new Date().getFullYear();
        }
        dateOne = deathOne - last.yearOfBirth;
        dateTwo = deathTwo - current.yearOfBirth;
        if (dateOne < dateTwo) {
            return 1;
        }
        else {
            return -1;
        }
    })
    console.log(sorted);
    
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
