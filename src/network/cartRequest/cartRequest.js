import instance from 'network/baseRequest'

instance.defaults.baseURL = 'http://106.13.129.90:5000'
instance.defaults.timeout = 2000
instance.defaults.port = 5000



export function getCartData(id) {
  return instance({
    url:'/cart/getcart',
    params:{id}
  })
}

