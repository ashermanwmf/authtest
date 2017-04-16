const TablesModel = require('../TablesModel/TablesModel');

class UserModel extends TablesModel {
  constructor() {
    super();
  }

  saveUser(self, req, res, next) {
    // TODO: Investigate weird switch to res from previously set req.
    const UserModel = self._user_model;
    const username = res.__previous__.username;
    const password = res.__previous__.password;
    const salt = res.__previous__.salt;
    const firstName = res.__previous__.first_name;
    const lastName = res.__previous__.last_name;
    const email = res.__previous__.email;
    const resolve = res.__previous__.resolve;

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
