// Funktio, joka palauttaa totuusarvon sen mukaan, onko syöte palindromi vai ei.
function palindromi(sana) {
  sana = sana.toLowerCase();
  for (var i = 0; i < sana.length; i++) {
    if (sana.charAt(i) == sana.charAt(sana.length - 1 - i)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// palindromi(sana)-funktion testausta.
console.log("Sana kissa on palindromi: " + String(palindromi("kissa")));
console.log("Sana Imaami on palindromi: " + String(palindromi("Imaami")));
console.log(
  "Sana 546kkikk645 on palindromi: " + String(palindromi("546kkikk645"))
);

// Apufunktio HTML-sivua varten. Tulostaa joko "OLIHAN SE" tai "EI OLLUT" sivun tekstikenttään riippuen oliko syöte palindromi vai ei.
function palindromihtml() {
  if (palindromi(document.getElementById("teksti").value)) {
    document.getElementById("teksti").value = "OLIHAN SE";
  } else {
    document.getElementById("teksti").value = "EI OLLUT";
  }
}

// Tyhjentää tekstikentän, kun se aktivoidaan.
function tyhjenna(kohde) {
  kohde.value = "";
}
