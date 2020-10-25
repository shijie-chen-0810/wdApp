import axios from 'network/request'

const instance = axios.create()


instance.interceptors.response.use(res => {
  return res.data
})

export function getDetail(id) {
  return instance({
    url:'/detail/getDetail',
    params:{id}
  })
}