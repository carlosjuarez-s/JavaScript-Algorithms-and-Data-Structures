function telephoneCheck(str) {
    const reg1 = /((^1\s|^1)([0-9]{3})(-|\s)([0-9]{3})(-|\s)([0-9]{4}))|^([0-9]{3})(-|\s)([0-9]{3})(-|\s)[0-9]{4}/
    const reg2 = /((^1\s|^1)([0-9]{3})[0-9]{3}[0-9]{4})|^([0-9]{3})([0-9]{3})[0-9]{4}$/
    const reg3 = /((^1\s|^1)(\({1}[0-9]{3}\){1})(\s{0,1})([0-9]{3})((\s{0,1})|-|[0-9]{4}))|^(\({1}[0-9]{3}\){1})(\s{0,1})([0-9]{3})(\s{0,1}|-{0,1})([0-9]{4})$/

    //Sacar los espacios y probar que quede un solo reg

    //const reg1 = /(^1\s|^1|^)([0-9]{3}-){2}[0-9]{4}/
    //const reg2 = /(^1\s|^1|^)([0-9]{3}){2}[0-9]{4}/
    //const reg3 = /(^1\s|^1|^)(\({1}[0-9]{3}\){1}|\s)([0-9]{3})(\s|-|[0-9]{4})/

    if(reg1.test(str) || reg2.test(str) || reg3.test(str)){
        return true
    }
    else return false
  }
  
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555)555-5555")); //false
console.log(telephoneCheck("555)555-5555")); //false
console.log("----")
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 555-555-5555")) //true
console.log(telephoneCheck("1 (555) 555-5555")) 
console.log("-------")
console.log(telephoneCheck("(6054756961)"))
console.log(telephoneCheck("2 (757) 622-7382"))
console.log(telephoneCheck("27576227382"))
console.log(telephoneCheck("(275)76227382"))