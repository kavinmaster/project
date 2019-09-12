//引入模块
let UserModel = require("../model/UserModel");
class UserService {
  constructor() {}
  getUser(callback) {
    let userModel = new UserModel();
    //获得数据
    userModel.getAllUser(function(users) {
      //获得每个课程
      callback(users);
    });
  }
}

module.exports = UserService;
