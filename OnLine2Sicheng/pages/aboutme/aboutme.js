//aboutme.js
//获取应用实例
var app = getApp()
Page({
  data: {
    img: '../../images/logo.png',
    title: "东莞市思诚机电科技有限公司",
    intro: "思诚资源对机床附件产品进行全球化资源整合，利用我们的互联网平台实现以企业单位实名会员制，提供相应的销售、交易、仓储、配送以及售后服务。将来还可以通过数据的积累，提供企业的信用报告等延伸服务。致力于成为中国机床附件第一品牌，为中国中高端制造企业服务。",
    contab: "联系方式",
    address: "东莞市长安镇新安一路2081-1号B栋3楼",
    mobile: "0769-22186189",
    email: "sales@sczy.com"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url: app.url + 'addon/Cms/Cms/testLogin',
      data: { PHPSESSID: wx.getStorageSync('PHPSESSID') },
      success: function (res) {
        console.log(res);
      }
    })
  },
  callme: function () {
    wx.makePhoneCall({
      phoneNumber:  this.data.mobile
    })
  }
})