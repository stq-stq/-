//事件监听 以on开头 监听事件的触发 wx.onWindowResize((result) => {})窗口尺寸变化
//同步 以sync结尾 通过函数返回值直接获取 执行出错会抛出异常 wx.setStorageSync('key', data)向本地存储中写入东西
//异步 需要通过success fail complete接受 wx.request({
//   url: 'url',
// })发起网络数据请求