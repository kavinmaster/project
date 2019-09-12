//引入模块
let MoviePicturesModel = require("../model/MoviePicturesModel");
class PicturesService {
  constructor() {}
  getPictures(callback) {
    //创建对象
    let moviePicturesModel = new MoviePicturesModel();
    moviePicturesModel.getConmentsByCourseId(function(data) {
      callback(data);
    });
  }
}

module.exports = PicturesService;
