router.beforeEach((to, from, next) => {
    if (to.matched.length ===0) {  //如果未匹配到路由
      from.path? next({ path:from.path}) : next('/err');   //如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
    } else {
      next();    //如果匹配到正确跳转
    }
});  