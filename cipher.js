function shiftCipher(str, key) {
  let result = ""
  let numL
  for (let l = 0; l < str.length; l++){
     numL = str.charCodeAt(l)    // number unicode
   
    if (numL >= 65 & numL < 78) {
      numL += key
    let numLC = String.fromCharCode(numL); //number  unicode cipher
       result += numLC;
 
    } else if (numL >= 78 & numL <= 90) {
      numL -= key
    let numLC = String.fromCharCode(numL);
       result += numLC
     
    } else if (numL < 65 | numL > 90) {
    let numLC = String.fromCharCode(numL);
     result += numLC
    }
 
  }
    return result
 }
 
