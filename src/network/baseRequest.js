import axios from 'axios'
const instance = axios.create()
instance.defaults.baseURL = 'http://106.13.129.90:5000'
instance.defaults.timeout = 2000
instance.defaults.port = 5000
instance.interceptors.response.use(res => {
  localStorage.setItem('x-access-token',res['headers']['x-access-token'])
  return res.data
})
export default instance
