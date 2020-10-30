import instance from 'network/baseRequest'

instance.defaults.baseURL = 'http://106.13.129.90:5000'
instance.defaults.timeout = 5000
instance.defaults.port = 5000



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


