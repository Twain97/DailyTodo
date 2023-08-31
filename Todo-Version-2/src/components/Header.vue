<template>
    <header class="text-slate-800" >
        <div class="flex py-3 px-6 md:align-middle justify-between bg-slate-200">
            <font-awesome-icon id="open" class="text-lg md:hidden cursor-pointer" icon="fa-solid fa-bars" @click="showNav()" />
            <font-awesome-icon id="close" class="text-xl md:hidden absolute -ml-52 cursor-pointer" icon="fa-solid fa-xmark" @click="showNav()" />
            
            <div v-if="$store.state.user"
             class="hidden w-14 h-14 md:flex ml-3  md:align-middle space-x-1">
                <div class="md:m-1 ">
                    <img src="../img/user.png" alt="user" class="rounded-full -z-20">
                <div class="w-3 h-3 ml-10 relative -mt-3 z-10 bg-green-500 rounded-full"></div>
            </div>
            <p v-if="$store.state.user"  class="text-sm font-bold my-auto" >{{ name }}</p>

            </div>
            <!-- the lgo links to home page -->
            <router-link class="outline-none -mt-3 md:-mt-1 pt-1" to="/"><img :src="logo" alt="DTlogo" class="w-8 md:w-14"></router-link>
            
            <font-awesome-icon  v-if="$store.state.user"
            icon="fa-solid fa-person-walking-dashed-line-arrow-right" 
            class="hover:text-xl transition-all cursor-pointer md:mt-3 md:mr-2 "  @click="logout()"/>
            
            <font-awesome-icon  v-if="!$store.state.user"
            icon="fa-solid fa-right-to-bracket" 
            class="hover:text-xl transition-all cursor-pointer md:mt-3 md:mr-2 "  @click="logout()"/>
        </div>
        
        <nav  id="nav" class="absolute bg-opacity-95 md:hidden rounded-r-md drop-shadow-2xl bg-slate-200 h-screen -ml-72 w-2/4" >
            <div v-if="$store.state.user" 
                class="ml-5 mt-5 opacity-100">
                <img src="../img/user.png" alt="user" class="rounded-full -z-20">
                <div class="w-3 h-3 ml-11 relative -mt-3 z-10 bg-green-500 rounded-full"></div>
            </div>
            <p v-if="$store.state.user"  class="text-center mr-10 text-sm font-bold">{{ name }}</p>
            <ul class="  h-fit border-4 flex flex-col mt-4 space-y-6">
                <li v-if="$store.state.user"
                 @click="showNav()" 
                 class="hover:bg-sky-200 hover:shadow-lg  hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3 ">
                    <router-link  class="outline-none flex space-x-4 py-2 w-full pl-3" to="/todo"> 
                        <div class="text-xs"><font-awesome-icon icon="fa-solid fa-home" /></div>
                        <div class="text-xs font-bold">Todo </div>
                    </router-link>
                    
                    <div class=" bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"><p class="m-auto">{{ todoTotal }}</p></div>
                </li>
                <li v-if="$store.state.user"
                 @click="showNav()" 
                 class="hover:bg-sky-200 hover:shadow-lg  hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3">
                    <router-link class="outline-none flex space-x-4 py-2 w-full pl-3" to="/important"> 
                        <div class="text-xs"><font-awesome-icon icon="fa-solid fa-star" /></div>
                        <div class="text-xs font-bold">Important Task </div>
                    </router-link>

                    <div class=" bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"><p class="m-auto">{{ favTotal }}</p></div>
                </li>
                <li v-if="$store.state.user"
                 @click="showNav()" 
                 class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md  transition flex flex-row space-x-2 pl-2 pr-3">
                    <router-link class="outline-none flex space-x-4 py-2 w-full pl-3" to="/completedTask">
                        <div class="text-sm "><font-awesome-icon icon="fa-solid fa-check" /></div>
                        <div class= "text-xs font-bold">Completed Task </div>
                    </router-link>

                    <div class=" bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"><p class="m-auto">{{ completeTotal }}</p></div>
                </li>
                <li
                 @click="showNav()" 
                 class="hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md  transition flex flex-row space-x-2 pl-2 pr-3">
                    <router-link class="outline-none flex space-x-4 py-2 w-full pl-3" to="#">
                        <div class="text-sm"><font-awesome-icon icon="fa-solid fa-headset" /></div>
                        <div class=" text-xs font-bold">Contact Us</div>
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
            
            </ul>
        </nav>
    </header>
</template>
<script>
import logo from '../img/logo.png'
import { mapState } from 'vuex'
import { getAuth } from 'firebase/auth'
export default{
    computed: {
        ...mapState({
            totalTodo : 'todo',
            totalFav:'fav',
            totalCompleted:'completed'
        }),
        todoTotal(){
            return this.totalTodo.length
        },
        favTotal(){
            return this.totalFav.length
        },
        completeTotal(){
            return this.totalCompleted.length
        }
    },

    methods: {
        logout(){
            this.$store.dispatch('logOut')
        },
        showNav(){
            var nav = document.getElementById('nav')
            var open = document.getElementById('open')
            var close = document.getElementById('close')

            if(nav.style.marginLeft== '-18rem'){
                nav.style.transition = "300ms ease-in-out"
                nav.style.marginLeft ='0rem'

                open.style.marginTop ='-13rem'
                open.style.transition = "500ms ease-in-out"
                close.style.transition = "700ms ease-in-out"
                close.style.rotate = '360deg'
                close.style.marginLeft ='20px'
            }
            else{
                nav.style.marginLeft = '-18rem'


                open.style.transition = "1050ms ease-in-out"
                open.style.marginTop ='0rem'
                close.style.rotate = '-360deg'
                close.style.transition = "700ms ease-in-out"
                close.style.transitionDelay ="300ms"
                close.style.marginLeft = '-13rem'
            }
        }
    },

    watch:{
        $route(){
            // try and remove the setTimeout when theres light
            setTimeout(()=>{
                const getUser = getAuth().currentUser.email
                const userSplt = getUser.split("@", String(1))
                const stringUser = String(userSplt)
                this.name = stringUser
            }, 30)
        }
    },
    data() {
        return {
            image:"",
            name:"",
            logo:logo,
        }
    }
}
</script>