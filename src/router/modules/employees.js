import Layout from '@/layout'
// 员工路由规则
export default {
  path: '/employees',
  name: 'employees', // 一级路由加了 name属性，后面做权限的时候用到
  component: Layout,
  children: [{
    path: '', // 不用写值，二级路由默认路由
    component: () => import('@/views/employees'), // 动态按需加载
    meta: {
      title: '员工管理', icon: 'user'
    }
  }]
}
