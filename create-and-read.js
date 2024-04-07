const fs = require('fs');

// Création du fichier welcome.txt avec le texte "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');



// Lecture et affichage du contenu de welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  