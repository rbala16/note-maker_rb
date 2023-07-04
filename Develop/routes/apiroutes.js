const fs = require('fs');
const util = require('util');
const router = require('express').Router();
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
var notesData