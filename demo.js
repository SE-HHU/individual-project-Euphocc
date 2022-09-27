//包含1个运算符或2个运算符：两种题目
function Qus1(a, ope, b) {
    this.a = a;
    this.b = b;
    this.ope = ope;
    this.answer = function () {
        if (ope === "+") {
            return this.a + this.b;
        } else {
            return this.a - this.b;
        }
    }
    this.toString = function () {
        return String(a) + String(ope) + String(b);
    }
}
function Qus2(a, ope1, b, ope2, c) {
    this.a = a;
    this.ope1 = ope1;
    this.b = b;
    this.ope2 = ope2;
    this.c = c;
    this.answer = function () {
        let ans = this.a;
        if (ope1 === "+") {
            ans += b;
        } else {
            ans -= b;
        }
        if (ope2 === "+") {
            ans += c;
        } else {
            ans -= c;
        }
        return ans;
    }
    this.toString = function () {
        return String(a) + String(ope1) + String(b) + String(ope2) + String(c);
    }
}

//题目集
let res = [];
//开始生成题目；
function startCreate() {
    let str = prompt("请输入你想生成的题目数目(1-100):");
    let n = parseInt(str);
    if (!(n > 0 && n < 101)) {
        alert("输入的数据不合法，必须是1-100之间的数字。");
        return;
    }
    let x = Math.random();
    for (i = 0; i < n; i++) {
        if (x > 0.5) {
            res[i] = createQus1(i);
        } else {
            res[i] = createQus2(i);
        }
        x = Math.random();
    }
    alert("题目已经生成完毕！");
    //取消disabled button
    document.getElementById("saveQus").disabled = "";
    document.getElementById("saveAns").disabled = "";
}
//生成随机运算符
function getRandomOpe() {
    let a = Math.random();
    if (a > 0.5) {
        return "+";
    } else {
        return "-";
    }
}
//生成随机数
function getRandomNum() {
    return Math.floor(Math.random() * 101);
}
//生成随机算式
function createQus1(n) {
    let q = new Qus1(getRandomNum(), getRandomOpe(), getRandomNum());
    let flag = true;
    while (flag === true) {
        for (var i = 0; i < n; i++) {
            if (equals(res[i], q)) {
                flag = false;
                break;
            }
        }
        if ((!flag) || q.answer() < 0 || q.answer() > 100) {
            flag = true;
            let qdelete = q;
            q = new Qus1(getRandomNum(), getRandomOpe(), getRandomNum());
            delete qdelete;
        } else {
            return q;
        }
    }
    return undefined;
}
function createQus2(n) {
    let q = new Qus2(getRandomNum(), getRandomOpe(), getRandomNum(), getRandomOpe(), getRandomNum());
    let flag = true;
    while (flag === true) {
        for (var i = 0; i < n; i++) {
            if (equals(res[i], q)) {
                flag = false;
                break;
            }
        }
        if ((!flag) || q.answer() < 0 || q.answer() > 100) {
            flag = true;
            let qdelete = q;
            q = new Qus2(getRandomNum(), getRandomOpe(), getRandomNum(), getRandomOpe(), getRandomNum());
            delete qdelete;
        } else {
            return q;
        }
    }
    return undefined;
}
//重写equals()
function equals(x, y) {
    return x.toString() === y.toString();
}
//下载题目和答案
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
//下载配置
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}