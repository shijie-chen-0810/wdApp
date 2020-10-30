import instance from 'network/baseRequest'

instance.defaults.baseURL = 'http://106.13.129.90:5000'
instance.defaults.timeout = 2000
instance.defaults.port = 5000


export function phoneLogin(username) {
  return instance({
    method: 'post',
    headers:{
      'content-type':'application/json'
    },
    url:'/profile/users/phonelogin',
    data:{username}
  })
}
