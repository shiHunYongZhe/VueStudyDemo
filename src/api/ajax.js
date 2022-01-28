import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET', method = 'fetch') {
	  // 返回值是个 Promise 对象（异步返回的数据是response.data，而不是response）
    return new Promise(function (resolve, reject) {
      let promise // 这个内部的promise用来保存axios的返回值(promise对象)
      if (type === 'GET') {
        let dataStr = '' // 数据拼接字符串，将data连接到url
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
          url += '?' + dataStr
        }
        promise = axios.get(url)
      } else {
        promise = axios.post(url, data)
      }
      promise.then(response => {
        // 成功回调resolve()
        resolve(response.data)
      })
        .catch(error => {
          // 失败回调reject()
          reject(error)
        })
    })
}
