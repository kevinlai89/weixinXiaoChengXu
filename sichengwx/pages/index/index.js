//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '思诚资源欢迎您！',
    
    userInfo: {},
    btnText:'点击修改企业图标',
    aShow:true,
    inmageUrl:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

btnClick:function(){
  console.log("点击按钮了")
  //this.setData({aShow:!this.data.aShow})
  var page = this;

  wx.chooseImage({
    count: 9, // 最多可以选择的图片张数，默认9
    sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
    sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
    success: function(res){
            // success
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)

        page.setData({imageUrl:tempFilePaths})
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
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
