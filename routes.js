var express = require("express");
var router = express.Router();
var notesController = require("./controllers/notesController");
var personController = require("./controllers/personController");




router.post("/addPerson", personController.addPerson);
router.get("/getAllPersons", personController.getAllPersons);
router.get("/getPersonByName/:pname", personController.getPersonByName);
router.get("/getPersonById/:pid", personController.getPersonById);
router.put("/updatePerson/:pid", personController.updatePerson);
router.delete("/deletePersonById/:pid", personController.deletePersonById);



router.post("/addNotes", notesController.addNotes);
router.get("/getAllNotes", notesController.getAllNotes);



module.exports = router;
