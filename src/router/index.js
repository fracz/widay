import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import TaskAscii from "@/components/tasks/TaskAscii.vue";
import TaskRot from "@/components/tasks/TaskRot.vue";
import TaskMorse from "@/components/tasks/TaskMorse.vue";
import TaskVanity from "@/components/tasks/TaskVanity.vue";
import TaskStegan from "@/components/tasks/TaskStegan.vue";

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
            path: '/task-ascii/:code',
            name: 'asciiCode',
            component: TaskAscii
        },
        {
            path: '/task-rot',
            name: 'rot',
            component: TaskRot
        },
        {
            path: '/task-rot/:code',
            name: 'rotCode',
            component: TaskRot
        },
        {
            path: '/task-morse',
            name: 'morse',
            component: TaskMorse
        },
        {
            path: '/task-morse/:code',
            name: 'morseCode',
            component: TaskMorse
        },
        {
            path: '/task-vanity',
            name: 'vanity',
            component: TaskVanity
        },
        {
            path: '/task-vanity/:code',
            name: 'vanityCode',
            component: TaskVanity
        },
        {
            path: '/task-steganography',
            name: 'steganography',
            component: TaskStegan
        },
        {
            path: '/task-steganography:code',
            name: 'steganographyCode',
            component: TaskStegan
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
