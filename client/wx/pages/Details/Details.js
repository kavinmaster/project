// pages/Details/Details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     isFold:true,
      indexImg:0,
  },
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },

  onLoad:function(){
    //获得传递过来的数据
    let that = this;
    //获得后台服务的数据
    wx.request({
      url: 'http://localhost:8888/MovieTopics',
      success: function (res) {
        if (res.statusCode == 200) {
          // let pictures = res.data.pictures;
          let topics = res.data;
          that.setData({ topics: topics});
        }
      }
    })
    wx.request({
      url: 'http://localhost:8888/MoviePicture',
      success: function (res) {
        if (res.statusCode == 200) {
          let pictures = res.data;
          // let topics = res.data.topics;
          that.setData({pictures: pictures });
        }
      }
    })
  }


})

