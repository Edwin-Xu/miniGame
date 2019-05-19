var util = require("../../../utils/myUtil.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      [0, [7, 8, 5]],
      [1, []],
      [2, [3, 8]],
      [3, []],
      [4, []],
      [5, []],
      [6, [1, 4]],
      [7, []],
      [8, [0, 2, 6, 8]]
    ],
    color:[
      // 每个颜色：是个对象。属性为c
      { c: "yellow"},
      { c: "yellow" },
      { c: "yellow" },
      { c: "yellow" },
      { c: "yellow" },
      { c: "yellow" },
      { c: "yellow" },
      { c: "yellow" },
      { c: "yellow" }
    ],

    // 这个c表示当前的颜色
    c:"aqua",
    bg:"yellow",
    poi:"auto" //手指点击是否可用：auto可用，none不可用。
    ,
    isOK:false
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
    // 把主要的业务逻辑放在这里


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  lastLevel: function(){
    wx.showToast({
      title: '已经是第一关了！',
      icon:"none"
    })
  },

  next:function(){
    //这里要不要访问访问后端。
    if(this.data.isOK){
      wx.redirectTo({
        url: '../level2/level2',
      })
    }
    else{
      wx.showToast({
        title: '请先通过本关！',
        icon: "none"
      })
    }
   
  }
  ,

  click0: function () {
    util.toggle(this,[5,7,8]);
    util.check(this,9);
  },

  click1: function () {

  },
  click2: function () {
    util.toggle(this,[3,8]);
    util.check(this, 9);
  },
  click3: function () {

  },
  click4: function () {

  },
  click5: function () {

  },
  click6: function () {
    util.toggle(this,[1,4]);
    util.check(this, 9);
  },
  click7: function () {

  },
  click8: function () {
   util.toggle(this,[0,2,6,8]);
    util.check(this, 9);
  },

  retry:function(){
    util.setColors(this,[0,1,2,3,4,5,6,7,8],this.data.bg);
    util.check(this, 9);
    //需要确认手指点击可用。
    this.setData({["poi"]:"auto"});
  }
})

