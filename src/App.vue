<template> 
  <div class=" m-auto p-0 w-screen md:w-4/5 md:m-auto overflow-hidden md:overflow-hidden h-screen" >
    <div class="overflow-hidden">
      <Header class="sticky top-0 z-10"/>
      <div class="md:flex bg-blue-200 md:shadow-lg  h-screen ">
        <nav class=" md:flex hidden rounded-r-md drop-shadow-2xl md:pr-2 bg-slate-200 w-2/5 ">
            <!-- <div>{{ user }}</div> -->
            <ul class="w-full h-fit flex flex-col ml-2 mt-8 space-y-8">
                <li v-if="$store.state.user" 
                 class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2">
                  <router-link  class="outline-none flex space-x-4 md:py-3 w-full pl-3"  to="/todo"> 
                    <div class="text-sm"><font-awesome-icon icon="fa-solid fa-home" /></div>
                    <div class="text-xs font-semibold">Todo</div>
                  </router-link> 

                  <div class=" bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"><p class="m-auto">{{ todoTotal }}</p></div>
                </li>
                <li v-if="$store.state.user" 
                 class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2">
                  <router-link  class="outline-none flex space-x-4 md:py-3 w-full pl-3"  to="/important"> 
                    <div class="text-sm"><font-awesome-icon icon="fa-solid fa-star" /></div>
                    <div class="text-xs font-semibold">Important Task</div>
                  </router-link>
                  
                  <div class=" bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"><p class="m-auto">{{ favTotal }}</p></div>
                </li>
                <li v-if="$store.state.user" 
                 class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md  transition flex flex-row space-x-2 px-2">
                  <router-link  class="outline-none flex space-x-4 md:py-3 w-full pl-3"  to="/completedTask">   
                    <div class="text-sm "><font-awesome-icon icon="fa-solid fa-check" /></div>
                    <div class= "text-xs font-semibold">Completed Task</div>
                  </router-link>
                  <div class=" bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"><p class="m-auto">{{ completeTotal }}</p></div>
                </li>
                <li class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md  transition flex flex-row space-x-2 pl-2">
                  <router-link  class="outline-none flex space-x-4 md:py-3 w-full pl-3"  to="#">
                    <div class="text-sm"><font-awesome-icon icon="fa-solid fa-headset" /></div>
                    <div class=" text-xs font-semibold">Contact Us</div>
                  </router-link>
                </li>
                
                <li v-if="$store.state.user"
                 class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 "
                 @click="(logout(), showNav())">
                    <div class="outline-none flex space-x-4 py-2 w-full pl-3" to="#">
                        <div class="text-sm"><font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right" /></div>
                        <div class=" text-xs font-bold">Logout</div>
                    </div>
                </li>
                <li v-if="!$store.state.user"
                 class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 "
                 @click="showNav()">
                    <router-link class="outline-none flex space-x-4 py-2 w-full pl-3" to="/">
                        <div class="text-sm"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /></div>
                        <div class=" text-xs font-bold">Log in</div>
                    </router-link>
                </li>
                <!-- <li>
                    <div>fontAwesome</div>
                    <div class="hover:bg-sky-200 transition text-sm font-">My day</div>
                </li> -->
                
            </ul>
        </nav>
        <router-view class="md:w-full md:h-full overflow-hidden"></router-view>
      </div>
      
    </div>
  </div>
 
  
</template>
<script>
import Header from "../src/components/Header.vue"
import Todo from "../src/components/Todo.vue"
import router from './router'
import { onBeforeMount, onMounted, ref } from "vue"
import { useStore, mapState} from "vuex"
import { browserSessionPersistence, getAuth, 
onAuthStateChanged, setPersistence } from "firebase/auth"
export default{
    components: {
      Header,
      Todo
    }, 

    computed: {
      ...mapState({
        totalTodo : 'todo',
        totalFav : 'fav',
        totalCompleted : 'completed'
      }),
      completeTotal(){
        return this.totalCompleted.length
      },
      favTotal(){
        return this.totalFav.length
      },
      todoTotal(){
        return this.totalTodo.length
      }
    },
    // watcher to monitor router change 
    // if the user is null, redirect to landing
    // watch:{
    // $route(){

    //    const auth = getAuth()
    //    if(auth.currentUser== null){
    //      router.push('/')
          
    //    }
        
    //    else{
    //      router.resolve //resolve to the desired route
    //    }

    //   }
    // },
   methods: {
    logout(){
      this.$store.dispatch('logOut')
    }
   },

  // before loading the whole app, check if the user is logged in or not
  

  setup(){
    const store = useStore()
    const auth = getAuth() //handle the getAuth from firebase auth
    onBeforeMount(()=>{
      store.dispatch('fetchUser')
    })
    // each time the component is (re)mounted, set the id, handle the token as well as the cookie browserSessionPersistence
    // also set the persistence so when new tab is open, there will be need for another verificationa as well as generate new token
    onMounted(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          // get the user token
          // alert(user.email)
          user.getIdToken().then((token)=>{
            // set the cookie session max time
            document.cookie = `session= ${token}; max-age= ${60*60*24}`
          })
          // set the persistent to browser persistence so user has to sign in again when the open another tab
          setPersistence(auth, browserSessionPersistence)
        }
      })
    })
    
  }
  
}
</script>