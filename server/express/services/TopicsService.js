//引入模块
let CourseModel = require("../model/TopicsModel");
class TopicsService {
  constructor() {}
  getCourses(callback) {
    let courseModel = new CourseModel();
    //获得数据
   courseModel.getAllCourse(function(courses) {
      //获得每个课程
     callback(courses);
    });
  }
}

module.exports = TopicsService;
