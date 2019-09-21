var Pipedrive = require("pipedrive");
var pd = new Pipedrive.Client("d8e1d4de076120a74f145416bd11d9f28f13459f", {strictMode : true});



module.exports.getPersonDetails = function(req, res){
  var action = req.body.meta.action;
  var id = req.body.meta.id;
  pd.Persons.get(id, function(err, person){
    person.flag = action;
    console.log(person);
  })

};
