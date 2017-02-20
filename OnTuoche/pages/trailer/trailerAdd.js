var myData = require("../../utils/data")
Page({
    data:{
        apiUrl:myData.getApiUrl(),
        saveToastHidden:true,
        trackInfo:{
        }
    },
    onLoad:function(options){
        this.setData({
            trackInfo:
            {
               Caption:'我在广东深圳' ,
               Amount:999,
               PicUrl:''
            },
        })
    },
    bindKeyCaption: function(e) {
        this.setData({
        'trackInfo.Caption':e.detail.value
        })
    },  
    bindKeyAmount: function(e) {
        this.setData({
        'trackInfo.Amount':e.detail.value
        })
    },          
    submitForm:function(e){
        //开始上传数据
        var picUrl=this.data.trackInfo.PicUrl;
        var amount=this.data.trackInfo.Amount;
        var caption=this.data.trackInfo.Caption;
        wx.uploadFile({
        url:this.data.apiUrl+'?amount='+amount+'&caption='+caption, //仅为示例，非真实的接口地址
                    filePath:picUrl[0],
                    name: 'file',
                    formData:{},
                    success: function(res){
                        wx.showToast({
                            title: '保存成功',
                            icon: 'success',
                            duration: 2000
                        })
                        app.getPage('')
                        //刷新首页
                    }
          })
    },
    hideToast:function(){
        this.setData({
            saveToastHidden:true
        })
    },
    selectPic:function()
    {
        var me=this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                me.setData({
                    'trackInfo.PicUrl':tempFilePaths
                })
            }
        })
    }
})