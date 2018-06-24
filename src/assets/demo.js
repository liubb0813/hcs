function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        resolve(da);
    });
    return p;
}

runAsync1()
    .then(function(data){
        console.log(data);
        return runAsync2();
    })
    .then(function(data){
        console.log(data);
        return () =>{
            console.log(123);
        };
    })
    .then(function(data){
        data();
    })



function login(ms) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(123)
        }, ms);
    });
}

async function asyncPrint(value, ms) {
    return await login(ms);
}

asyncPrint('hello world', 2000).then(v=>console.log(v));
