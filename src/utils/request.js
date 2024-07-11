import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '../router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

// 创建axios实例
const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    // TODO 2. 携带token
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (res.data.code) {
      return res
    }
    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    if (err.response?.status === 401) {
      router.push('/login')
    }
    ElMessage.error(err.data.message || '服务异常')
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
