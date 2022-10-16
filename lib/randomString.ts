const alphabet =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789'

const alphabetLength = alphabet.length

export function randomString(length: number) {
  let randomCharacters = ''

  for (let i = 0; i < length; i++) {
    let randomDecimal = Math.random()
    let randomIndex = randomDecimal * alphabetLength
    randomCharacters += alphabet.charAt(randomIndex)
  }

  return randomCharacters
}

export default randomString
