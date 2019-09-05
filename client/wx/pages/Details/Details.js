// pages/Details/Details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     isFold:true,
      indexImg:0,
      topics:[
      {
          id: 0,
          name: "大卫▪雷奇",
          play: "导演",
        src: "../../imgs/01.jpg"
      },
      {
        id: 1,
        name: "道恩▪强森",
        play: "饰 霍布斯",
        src: "../../imgs/02.jpg"
      },
        {
          id: 2,
          name: "杰森▪斯坦森",
          play: "饰 霍布斯",
          src: "../../imgs/03.jpg"
        },
        {
          id: 3,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/04.jpg"
        },
        {
          id: 4,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/05.png"
        },
        {
          id: 5,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/06.png"
        },
        {
          id: 6,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/07.png"
        },
        {
          id: 7,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/08.png"
        },
        {
          id: 7,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/09.png"
        },
        {
          id: 7,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/10.png"
        },
        {
          id: 7,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/11.png"
        },
        {
          id: 7,
          name: "大卫▪雷奇",
          play: "饰 霍布斯",
          src: "../../imgs/12.png"
        }
      ],

    pictures:[
        {
          picture:"../../imgs/photo_01.png"
        },
      {
        picture: "../../imgs/photo_02.png"
      },
      {
        picture: "../../imgs/photo_03.png"
      },
      {
        picture: "../../imgs/photo_04.png"
      },
      {
        picture: "../../imgs/photo_05.png"
      },
      {
        picture: "../../imgs/photo_06.png"
      },
      {
        picture: "../../imgs/photo_07.png"
      },
      {
        picture: "../../imgs/photo_08.png"
      },
      {
        picture: "../../imgs/photo_09.png"
      },
      {
        picture: "../../imgs/photo_10.png"
      }

      ]
  },
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexImg: id
    });
  },
})

