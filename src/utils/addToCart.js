import { addItemToCart } from 'network/commonRequest/commonRequest'

import { Toast } from 'vant';
import { Dialog } from 'vant';

export default async function (id,isLogin,cellPhone) {
  if (isLogin) {
    let responce = null
    try {
      responce = await addItemToCart(id, cellPhone)
      if (responce.state === 200) {
        Toast({
          message: '添加成功',
          icon: 'success',
        });
      }else{
        Toast({
          message: '添加失败',
          icon: 'cross',
        });
      }
    } catch {
      Toast({
        message: '请求超时',
        icon: 'cross',
      });
    }
    
  } else {
    Dialog.confirm({
      message: '请先登录',
    })
      .then(() => {
        this.$router.push('/login')
      })
      .catch(() => {
        return
      });
  }
}
