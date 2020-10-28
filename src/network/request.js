import axios from 'axios'

axios.defaults.baseURL = 'http://106.13.129.90:5000'
axios.defaults.timeout = 2000
axios.defaults.port = 5000
export default axios
