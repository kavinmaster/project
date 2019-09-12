//引入模块
let MovieHeadScorllModel = require("../model/MovieHeadScorllModel");
class MovieHeadServices {
  constructor() {}
  getCommentsWithCourse(courseId, callback) {
    //创建对象
    let movieHeadScorllModel = new MovieHeadScorllModel();
    movieHeadScorllModel.getConmentsByCourseId(courseId, function(data) {
      callback(data);
    });
  }
}

module.exports = MovieHeadServices;
