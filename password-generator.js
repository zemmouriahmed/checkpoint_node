const generatePassword = require('generate-password');

// Générer un mot de passe aléatoire
const password = generatePassword.generate({
    length: 10, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    symbols: true, // Inclure des symboles
    uppercase: true, // Inclure des lettres majuscules
    lowercase: true, // Inclure des lettres minuscules
});

console.log(password);
