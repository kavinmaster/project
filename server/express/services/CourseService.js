//引入模块
let CourseModel = require("../model/CourseModel");
//let ChaptersModel = require("../model/ChaptersModel");
class CourseService {
  constructor() {}
  getCourses(callback) {
    let courseModel = new CourseModel();
   // let chaptersModel = new ChaptersModel();
    //获得数据
    courseModel.getAllCourse(function(courses) {
      //获得每个课程
      callback(courses);
        });
      }
    }
  


module.exports = CourseService;
