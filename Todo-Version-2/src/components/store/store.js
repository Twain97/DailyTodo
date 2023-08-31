import { createStore } from "vuex";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut 
} from "firebase/auth";
import {auth} from '../firebase'
import router from '../../router';


const store = createStore({
    state:{
        todo:[
            // dummy task/descrip
            
            // {task:"eat", descrip:'Food'},
            // {task:"eat", descrip:'Food'},
            // {task:"eat", descrip:'Food'},
            // {task:"eat", descrip:'Food'},
            // {task:"eat", descrip:'Food'},
        ],
        fav:[],
        completed:[],

        // user state
        user : null
    },
    mutations: {
    
        pushTodo(state, payload){
            state.todo.unshift(payload)
        },

        //    item will be passed as payload
        pushFav(state, payload){
            state.fav.unshift(payload)
        },
        pushCompleted(state, payload){
            state.completed.unshift(payload)
        },
        clrTodo(state){
            state.todo=[]
        },
        clrCompltd(state){
            state.completed=[]
        },

        // user mutations
        setUser(state, user){
            state.user = user
        },
        clearUser(state){
            state.user = null
        }
    },
    actions: {
        
        addTodo({commit},payload){
            commit('pushTodo', payload)
        },
        addFav({commit},payload){
            commit('pushFav', payload)
        },
        addCompleted({commit}, payload){
            commit('pushCompleted', payload)
        },
        clearTodo({commit}){
            commit('clrTodo')
        },
        clearCompleted({commit}){
            commit('clrCompltd')
        },

        // user actions

        // async login users
        async login({commit}, details){

            // desructure or retrieve email and password in details
            const {email, password} = details

            // verify them with firebase signin authentication 
            try{

                await signInWithEmailAndPassword(auth, email, password)

            }catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        alert('User does not exist, please create an account')
                        break;
                    case 'auth/wrong-password':
                        alert('wrong password')
                        break;
                    case 'auth/missing-password':
                        alert('please enter your password')
                        break;
                    case 'auth/network-request-failed':
                        alert('No network detected')
                    break;
                    default:
                        alert(error.code)
                        console.log(error.code)
                        break;
                }
                
                return // return the result if user is verified or not
                }
                commit('setUser', auth.currentUser) //set the current user in the state
                // direct to the required route
                router.push('/loading')
            },

            // register new user 
            async register({commit}, details){
                // destructure or retrieve the email and password from details
                const {email, password} = details
                try{

                     // verify them with firebase signin authentication 
                    await createUserWithEmailAndPassword(auth, email, password)
                }catch(error){
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            alert('User already exist, please login')
                            // router.push('/')
                            break;
                        case 'auth/invalid-email':
                            alert('Email incorrect')
                            break;
                        case 'auth/operation-not-allowed':
                            alert('Operation not allowed')
                            break;

                        case 'auth/weak-password':
                            alert('Weak password')
                            break;
                        case 'auth/missing-password':
                            alert('please enter your password')
                            break;
                        case 'auth/network-request-failed':
                            alert('No network detected')
                        break;
                            
                        default:
                            alert('something went wrong')
                            console.log(error.code)
                            break;
                    }
                    return // return the result if user is verified or not
                }
                commit('setUser', auth.currentUser) //set the current user in the state
                // direct to the required route
                router.push('/loading')
            },
            async logOut({commit}){
                
                await signOut(auth)

                commit('clearUser')
                
                router.push('/')
                
            },
            // fetch the current user
            fetchUser({commit}){
                // this is check to see if the user is logged in everytime theres a refresh
                // and prevent the user from being directed to log in page on every reload
                auth.onAuthStateChanged(async user =>{
                    // check if user is online or not
                    if (user === null) {
                        // if user is empty
                        commit('clearUser')
                       
                    }else{
                        // if user is not empty
                        commit('setUser', user)

                            if(router.isReady() && router.currentRoute.value.path === '/'){
                                router.push('/loading')
                        }
                    }
                })
            }
    }
})

export default store;