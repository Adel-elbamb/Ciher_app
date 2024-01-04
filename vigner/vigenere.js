



function vigenereCipher(str, key) {
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        let keyChar = key[keyIndex % key.length];
        let keyOffset = keyChar.charCodeAt(0) - "A".charCodeAt(0);
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + keyOffset) % 26) + 65);
        } else {
          char = String.fromCharCode(((code - 97 + keyOffset) % 26)  +97);
        }
        keyIndex++;
      }
      result += char;
    }
    return result;
  }




function vigenereplain(str, key) {
  let result = "";
   let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZa ";
  let keyIndex = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let keyChar = key[keyIndex % key.length].toUpperCase();
      let keyIndexInAlphabet = alphabet.indexOf(keyChar);
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 - keyIndexInAlphabet + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 - keyIndexInAlphabet + 26) % 26) + 97);
      }
      keyIndex++;
    }
    result += char;
  }
  return result;
}



   let message = "HHello world ";
   let key = "GFFFFFFFFF";
 let cipherText = vigenereCipher(message, key);
 console.log(`cipher text is .................. ${cipherText}`); 

let plainText = vigenereplain(cipherText, key);
console.log(`plain text is....................... ${plainText}`); 