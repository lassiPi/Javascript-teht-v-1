// Ohjelma, joka lukee käyttäjän syötteen ja kertoo onko se palindromi (komentorivi).

// Luetaan käyttäjän syöte readline-moduulin avulla.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Kysytään käyttäjältä merkkiriviä ja tulostetaan, onko se palindromi vai ei.
rl.question("Syötä sana: ", function (merkkijono) {
  console.log(palindromiNode(merkkijono));
  rl.close();
});

// Tulostaa komentoriville, onko syöte palindromi vai ei.
function palindromiNode(sana) {
  var alkupsana = sana;
  sana = sana.toLowerCase();
  for (var i = 0; i < sana.length; i++) {
    if (sana.charAt(i) == sana.charAt(sana.length - 1 - i)) {
      continue;
    } else {
      return console.log("Sana " + alkupsana + " ei ole palindromi.");
    }
  }
  return console.log("Sana " + alkupsana + " on palindromi.");
}
