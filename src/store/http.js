import axios from 'axios';
// import { Loading, Message } from 'element-ui';

axios.defaults.baseURL = 'http://localhost:8080/hcs';
axios.defaults.withCredentials = true;//带cookie请求

axios.defaults.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}

axios.defaults.transformRequest = [function (data) {
    let newData = ''
    for (let k in data) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
    }
    return newData
}]

// let loadinginstace;
//
// axios.interceptors.request.use(config => {
//     loadinginstace = Loading.service({ fullscreen: true });
//     return config
// }, error => {
//     loadinginstace.close()
//     Message.error({
//         message: '加载超时'
//     })
//     return Promise.reject(error)
// })
//
// axios.interceptors.response.use(data => {// 响应成功关闭loading
//     loadinginstace.close();
//     return data
// }, error => {
//     loadinginstace.close();
//     Message.error({
//         message: '加载失败'
//     })
//     return Promise.reject(error)
// })

export default axios;