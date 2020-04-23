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

        

        
        for (var i = 0; i < noteArray.length; i++){
          console.log(noteArray)
          noteArray[i].id = i+1;
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

app.delete("/api/notes/:id", function(req, res) {
  var id = req.params.id;

  console.log(id);

  var deleteArray = noteArray.filter(noteArray => noteArray.id != id)
  console.log(deleteArray)
  
});






};




