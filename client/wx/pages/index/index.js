//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  locationMap: function () {
    wx.getLocation({ //获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function (res) {
        wx.openLocation({ //​使用微信内置地图查看位置。
          latitude: 30.620764407065654, //要去的纬度-地址
          longitude: 104.0968619411392, //要去的经度-地址
          name: "万达影城(锦华路万达店)",
          address: '锦华路一段68号万达广场3楼365号'
        })
      }
    })
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },
  toMovieView:function(){
    wx.navigateTo({
      url: '../movie/movie',
    })
  },
  toSellView: function () {
    wx.navigateTo({
      url: '../sell/sell',
    })
  }
})
