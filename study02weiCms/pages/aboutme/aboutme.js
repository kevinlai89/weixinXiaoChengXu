//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    img:"../images/logo.png",
    title:"深圳思诚科技公司",
    lianxi:"      联系方式是多少……联系方式是多少……联系方式是多少……联系方式是多少……联系方式是多少……联系方式是多少……联系方式是多少…………",
    dizhi:"地址是多少……",
    tel:"3423423423423",
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
