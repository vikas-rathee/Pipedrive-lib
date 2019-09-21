(function(){
  var Pipedrive = require("pipedrive");
  var pd = new Pipedrive.Client("d8e1d4de076120a74f145416bd11d9f28f13459f", {strictMode : true});
  var SVobj = {"name": "SV Stop",
               "field_type": "enum",
               "options": ["Yes","No"]};

  pd.PersonFields.add(SVobj, function(err, data){
    if(err)
      throw(err);
    console.log(data);
  })
})();
