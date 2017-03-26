const TablesModel = require('../TablesModel/TablesModel');

class UserModel extends TablesModel {
  constructor() {
    super();
  }

  saveUser(self, SignUpController, req, res, next) {
    const UserModel = self._user_model;
    const salt = SignUpController.getSalt;
    const username = SignUpController.getUsername;
    const password = SignUpController.getPassword;
    const firstName = SignUpController.getFirstName;
    const lastName = SignUpController.getLastName;
    const email = SignUpController.getEmail;
    const resolve = req.__previous__.resolve;

    self.getSync().then(() =>{
      console.log(firstName, lastName, email)
      UserModel.create({
          first_name: firstName,
          last_name: lastName,
          email: email,
          username: username,
          password: password,
          salt: salt
      }).then((user) =>{
        resolve(user['$options']);
      }).catch(console.log);
    })

  }
}

module.exports = UserModel;
