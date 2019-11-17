// axios请求拦截，需要时可在src/api/ajax 将 import axios from 'axios' 改为 import http as axios from '../../static/js/axios'
import axios from 'axios'
// import { Toast } from 'mint-ui';
const http = axios.create({
    baseURL: process.env.NODE_ENV == "development" ? "" : "http://cangdu.org:8001",
    timeout: 20000 // request timeout
})
// http request 拦截器
// 每次请求都为http头增加Authorization字段，其内容为Token
http.interceptors.request.use(
    config => {
        // 修改请求头为表单请求
        config.transformRequest = [function (data) {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        // config.headers["userId"] = localStorage.getItem("userId");
        console.warn('config', config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// http response 拦截器
http.interceptors.response.use(response => {
    console.log('response', response)
    // if (response.data.code == -1) {
    //     store.commit("SET_RESET");
    //     Toast({
    //         message: response.data.msg,
    //         position: "bottom"
    //     });
    // }
    return response
}, error => {
    // Toast({
    //     message: `${error.response.status}:${error.response.data}`,
    //     position: "bottom"
    // });
    return Promise.reject(error)
})

export default http
