import axios from 'network/request'

const instance = axios.create()
instance.interceptors.response.use(res => {
  console.log(res['headers']['x-access-token'])
  localStorage.setItem('x-access-token',res['headers']['x-access-token'])
  return res
})

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

export function setpwd(username, password) {
  return instance({
    method: 'post',
    headers:{
      'content-type':'application/json'
    },
    url:'/profile/users/setpwd',
    data:{
      username,
      password
    }
  })
}

