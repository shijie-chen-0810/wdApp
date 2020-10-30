import instance from 'network/baseRequest'





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
