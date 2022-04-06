function convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var response = '';
  
    for(let i of Object.keys(roman)) { 
        let div = Math.floor(num / roman[i])
        num = num - (div * roman[i])
        response += i.repeat(div)
    }
    
  
    return response;
  }

console.log(convertToRoman(299))