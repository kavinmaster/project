let SellService = require("../services/SellService");
module.exports.sell = function(req, res) {
  //从用户请求里面取得里面的数据,用户请求在req
  let sell_id = req.query.sell_id;
  //把解析出来的数据交给业务逻辑层
  let sellService = new SellService();
  sellService.getData(sell_id, function(ob) {
    res.json(ob);
  });
  //把业务逻辑层返回的数据发回给客户端
  console.log(sell_id);
};
