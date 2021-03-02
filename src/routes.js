const express = require('express')

const routes = express.Router()
 
const UserController = require('./controllers/UserController') 

const SessionController = require('./controllers/SessionController') 

const AffiliateController = require('./controllers/AffiliateController') 


routes.post('/user', UserController.store)
routes.post('/sessions', SessionController.store)
routes.get('/users', UserController.index)

routes.post('/affiliate', AffiliateController.store)
routes.get('/affiliates', AffiliateController.index)


module.exports = routes