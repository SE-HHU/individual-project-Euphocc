# SE-individial-project-Euphocc
2106050218 徐诚鸿
+ 第一次接触web相关的开发知识，已经托管至Github io，链接戳 [这里](https://euphocc.github.io/WebOfQuestion/)
+ 总结博客等待几天后提交啦

# 时间花费对比表
|环节|用时|
|---|---|
|需求分析|10min|
|产品设计|20min|
|学习相关技术|2h|
|编写代码|40min|
|测试程序|5min|
|发布程序|5min|

# 简要思路
```js
//Qus1和Ques2分别封装起含有1个、2个运算符的类
function Qus1(a, ope, b)
function Qus2(a, ope1, b, ope2, c)

//生成0-1之间的随机数，大于0.5实例化Qus1，小于0.5实例化Qus2
//检测题目无问题，加入题目集数组res[]

//使用download将题目集写入txt中并下载
//下载配置使用DOM中的一部分内容（易于实现）
function downloadRes() {
    let resStr = [];
    for (i = 0; i < res.length; i++) {
        resStr[i] = (i + 1) + "---" + res[i].toString() + "\n";
    }
    download("Test.txt", resStr.join(""));
}
function downloadAns() {
    let ansStr = [];
    for (i = 0; i < res.length; i++) {
        ansStr[i] = (i + 1) + "---" + res[i].answer() + "\n";
    }
    // var fso = new ActiveXObject("Scripting.FileSystemObject");
    // var f = fso.CreateTextFile("Test.txt", true);
    // f.write(ansStr);
    download("answer.txt", ansStr.join(""));
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
```
