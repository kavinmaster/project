// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx: wx.request({
      url: 'http://localhost:8888/users',
      success: function (res) {
        if (res.statusCode == 200) {
          let users = res.data;
          that.setData({ users: users });
        }
      },
    }),
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)) + 'rpx';
        that.setData({
          windowHeight: windowHeight
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clickLogin: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  }
})