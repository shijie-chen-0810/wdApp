import instance from 'network/baseRequest'





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


