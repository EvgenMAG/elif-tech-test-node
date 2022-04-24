const express = require('express')
const contactsControllers = require('../controllers/contacts')
const router = express.Router()

var bodyParser = require('body-parser')
 
var app = express()
 
// create application/json parser
var jsonParser = bodyParser.json()

router
  .get('/', contactsControllers.listContacts)
  .get('/:contactId',  contactsControllers.getContactById)
  .post('/', jsonParser, contactsControllers.addContact)
  .delete('/:contactId',  contactsControllers.removeContact)
  .put('/:contactId', jsonParser, contactsControllers.updateContact)
  // .patch('/:contactId/favorite',  contactsControllers.updateStatusContact)

module.exports = router
