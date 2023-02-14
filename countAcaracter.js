let sentence = "Bonjour, chers candidats comment vous allez aujourd'hui";
function countAcaracter(sentence) {
  let compteur = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === 'a') {
      compteur++;
    }
  }
  return compteur;
}
console.log("Le nombre d'occurrences de 'a' est : ",countAcaracter(sentence)); 

module.exports = countAcaracter;