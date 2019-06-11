Page({
  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    nickName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'key',
      success(res) {
        that.setData({
          nickName: res.data.nickName
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    console.log()
    wx.showLoading({
      title: '加载中',
    })
   // 将微信信息提交给服务器，并获取服务器传回的数据
    wx.request({
      url: 'https://w.huangjinao.club/all',
      method: 'post',
    data: {
      name:that.data.nickName
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },

      success: function (res) {
        var time = require('../../utils/time.js');
        for (var i = 0; i < res.data.length; i++) {
          res.data[i]["create_at"] = time.formatTime(res.data[i]["create_at"], 'Y/M/D h:m:s')
        }
        that.setData({
          array: res.data
        })
        wx.hideLoading()
      },

    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})