// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["	https://movie-1300072979.cos.ap-chengdu.myqcloud.com/movie_scroll2.png",
    "	https://movie-1300072979.cos.ap-chengdu.myqcloud.com/movie_scroll1.png"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toDetails: function(){
    wx.navigateTo({
      url: '../Details/Details',
    })
  }

  
})