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

export function getGoods(offset,limit) {
  return instance({
    url: '/home/getGoods',
    methods: 'GET',
    params: {
      offset,
      limit
    },
    responceType: 'JSON'
  })
}


