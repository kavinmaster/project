// pages/sell/sell.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: null,
    sells: [],
    sellcontent:[],
    sellsIndex: 0
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
    //获得后台服务的数据
    wx.request({
      url: 'http://localhost:8888/sell',
      success: function (res) {
        if (res.statusCode == 200) {
          let sells = res.data;
          let sellcontent=res.data;    
          for (let i = 0; i < sells.length; i++) {
            for (let j = 0; j < sells[i].sellcontent.length; j++) {
              sells[i].sellcontent[j].isSwitch = false;
            }
          }
          that.setData({
             sells: sells,
            sellcontent: sellcontent
            });
            app.globalData.sells=sells;
        }
        console.log(res)
      }
    })
  },
  onclickTop: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.change;
    //把index换成id
    this.setData({
      sellsIndex: id
    });
  },
  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../examinationInfor/examinationInfor',
    })
  },
  
})