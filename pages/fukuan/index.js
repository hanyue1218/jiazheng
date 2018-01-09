// pages/fukuan/index.js
Page({
  data: {
    array: ['选择优惠券', '优惠券1', '优惠券2', '优惠券3'],
    objectArray: [
      {
        id: 0,
        name: '选择优惠券'
      },
      {
        id: 1,
        name: '优惠券1'
      },
      {
        id: 2,
        name: '优惠券2'
      },
      {
        id: 3,
        name: '优惠券3'
      }
    ],
    index: 0,
    array1: ['选择活动', '活动1', '活动2', '活动3'],
    objectArray: [
      {
        id: 0,
        name: '选择活动'
      },
      {
        id: 1,
        name: '活动1'
      },
      {
        id: 2,
        name: '活动2'
      },
      {
        id: 3,
        name: '活动3'
      }
    ],
    index1: 0,

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
})