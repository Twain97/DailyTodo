import { createRouter, createWebHashHistory} from 'vue-router'
import {auth} from './components/firebase'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
      { 
        path: '/', 
        name:'land',
        component:()=>import('./components/Landing.vue')
      },
      { 
        path: '/todo', 
        name:'todo',
        meta: { requiresAuth:true},
        component:()=>import('./components/Todo.vue')
      },
      { 
        path: '/important',
        name:'important',
        meta: { requiresAuth:true },
        component: ()=> import('./components/important.vue')
      },
      { 
        path: '/completedTask',
        name:'completedTask', 
        meta: { requiresAuth:true },
        component:()=> import('./components/completedTasks.vue')
      }
    ]
})

  auth.onAuthStateChanged((user)=>{

    // if theres no user signed in, push to Landing
    if(!user){
      return router.push('/')
    }
    // if user is signed in and wants to redirect back to Landing,
    //  direct back to the specific page the user is on
    router.beforeEach(async(to)=>{
      if(to.path == '/' && auth.currentUser){
        return router.push(router.currentRoute)
      }
      if(to.path == '/todo' && !auth.currentUser){
        return router.push('/')
      }
      if(to.path == '/completedTask' && !auth.currentUser){
        return router.push('/')
      }
      if(to.path == '/important' && !auth.currentUser){
        return router.push('/')
      }
    })
  })
export default router