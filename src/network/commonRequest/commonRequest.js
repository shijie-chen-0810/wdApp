import instance from 'network/baseRequest'

instance.defaults.baseURL = 'http://106.13.129.90:5000'
instance.defaults.timeout = 2000
instance.defaults.port = 5000




export function addItemToCart(id, cellPhone) {
  return instance({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/cart/addusergoods',
    data: {
      id,
      cellPhone
    }
  })
}
export function islogin() {
  const token = localStorage.getItem('x-access-token')
  return instance({
    url: '/profile/auth',
    headers: {
      'x-access-token':token
    }
  })
}
