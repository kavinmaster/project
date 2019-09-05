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
        src: "../../imgs/01.jpg"
      },
      {
        src: "../../imgs/02.jpg"
      },
        {
          src: "../../imgs/03.jpg"
        },
        {
          src: "../../imgs/04.jpg"
        },
        {
          src: "../../imgs/05.png"
        },
        {
          src: "../../imgs/06.png"
        },
        {
          src: "../../imgs/07.png"
        },
        {
          src: "../../imgs/08.png"
        },
        {
          src: "../../imgs/09.png"
        },
        {
          src: "../../imgs/10.png"
        },
        {
          src: "../../imgs/11.png"
        },
        {
          src: "../../imgs/12.png"
        }
      ],
      names:[

        {
          id:0,
          name:"大卫▪雷奇"
        },

        {
          id: 1,
          name: "大卫▪雷奇"
        },

        {
          id: 2,
          name: "大卫▪雷奇"
        },

        {
          id: 3,
          name: "大卫▪雷奇"
        },

        {
          id: 4,
          name: "大卫▪雷奇"
        },

        {
          id: 5,
          name: "大卫▪雷奇"
        },
        {
          id: 6,
          name: "大卫▪雷奇"
        },
        {
          id: 7,
          name: "大卫▪雷奇"
        },
        {
          id: 8,
          name: "大卫▪雷奇"
        },
        {
          id: 9,
          name: "大卫▪雷奇"
        },
        {
          id: 10,
          name: "大卫▪雷奇"
        },

        {
          id: 11,
          name: "大卫▪雷奇"
        },

        {
          id: 12,
          name: "大卫▪雷奇"
        },

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
  }
})

