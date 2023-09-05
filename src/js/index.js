import { Crypto } from './crypto.js';

 const crypto = new Crypto()
 const result = crypto.encryptToBanditLanguage('Hej världen')
 console.log('Hej världen blir: ' + result)

 const decrypted = crypto.decryptFromBanditLanguage(result)
 console.log('Decrypted text: ' + decrypted)

 const resultHard = crypto.encryptToBanditLanguage('rovdjursattack med hoovercraft')
 console.log('rovdjursattack med hoovercraft blir: ' + resultHard)

 const decryptedHard = crypto.decryptFromBanditLanguage(resultHard)
 console.log('Decrypted hard text: ' + decryptedHard)

 const resultHard2 = crypto.encryptToBanditLanguage('vov, vovvov!')
 console.log('vov, vovvov!: ' + resultHard2)

 const decryptedHard2 = crypto.decryptFromBanditLanguage(resultHard2)
 console.log('Decrypted hard text: ' + decryptedHard2)