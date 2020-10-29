import axios from 'network/request'

const instance = axios.create()


instance.interceptors.response.use(res => {
  return res.data
})

export function getCartData(id) {
  return instance({
    url:'/cart/getcart',
    params:{id}
  })
}

