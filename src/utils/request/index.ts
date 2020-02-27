import axios from 'axios'
import qs from 'qs'
import { config } from './config'
let fetch = axios.create({
  baseURL: config.baseURL,
  timeout: 30000
})

fetch.interceptors.request.use(config => {
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    if (typeof(config.data) !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

fetch.interceptors.response.use(async data => {
  if (data.data.code !== 200) {
    layer.msg(data.data.msg)
  }
  return data.data
}, error => {
  if (error.response) {
    if (error.response.status === 500) {
      console.log('服务器错误，请联系管理员处理')
    }
    return Promise.reject(error.response.data)
  } else {
    return Promise.reject(error)
  }
})

export default fetch
