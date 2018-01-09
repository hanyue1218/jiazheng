// pages/bianjidizhi/index.js
Page({
  data: {
    array: ['请选择省份', '北京市', '天津市', '河北省', '山西省'],
    objectArray: [
      {
        id: 0,
        name: '请选择省份'
      },
      {
        id: 1,
        name: '北京市'
      },
      {
        id: 2,
        name: '天津市'
      },
      {
        id: 3,
        name: '河北省'
      }
      ,
      {
        id: 4,
        name: '山西省'
      }
    ],
    index: 0,
    region: ['河北省', '石家庄', '裕华区'],
    customItem: '全部'
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
})