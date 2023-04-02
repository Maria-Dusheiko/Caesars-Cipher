function encrypt(str, n) {

  if (n <= 0) {
    return str;
  }
  
  let result = "";
 
  for (let l = 0; l < str.length; l++) {
    let numL = str.charCodeAt(l);
 
    if (numL < 65 || numL > 90) {
      result += str[l];
    } else {
      let numLC = numL - n;

    if (numLC > 90) {
        numLC -= 26;
      }
     if (numLC < 65) {
        numLC += 26;
      }
    
      result += String.fromCharCode(numLC);
    }
  }

  return result;
}
 
