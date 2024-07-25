const palindromes = function (sentence) {


    let clearSen = sentence.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '');
    clearSen = clearSen.toLowerCase();
    



    let reverseSen = "";
   for(let i = clearSen.length - 1 ; i >= 0; i--){

    
    reverseSen += clearSen[i];
   }

   console.log(reverseSen);

   if(reverseSen == clearSen){
    return true;
   }

   else {
    return false;
   }
};

// Do not edit below this line
module.exports = palindromes;
