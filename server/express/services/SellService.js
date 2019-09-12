//引入模块
let SellContentService = require("./SellContentService");
class SellServices {
  constructor() {}
  getData(sell_id,callback) {
    //创建对象
    let sellContentService = new SellContentService();
    sellContentService.getSells(function(sells) {
      callback(sells);
    });
  }
}
module.exports = SellServices;
