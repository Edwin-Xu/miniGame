//我写的：

//index表示一个数组岂不是更好，高度抽象
function setColor(_this, index, color) {
  _this.setData({ ["color[" + index + "].c"]: color });
}

//将 多个对象设置为 某种颜色
function setColors(_this, indexes, color) {
  for (let i = 0; i < indexes.length; i++) {
    _this.setData({ ["color[" + indexes[i] + "].c"]: color });
  }
}

function toggle(_this, indexes) {
  for (let i = 0; i < indexes.length; i++){
    if(_this.data.color[indexes[i]].c==_this.data.bg){
      _this.setData({ ["color[" + indexes[i] + "].c"]: _this.data.c });
    }
    else{
      _this.setData({ ["color[" + indexes[i] + "].c"]: _this.data.bg });
    }
  }
}

function check(_this,n) {
  var isOK = true;
  for (let i = 0; i < n; i++) {
    if (_this.data.color[i].c == _this.data.bg) {
      isOK = false;
      break;
    }
  }
  if(isOK){
    //需要把这个表锁死，不让点击。
    //pointer-events:{{poi}}
    _this.setData({ ["poi"]: "none" });
    _this.setData({ ["isOK"]: true });

    wx.showToast({
      title: '恭喜过关！',
      icon: "none"
    });
  }
}



//必须要添加这条语句来暴露接口：
module.exports = {
  getRequestUrl: "http://localhost:59637",//获得接口地址
  setColor: setColor,
  setColors: setColors,
  check: check,
  toggle: toggle,
}