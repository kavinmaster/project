// pages/sell/sell.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: null,
    Selectindex:0,
    items: [{
      id: 0,
      title: '冰淇淋',
    },
      {
        id: 1,
        title: '正版电影周边',
      },
      {
        id: 2,
        title: '特惠套餐',
      },
      {
        id: 3,
        title: '爆米花',
      },
      {
        id: 4,
        title: '碳酸饮料',
      },
      {
        id: 5,
        title: '瓶装饮料',
      },
      {
        id: 6,
        title: '现调饮料',
      },
      {
        id: 7,
        title: 'COSTA咖啡',
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)) - 100+ 'rpx';
        console.log(windowHeight);
        that.setData({
          windowHeight: windowHeight
        });
      }
    })
  },

  onclickTop: function (res) {
    let index = res.currentTarget.dataset.change;
    this.setData({
      Selectindex: index
    });
  } 
})