const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function cipher(text, shift) {
  text = text.split("");
  return text.map(char => {
    if (alphabet.includes(char)) {
      let position = (alphabet.indexOf(char) + shift) % alphabet.length;
      position = position < 0 ? alphabet.length + position : position
      return alphabet[position];
    }
    if (alphabetUp.includes(char)) {
      let position = (alphabetUp.indexOf(char) + shift) % alphabetUp.length;
      position = position < 0 ? alphabetUp.length + position : position
      return alphabetUp[position];
    }
    return char;
  }).join('');
}

module.exports = cipher;
