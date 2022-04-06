function palindrome(str) {
    var re = /[a-z]|[0-9]/gi;
    var reverse = [];
    
    let newStr = str.match(re);
    
    newStr.forEach(element => {
        reverse.unshift(element)
    });

    if(newStr.join("").toUpperCase() === reverse.join("").toUpperCase()) return true;
    else return false;
  }
  
(palindrome("1 eye for of 1 eye."));