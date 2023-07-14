import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    }
  ]
})

export default router
