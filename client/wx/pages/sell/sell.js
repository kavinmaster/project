// pages/sell/sell.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: null,
    index:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)) - 100+ 'rpx';

        that.setData({
          windowHeight: windowHeight
        });
      }
    })
  },

  onclickTop: function (res) {
    let id = res.currentTarget.dataset.change;
    console.log(id);
    this.setData({
      index: id
    });
  },
  

  
 
})