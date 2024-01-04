function caesarCipher(str, shift) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i); 
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code -65 + shift) % 26) +65 );
        } else {
          char = String.fromCharCode(((code -97  + shift) % 26)+97 );
        }
      }
      result += char;
    }

    return result;
  }
  


  function caesarPlain(str, shift) {
    let result = "";
    let i=0;
    while(i<str.lenght){
      i++;
    }
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  }

 

 let message ="hello world  ";
let shift = 3;
let encryptedMessage = caesarCipher(message, shift);
console.log(`cipher text is ............${encryptedMessage}`); // "KHOOR ZRUOG"
 let message2 =  encryptedMessage
let decrypetMessage =  caesarPlain(message2 , shift)
 console.log(`plain text is.......... ${decrypetMessage}`)





