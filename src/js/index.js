import { Crypto } from './crypto.js'
import readline from 'readline/promises'


const crypto = new Crypto()

async function readUserInput () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const userInput = await rl.question('What do you want to do? \n 1. Encrypt message.\n 2. Decrypt message \n')

  if (userInput === '1') {
    const messageToEncrypt = await rl.question('Input message to ecrypt: ')

    const result = crypto.encryptToBanditLanguage(messageToEncrypt)

    rl.write('Your encrypted message: ' + result)
  } else if (userInput === '2') {
    const messageToDecrypt = await rl.question('Input message to decrypt: ')

    const result = crypto.decryptFromBanditLanguage(messageToDecrypt)

    if (result === 'Please enter a valid bandit language string') {
      rl.write(result)
      rl.close()
      return
    }

    rl.write('Your decrypted message: ' + result)
  }

  rl.close()
}

readUserInput()