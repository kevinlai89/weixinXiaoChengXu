//aboutme.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // img: '../../images/logo.png',

     img:'http://www.zhiduotong.com/upload/201607/1469462427.png',
    title: "深圳市智多通科技有限公司",
    intro: " 智多通管理系统为企业加强管理提供有效的帮助，同时提高员工工作效率，便捷的操作及灵活的审核机制，能够更加有效的控制成本，精确实时的数据分析，为企业决策带来有力的参考。 让客户随时掌握企业动向并快乐地工作，是我们一直的追求，正因为如此，我们一直在努力。",
    contab: "联系方式",
    address: "深圳市集浩大厦B902",
    mobile: "139-2740-1993",
    email: "zdt_kevin@qq.com"
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