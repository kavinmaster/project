//引入模块
let UserService = require("./UserService");

class IndexService {
  constructor() {}
  getData(callback) {
    let userService = new UserService();
    //获得数据
    userService.getUser(function(users) {
      callback(users);
    });
  }
}

module.exports = IndexService;
