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

export function updateCart(arr) {
  return instance({
    method:'PATCH',
    url:'/cart/updatecart',
    data:{newgoods:arr}
  })
}

