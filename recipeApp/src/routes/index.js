import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Detail from '../components/Detail.vue'
import Signup from '../components/Signup.vue'
import AddRecipe from '../components/AddRecipe.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component:Login
    
  },
  {
    path: '/Signup',
    name: 'Signup',
    component:Signup
    
  },
  {
    path: '/AddRecipe',
    name: 'AddRecipe',
    component:AddRecipe  
  },
  {
    path: '/Detail',
    name: 'Detail',
    component:Detail
    
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router