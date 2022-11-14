const removeFromArray = function(arr = [], ...theArgs) {
    var filtered = arr;
    for (const elem of theArgs) {


        filtered = filtered.filter(i => {
            
            
            return ((i != elem) || (typeof i != typeof elem))
            


        })

        }
        console.log(filtered);
        return filtered;
    }


    
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);


// Do not edit below this line
module.exports = removeFromArray;
