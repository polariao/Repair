// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    gender:'',
    image_url:'',
    country:'',
    city:'',
    province:''
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
          name: res.data.nickName,
          city: res.data.city,
          country: res.data.country,
          province: res.data.province,
          gender: res.data.gender,
          image_url: res.data.avatarUrl,
        })
      }
    })
   
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