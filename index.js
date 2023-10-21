const express = require('express')
const app =express()

app.get('/',(req,res)=> {
    res.send('hellow,world')//发送响应
})
app.listen(3000,() => console.log('running...'))//启动服务端并发送信号
