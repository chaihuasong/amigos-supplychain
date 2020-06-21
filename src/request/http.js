import axios from 'axios' // 引用axios

// axios 配置
axios.defaults.timeout = 50000; //设置接口响应时间
// axios.defaults.baseURL = 'https://easy-mock.com/mock/' // 这是调用数据接口,公共接口url+调用接口名
let httpUrl = window.location.host;
if (httpUrl.indexOf('.com') !== -1) {
    console.log('生产环境', httpUrl)
} else if (httpUrl.indexOf('.net') !== -1) {
    console.log('测试环境', httpUrl);
    axios.defaults.baseURL = 'http://www.test.com' // 这是调用数据接口,公共接口url+调用接口名
} else if (httpUrl.indexOf('localhost:8088') !== -1) {
    console.log('指定开发环境', httpUrl);
    axios.defaults.baseURL = 'http://localhost:8088/'
} else {
    console.log('开发环境', httpUrl);
    axios.defaults.baseURL = 'http://192.168.6.138:8080/' // 这是调用数据接口,公共接口url+调用接口名
}

export default axios

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            response => {
                // console.log(response.data.code)
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}