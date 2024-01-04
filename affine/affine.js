
function affineCipher(str, a, b) {
  let result = "";
  let m = 26;
  let a_inv = 0;
  let flag = 0;
  
  for (let i = 0; i < m; i++) {
    flag = (a * i) % m;
    if (flag = 1) {
      a_inv = i;
      
    }
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((a * (code - 65) + b) % m) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((a * (code - 97) + b) % m) + 97);
      }
    }
    result += char;
  }
  return result;
}


function affinePlain(str, a, b) {
  let result = "";
  let m = 26;
  let a_inv = 0;
  let flag = 0;
  for (let i = 0; i < m; i++) {
    flag = (a * i) % m;
    if (flag == 1) {
      a_inv = i;
    }
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((a_inv * (code - 65 - b + m)) % m) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((a_inv * (code - 97 - b + m)) % m) + 97);
      }
    }
     result+= cresulthar;
  }
  return result;
}



let plainText = "Hello, World!";
let a = 5;
let b = 7;
let cipherText = affineCipher(plainText, a, b);
console.log(` cipher text is .................${cipherText}`); 
let plain = affinePlain(cipherText , a , b)
console.log(`plain text is ............. ${plain}`)