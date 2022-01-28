/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * baseImgPath: 图片存放地址
 *
 */

let baseUrl = '';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
    baseUrl = '192.168.1.105:8080';
    // baseUrl = "http://192.168.10.125:8665";

    baseImgPath = '/img/';
} else {
    baseUrl = 'http://192.168.10.170:8886';
    baseImgPath = '/img/';
}

export {
    baseUrl,
    baseImgPath
}
