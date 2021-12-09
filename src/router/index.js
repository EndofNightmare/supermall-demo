import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

// 懒加载
const Home = ()=> import('@/views/Home/Home')
const Category = ()=> import('@/views/Category/Category')
const Cart = ()=> import('@/views/Cart/Cart')
const Profile = ()=> import('@/views/Profile/Profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 创建router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导出后去main.js中做挂载
export default router
