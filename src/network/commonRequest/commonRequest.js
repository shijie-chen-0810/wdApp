import axios from 'network/request'
const instance = axios.create()


instance.interceptors.response.use(res => {
  return res.data
})
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
