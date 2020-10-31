import axios from 'axios'
const instance = axios.create()
instance.defaults.baseURL = 'http://106.13.129.90:5000'
instance.defaults.timeout = 5000
instance.defaults.port = 5000
instance.interceptors.response.use(res => {
  return res.data
})
export default instance
