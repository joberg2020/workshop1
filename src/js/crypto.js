export class Crypto {

    consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']

    constructor() {}

    encryptToBanditLanguage (textToEncrypt) {
        let encryptedText = ''
        for (const char of textToEncrypt) {
            const lowChar = char.toLowerCase()
            if (this.consonants.includes(lowChar)) {
                encryptedText += char + 'o' + char.toLowerCase()
            }
            else {
                encryptedText += char
            }
        }
        return encryptedText
    }

    decryptFromBanditLanguage(textToDecrypt) {
        let decryptedText = ''
        // Om tecknet inte är konsonant   exempeltext: HoHejoj vovärorloldodenon
        for (let i = 0; i < textToDecrypt.length; i++) {
            if (this.consonants.includes(textToDecrypt[i].toLowerCase())) {
                decryptedText += textToDecrypt[i]
                i += 2
            }
            else {
                decryptedText += textToDecrypt[i]
            }
        }
        return decryptedText
    }
}