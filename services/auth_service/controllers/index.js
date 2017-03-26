const LoginController = require('./LoginController/index');
const SignUpController = require('./SignUpController/index');
const UserModel = require('../models/UserModel/index');

module.exports = (app) =>{

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  /** Login **/
  app.post('/api/authenticate/user', LoginController.authenticate.bind(app, LoginController));

  /** SignUp **/
  app.post('/api/create/user', 
    SignUpController.createUser.bind(app, SignUpController),
    UserModel.saveUser.bind(app, UserModel, SignUpController)
  );

};
