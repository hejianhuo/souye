//index.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/avatar.png',
      '../../images/img1.png',
      '../../images/img2.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    contentItems: [
      '../../images/img1.png',
      '../../images/img2.png',
      '../../images/img2.png',
      '../../images/img1.png',
    ],
    listItems: ['', '']
  },


})
