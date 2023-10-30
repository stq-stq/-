console.log(Responsebody);
//使用json提取器提取access——token值
//把返回的字符串格式的数据转换成对象的形式
var result = JSON.parse(Responsebody);
console.log(result.access_token);
//把access_toke设置为全局变量
pm.globals.set("access_token",result.access_token);
//{{access_token}}来实现接口

//使用正则表达式提取器实现接口关联，match关联
Responsebody.match(new RegExp('"access_token":"(\.*?)"'));
console.log(result[1]);//下脚为1的值是要的
pm.globals.set("access_token",result[1]);