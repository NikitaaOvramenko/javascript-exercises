const sumAll = function(start,end) {

    let sum = 0;

    if((start < 0) || (end < 0)){
        return "ERROR";
    }

    if(isNumber(start) == false || isNumber(end) == false){
        return "ERROR";
    }
    

     if(start < end){
        
        for(let i = start; i <= end; i++){
            sum += i;
        }
     }

     else if(start > end){
        
        for(let i = end; i <= start; i++){
            sum += i;
        }
     }
    
    

    
    

    return sum;
};

function isNumber(value) {
    return typeof value === 'number';
  }

// Do not edit below this line
module.exports = sumAll;
