// pages/shop/index.js
Page({
  data: {
    carts: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: true    // 全选状态，默认全选
  },
  onShow() {
    this.setData({
      hasList: true,        // 既然有数据了，那设为true吧
      carts: [
        { id: 1, title1: '保洁', title2: '打扫卫生打扫卫生打扫卫生打扫卫生打扫卫生打扫卫生', selected: true },
        { id: 2, title1: '搬家', title2: '搬家搬家搬家搬家搬家搬家搬家', selected: true },
        { id: 2, title1: '搬家', title2: '搬家搬家搬家搬家搬家搬家搬家', selected: true },
        { id: 2, title1: '搬家', title2: '搬家搬家搬家搬家搬家搬家搬家', selected: true },
      ]
    });
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;                    // 获取购物车列表
    const selected = carts[index].selected;         // 获取当前商品的选中状态
    carts[index].selected = !selected;              // 改变状态
    this.setData({
      carts: carts
    });
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
  },
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);              // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
  },
  toYuyue: function () {
    wx.navigateTo({
      url: '/pages/yuyue/index',
    })
  },
})