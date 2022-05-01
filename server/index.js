const path = require('path');
const express = require('express');


const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  //res.json({ message: "Hello from server!" });
  res.json({ message: req });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});




// Accesso e prova database

// //npm install mysql
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "sql11.freesqldatabase.com",
//   user: "sql11488806",
//   password: "MPMhsFiUp1",
//   database: "sql11488806"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// /*con.query("SELECT * FROM Utente", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });*/

// con.query("SELECT * FROM Libri", function (err, result, fields) {
//     if (err) throw err;
//     for(var x of result) console.log(x.Titolo)
//     /*console.log(result[0].Titolo);
//     console.log(result[0].Autore);
//     console.log(result[0].ISBN);
//     console.log(result[0].DataAggiunta);
//     console.log(result[0].DataEliminazione);
//     console.log(result[0].Trama);
//     console.log(result[0].NumeroLetture);*/
//   });
