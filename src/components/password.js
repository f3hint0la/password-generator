const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const symbols = "!@#$%^&*";

export default function generatePassword(length, setting) {
  let password = "";
  const characterList = [];

  if (setting.lowerCase === true) characterList.push("lowcase");
  if (setting.upperCase === true) characterList.push("upcase");
  if (setting.number === true) characterList.push("num");
  if (setting.symbol === true) characterList.push("sym");
  if (setting.excludeSimilarChars === true) characterList.push("exclude");

  for (let i = 0; i <= length - 1; i++) {
    const characterIndex =
      characterList[Math.floor(Math.random() * characterList.length)];

    if (characterIndex === "lowcase") {
      password += getRandomIndex(lowerCaseLetters);
    } else if (characterIndex === "upcase") {
      password += getRandomIndex(upperCaseLetters);
    } else if (characterIndex === "num") {
      password += getRandomIndex(numeric);
    } else if (characterIndex === "sym") {
      password += getRandomIndex(symbols);
    }
  }
  return password;
}

function getRandomIndex(option) {
  const randomIndex = option[Math.floor(Math.random() * option.length)];
  return randomIndex;
}
