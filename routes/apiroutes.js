var path = require("path");
var fs = require("fs");
var notes = require("../db.json");
// var noteFile = JSON.parse(notes)

module.exports = function(app) {
// Write api routes to export here
app.post("/api/notes", function(req, res) {
    




    var newNote = req.body;
  
    console.log(newNote);
  
    // We then add the json the user sent to the character array
    notes.push(newNote);
    const data = JSON.stringify(notes)
    console.log('updated notes', data)
    fs.writeFile('./db.json',data,  (err) => {
      if (err) throw err;
      fs.readFile("./db.json", "utf8", function(error, note) {

        if (error) {
          return console.log(error);
        }
        var noteArray = JSON.parse(note);

        

        var i;
        for (i = 0; i <= noteArray.length; i++){
          noteArray[i].id = i++;
        }

        console.log('new note array',noteArray);

        
      
      });
      
    })
  
    // We then display the JSON to the users
    
   res.json(newNote);
  });
  // API GET route
  app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// app.delete("/api/notes/:id", function(req, res) {
//   var noteId = req.params.id;

//   console.log(noteId);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });






};




