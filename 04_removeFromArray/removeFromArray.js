const removeFromArray = function (array, ...removes) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        let check = true;

        for (let remove of removes) {
            if (array[i] === remove) {
                check = false;
                break;
            }



        }

        if (check == true) {
            newArray.push(array[i]);
        }

        

    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
