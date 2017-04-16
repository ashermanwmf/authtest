const ApplicationController = require('../ApplicationController/ApplicationController');
const axios = require('axios');
const stringify = require('json-stringify-safe');

class AuthController extends ApplicationController {
  constructor() {
    super();
  }

  login(req, res, next) {
    axios.post('http://localhost:3001/api/authenticate/user', req.body)
      .then(stringify)
      .then(JSON.parse)
      .then((data) =>{
        res.status(data.status)
          .send(data);
      })
      .catch(console.log);
  }

  signup(req, res, next) {
    axios.post('http://localhost:3001/api/create/user', req.body)
      .then(stringify)
      .then(JSON.parse)
      .then((data) =>{
        if (data.data.isNewRecord || data.status <= 200) {
          res.status(data.status)
            .send(data);
        } else {
          res.status(data.status)
            .send({message: new Error('Conflict, existing user')});
        }
      })
      .catch(console.log);
  }
}

module.exports = AuthController;
