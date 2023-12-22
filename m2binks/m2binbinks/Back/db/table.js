import db from "./database";
const bcrypt = require('bcrypt'); // pour crypter Hasher le mdp(espece de fdp de timo)

const utilisateur = `
  CREATE TABLE IF NOT EXISTS utilisateur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    adresse_email VARCHAR(255) NOT NULL,
    mdp VARCHAR(255) NOT NULL
  )
`;


// Fonction pour insérer un utilisateur avec un mot de passe haché dans la base de données
const insertUtilisateur = (utilisateur) => {
  // Générez un sel (salt) pour le hachage
  const saltRounds = 10; // Le nombre de tours de hachage 
  
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.error('Erreur lors de la génération du sel :', err);
      return;
    }
    
    // Hachez le mot de passe avec le sel
    bcrypt.hash(utilisateur.mdp, salt, (err, hash) => {
      if (err) {
        console.error('Erreur lors du hachage du mot de passe :', err);
        return;
      }
      
      
      // Insérez 'hash' dans la base de données au lieu du mot de passe en texte brut
      // Vous pouvez utiliser 'hash' comme valeur pour le champ 'mdp' dans la table utilisateur
      utilisateur.mdp = hash; // Mettez à jour le mot de passe avec le hachage
      
      // Maintenant, vous pouvez insérer l'utilisateur dans la base de données
      const UtilisateurBDD = 'INSERT INTO formation SET ?'; // Utilisez UtilisateurBDD au lieu de insertUtilisateur ici
      db.query(UtilisateurBDD, formation, (err, results) => {
        if (err) {
          console.error('Erreur lors de l\'insertion de l\'utilisateur :', err);
        } else {
          console.log('Utilisateur inséré avec succès !');
        }
      });
    });
  });
};

// Créez la table utilisateur
db.query(utilisateur, (err, results) => {
  if (err) {
    console.error('Erreur lors de la création de la table utilisateur :', err);
  } else {
    console.log('Table utilisateur créée avec succès !');
    
    // insertion d'un utilisateur
    const util = {
      id: 'Timothée',
      nom: 'Levasseur',
      date_heure: 'leglandeur@timo.com',
       // Le mot de passe en texte brut que vous voulez insérer
    };
    
    // Insérez l'utilisateur dans la base de données (le mot de passe sera haché)
    insertUtilisateur(util);
  }
});


// Formation