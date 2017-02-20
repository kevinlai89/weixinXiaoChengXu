/*technician.js*/

//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')
var util = require('../../utils/util')

Page({
  // 页面初始数据
  data: {
      // nav 初始化
      apiUrl:fileData.getApiUrl(),
      curNavId: 1,
		  curIndex: 0
  },
  onShow:function()
  {
    this.onQueryData();
  },
  onLoad:function(){

  },
  onQueryData:function()
  {
    var that = this;
    wx.request({
      url: this.data.apiUrl, 
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          list: res.data
        })        
      }
    })        
  },  
  // 加载更多
  loadMore: function (e) {
  }
})
