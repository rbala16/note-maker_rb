const fs = require('fs');
const util = require('util');
const router = require('express').Router();
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
var notesData;

//GET REQUEST
router.get('api/notes',(req,res)=>{
  readFileAsync('db/db.json','utf8').then(function(data){
    notesData = JSON.parse(data);
    res.json(notesData);
  });

});

//POST REQUEST