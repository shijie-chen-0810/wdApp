import instance from 'network/baseRequest'






export function getDetail(id) {
  return instance({
    url:'/detail/getDetail',
    params:{id}
  })
}
