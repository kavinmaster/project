//引入模块
let MovieCourseService = require("./MovieCourseService");

class MovieIndexService {
  constructor() {}
  getData(callback) {
    let moviecourseservice = new MovieCourseService();
    //获得数据
    moviecourseservice.getCourses(function(courses) {
      callback(courses);
    });
  }
}

module.exports = MovieIndexService;
