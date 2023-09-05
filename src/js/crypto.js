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

                // Om tecknet efter inte är ett o, eller om tecknet två steg bort inte är samma konsonant, returnera felmeddelande, för då är det inte rövarspråket.
                if (textToDecrypt[i + 1] !== 'o' || textToDecrypt[i + 2] !== textToDecrypt[i].toLowerCase()) {
                    return 'Please enter a valid bandit language string'
                }
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