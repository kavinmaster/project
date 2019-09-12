//引入模块
let MovieItemsModel = require("../model/MovieItemsModel");
//let ChaptersModel = require("../model/ChaptersModel");
class MovieCourseService {
  constructor() {}
  getCourses(callback) {
    let movieitemsmodel = new MovieItemsModel();
   // let chaptersModel = new ChaptersModel();
    //获得数据
    movieitemsmodel.getAllCourse(function(courses) {
      //获得每个课程
      callback(courses);
        });
      }
    }
  


module.exports = MovieCourseService;
