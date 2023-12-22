const mysql = require('mysql2');
import "./table"

// Créez une connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'm2lbinks',
});


// Connection à la base de données MySQL
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données MySQL :', err);
    return;
  }
  
  // 
  console.log('\x1b[32mConnecté\x1b[0m à la base de données');
  
  // À partir de cet instant, vous pouvez effectuer des opérations sur la base de données ici.
});
// Dans database.js
module.exports = db;
