var Pipedrive = require("pipedrive");
var pd = new Pipedrive.Client("d8e1d4de076120a74f145416bd11d9f28f13459f", {strictMode : true});


module.exports.addPerson = function(req, res){
  pd.Persons.add(req.body, function(err, data){
    if(err)
      throw(err);
    res.json(data);
  })
};

module.exports.getAllPersons = function(req, res){
    pd.getAll('Persons', function(err, data){
      if(err)
        res.json(err);
      res.json(data);
    })
};

module.exports.getPersonByName = function(req, res){
  console.log(req.params.pname);
  pd.Persons.find({term : req.params.pname}, function(err, data){
    if(err)
      throw(err);
    res.json(data);
  })
};

module.exports.getPersonById = function(req, res){
  pd.Persons.get(req.params.pid, function(err, data){
    if(err)
      throw(err);
    res.json(data);
  })
};

module.exports.updatePerson = function(req, res){
  pd.Persons.update(req.params.pid, req.body, function(err, data){
    if(err)
      throw(err);
    res.json(data);
  })
};

module.exports.deletePersonById = function(req, res){
  pd.Persons.remove(req.params.pid, function(err, data){
    if(err)
      throw(err);
    res.json(data);
  })
};
