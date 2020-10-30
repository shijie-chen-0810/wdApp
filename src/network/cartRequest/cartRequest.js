import instance from 'network/baseRequest'





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

