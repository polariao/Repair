//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test:"",
    img:"",
    image_name:'',
    imgUrls: [
      '/images/tushuguan.jpg',
      '/images/huisen.jpg',
      '/images/tiyuguan.jpg',
    ],
    image_url:"",
    array: [],
    cate_name:[],
    nickName:'',
    index:0,
    multiArray: [['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#'],
      ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114','115', '116',
        '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', 
        '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', 
        '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', 
        '501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', 
        '601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', 
         ]],
    multiIndex: [0,0],
  },
  onLoad: function () {
  
    var that = this
    //获取故障类型
    wx.request({
      url: 'https://w.huangjinao.club/get', // 仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var i=0
        var arr = []
        for (i = 0; i < res.data.length;i++){
          arr[i] = res.data[i].cate_name
        }
        that.setData({
          array: arr
        })
      }
    })

  },
  onShow(){
    var that =this
    wx.getStorage({
      key: 'key',
      success(res) {
        that.setData({
          nickName: res.data.nickName
        })
        console.log(that.data.nickName)
      }
    })
  }
,
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  uploadimg: function () {
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或

      success: function (res) {
        that.setData({
          img: res.tempFilePaths
        })

        //  返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
         
          url: 'https://w.huangjinao.club/upload',
          filePath: tempFilePaths[0],
          name: 'resource',
          success: function (res) {
            //打印
            that.setData({
              image_url: JSON.parse(res.data).image_url,
              image_name: JSON.parse(res.data).image_name
            })
          }
        })

      }
    })
  },

  formSubmit(e){
    // 获取form表单值
    var arr = [];
    wx.showLoading({
      title: '提交中',
    })
    arr['name'] =e.detail.value.name
    arr['tel'] = e.detail.value.tel
    arr['places'] = e.detail.value.place
    arr['content'] = e.detail.value.content
    arr['cate'] = this.data.array[this.data.index]
    arr['place'] = this.data.multiArray[0][this.data.multiIndex[0]] + this.data.multiArray[1][this.data.multiIndex[1]]
    arr['image_url'] = this.data.image_url
    arr['image_name'] = this.data.image_name
    arr['nicheng'] = this.data.nickName
    console.log(arr)
    //将值发送到服务器
    var that = this //创建一个名为that的变量来保存this当前的值  
    wx.request({
      url: 'https://w.huangjinao.club/store',
      method: 'post',
      data: arr,
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      success: function (res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        console.log(res.data)
      },
      
    });

  },
   onShareAppMessage(res) {
    
  }
})
