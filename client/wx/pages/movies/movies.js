// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    type:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //获得后台服务的数据
    wx.request({
      url: 'http://localhost:8888/items',
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res.data);
          // let imgUrls= res.data.imgUrls;
          let type = res.data;
          that.setData({  type: type });
        }
      }
    });
    wx.request({
      url: 'http://localhost:8888/comment',
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res.data);
          
          let imgUrls= res.data;
          that.setData({ imgUrls: imgUrls });
        }
      }
    }); 
  },
      toDetails: function () {
        wx.navigateTo({
          url: '../Details/Details',
        })
      }
    })