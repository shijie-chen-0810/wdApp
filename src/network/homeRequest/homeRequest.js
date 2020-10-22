import axios from 'network/request'

const instance = axios.create()


instance.interceptors.response.use(res => {
  return res.data
})

export function getSortData() {
  return instance({
    url:'/home/getSort'
  })
}




