import axios from 'axios'
const instance = axios.create()
instance.defaults.baseURL = 'http://10.9.64.245:5000'
instance.defaults.timeout = 5000
instance.defaults.port = 5000
instance.interceptors.response.use(res => {
  return res.data
})
export default instance
