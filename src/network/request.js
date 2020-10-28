import axios from 'axios'

axios.defaults.baseURL = 'http://10.9.64.245:5000'
axios.defaults.timeout = 2000
axios.defaults.port = 5000
export default axios
