import axios from 'axios'

const instance = axios.create()
instance.defaults.baseURL = 'http://106.13.129.90:5000'
instance.defaults.timeout = 5000
instance.defaults.port = 5000

export function phoneLogin(cellphonenumber) {
  return instance({
    method: 'post',
    headers:{
      'content-type':'application/json'
    },
    url:'/profile/users/phonelogin',
    data:{cellphonenumber}
  })
}
//设置密码
export function setpwd(user_id, pwd) {
  return instance({
    method: 'patch',
    headers:{
      'content-type':'application/json'
    },
    url:'/profile/users/setpwd',
    data:{
      user_id,
      pwd
    }
  })
}
//登录
export function getlogin(user_id, pwd) {
  return instance({
    method: 'post',
    headers:{
      'content-type':'application/json'
    },
    url:'/profile/user/pwdlogin',
    data:{
      user_id,
      pwd
    }
  })
}

export function setprofile(user_id, formdata) {
  return instance({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data;charset=UTF-8'
    },
    url:'/profile/user/setprofile',
    data:{
      formdata
    }
  })
}
