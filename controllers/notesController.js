var Pipedrive = require("pipedrive");
var pd = new Pipedrive.Client("d8e1d4de076120a74f145416bd11d9f28f13459f", {strictMode : true});

module.exports.addNotes = function(req, res){
  pd.Notes.add(req.body, function(err, note){
    if(err)
      throw(err);
    res.json(note);
  })
};


module.exports.getAllNotes = function(req, res){
  pd.getAll('Notes', function(err, notes){
      if(err)
        throw(err);
      res.json(notes);
  })
};
