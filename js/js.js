alert("你好js")//弹出窗口
document.write("我是div")
document.write(<h>head</h>)
console.log("控制台输出给程序员 log是日志")
prompt("相当于input输入")
// alert prompt会先执行跳过页面渲染
//{}对象字面量[]数字字面量
let age=17//,uname=19 声明变量 但不能重复声明 声明多个变量
age = 18
++age//age+1+
console.log(age,uname)

let uname=prompt("请输入您的姓名")
document.write(uname)//输入的名字存进uname里 打印
//临时变量不用自动销毁 把num1的值给temp temp=num1右边给左边
let arr = [1,2,3 ,"其他字符串"]//数组
console.log(arr[0])//[索引号]
console.log(arr.length)//返回长度
const pi=3.14//常量 不变 声明的时候必须赋值

//数据类型 js弱let可以任何类型 Java int只能整数
//NaN不是一个数字 当用一个字符串减一个数字会出现这个 
let ages =18;
console.log("我今年"+ages+"岁了")
//拼接字符串用documen
document.write('大家好我叫'+ uname +'我今年'+age)
document.write(`大家好我叫${uname}我今年${age}`)
//${}变量放在这个里面 且外面加的是``不是''
//布尔类型只有真假true false
console.log(3>4)
//未定义类型 声明一个变量未赋值 不存在
let num
console.log(num)
//null空值 可以计算
let obj = null
console.log(obj)
//typeof检测数据类型
console.log(typeof age)

//除了加号其他运算符号都会将字符串转为数字
console.log(+"3"+3)//输出6不是33
console.log(parseInt('12px'));//输出12 只要整数其他不要 12.34只输出12
console.log(parseFloat('12.94'));//同理是浮点数
//prompt是输入框
let num1 = +prompt('输入')//必须加+否则为字符串
let num2 =+prompt('输入')
// alert(num1+num2)或者加上描述
alert(`加起来是${num1 + num2}`)

//常量不能被重新赋值

console.log(age++ + 1);//此时输出是age+2但age为+1  前置是先自增 后置是后加
//==可以比较不同类型自动转换 ===严格求等类型也一样
//可以执行的叫语句 表达式可以求值 语句不一定有值 alert for等用于赋值

//闰年判断||是或
let year = +prompt('输入')
if (year % 4 == 0 && year % 100!== 0 ||year%400 ==0){
    alert('闰年')
}alert(`${year}不是闰年`)

//else if第一条满足则不执行下面的 否则判断第二条满足否同理 可以适用成绩等级判断
//三元 条件 ？ 代码1 ： 代码2 下面两个是一样的结果 let 也可以这么用
console.log(3>5 ? 3 : 5)
3<5 ? alert('ture') : alert('false')

//switch 用于输入什么情况就执行什么命令
switch(1){
    case 1:
        console.log('选择的是1');
        break
    case 2:
        console.log('2');
        break
    default:
        console.log('没有符合条件的情况')
    //case是各种情况 switch后面的数据可以输入我没改而已 defau是没有的选项 
}

//continue是再次执行循环（退出本次循环) 在while 相当于跳转 
let i =1
let sum = 0
while(i<=100){
    if (i%2 ===0){
        sum = sum+1
    }//偶数求和
    i++
}
console.log(sum)
//for(变量初始值；终止条件；变量变化量如i++)
for (let i =1;i<= 100;i++){
    if(i%2 ===0){
        sum+=i
    }
    document.write(`偶数和${i}`)
}
//当明确循环的次数用for 否则while
