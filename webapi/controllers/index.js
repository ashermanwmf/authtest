const AuthController = require('./AuthController/index');

module.exports = (app) =>{
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  /** Auth **/
  app.post('/api/login', AuthController.login);
  app.post('/api/signup', AuthController.signup);

};
