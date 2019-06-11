// var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    gender: '',
    image_url:''
  },
  userInfoHandler(){
  var that = this
        wx.getSetting({
          success(res) {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                lang: 'zh_CN',
                success(res) {
                  wx.setStorage({
                    key: 'key',
                    data: res.userInfo
                  })
               
               that.setData({
                 name: res.userInfo.nickName,
                 gender: res.userInfo.gender,
                 image_url: res.userInfo.avatarUrl
               })
                }
              })
            }
          }
        })
},
//联系电话
tel(){
  wx.makePhoneCall({
    phoneNumber: '13034003710'
  })
},
//详细资料
content(){
  wx.navigateTo({
    url: '/pages/me/me'
  })
},
  //报修记录
  all() {
    wx.navigateTo({
      url: '/pages/all/all'
    })
  },
  //维修状态
  loading() {
    wx.navigateTo({
      url: '/pages/loading/loading'
    })
  },
  //已完成的报修
  task() {
    wx.navigateTo({
      url: '/pages/task/task'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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