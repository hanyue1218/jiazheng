// pages/yuyue/index.js
Page({
  data: {
    array: ['+ 添加/选择地址', '河北省石家庄市高庄市高新技术开发区珠峰大街豆腐干是二庄市高新技术开发区珠峰大街豆腐干是二新技术开发区珠峰大街豆腐干是二哥', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '河北省石家庄市高新技术开发区珠峰大街'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 0,

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})