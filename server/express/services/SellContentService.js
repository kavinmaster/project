//引入模块
let SellModel = require("../model/SellModel");
let SellContentModel = require("../model/SellContentModel");
class SellContentService {
  constructor() {}
  getSells(callback) {
    let sellModel = new SellModel();
    let sellContentModel = new SellContentModel();
    //获得数据
    sellModel.getAllSellContent(function(sells) {
      //获得每个sell
      for (let i = 0; i < sells.length; i++) {
        //获得sell的id
        let sell_id = sells[i].id;
        //根据sell_sid获得内容数据
        sellContentModel.getSellContentById(sell_id, function(sellcontent) {
          //每次取得的内容据放到sell里面
          sells[i].sellcontent = sellcontent;
          if (i == sells.length - 1) {
            callback(sells);
          }
        });
      }
    });
  }
}
module.exports = SellContentService;
