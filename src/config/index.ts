import axios from 'axios'
import Vue from 'vue'
import envConfigPageUrl from '@/config/envUrl'
import {ResportData} from '@/types'

const service = axios.create({
  baseURL: envConfigPageUrl(),
  timeout: 1000
})

Vue.prototype.$http = service

// 请求拦截
// request请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  Promise.reject(error)
})
// respone返回拦截器
service.interceptors.response.use(
  ({data}) => {
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
