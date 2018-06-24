import axios from 'axios';

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

export default axios;