function rot13(str) {
    let arr = str.split("")
    let re = /\w/
    let output = []
    
    arr.forEach(element => {
        if(re.test(element)) {
            let i = 1
            element = element.charCodeAt();
            while(i <= 13) {
                if(element == 65) element = 91;
                element--;
                i++;
            }
            output.push(String.fromCharCode(element))
        } else output.push(element)
    });
    
    return output.join("");
  }
  
console.log(rot13("SERR PBQR PNZC"));