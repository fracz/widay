import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import TaskAscii from "@/components/tasks/TaskAscii.vue";
import TaskRot from "@/components/tasks/TaskRot.vue";
import TaskMorse from "@/components/tasks/TaskMorse.vue";
import TaskVanity from "@/components/tasks/TaskVanity.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/task-ascii',
      name: 'ascii',
      component: TaskAscii
    },
    {
      path: '/task-rot',
      name: 'rot',
      component: TaskRot
    },
    {
      path: '/task-morse',
      name: 'morse',
      component: TaskMorse
    },
    {
      path: '/task-vanity',
      name: 'vanity',
      component: TaskVanity
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
