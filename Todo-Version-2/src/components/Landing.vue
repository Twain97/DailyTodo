<template>
  <!-- landing load -->
  <div v-if="loadingShow" class="absolute z-50 w-full h-full bg-blue-200">
    <div class="w-full flex h-full">
        <div class="m-auto w-fit flex flex-col">
            <BounceLoader/>
            <b>Loading...</b>
        </div>
    </div>
  </div>

  <div class="flex items-center h-full w-screen">
    <main class=" mx-auto px-7 py-7  flex flex-col space-y-5 border-2 border-silver-500 shadow-xl rounded-lg md:w-4/5 md:mb-32  w-4/5">
      <h1 class="text-gray-800 font-bold flex flex-col text-lg items-center justify-centerm text-center">
        <!-- <font-awesome-icon icon="fa-solid fa-user-plus" class="text-4xl text-gray-500"/> -->
        Become a member!
      </h1>
      <form @submit.prevent="register()" class=" w-full flex space-y-8 flex-col">
        <div class="flex flex-col">
          <b class="text-gray-800">Email:</b>
          <input type="email" 
          class="border-solid indent-4 border-2 rounded-md drop-shadow-sm"
        v-model="registerForm.email"
        placeholder="Email">
        </div>
        
        <div class=" flex flex-col">
          <b class="text-gray-800">Password:</b>
          <div class=" flex flex-row border-solid indent-4 border-2 rounded-md drop-shadow-sm">
                <input class="w-full border-none indent-4"
            type="password"
            v-model="registerForm.password" 
            placeholder="Enter Password"
            id="password"
            >
            <font-awesome-icon icon="fa-solid fa-eye" @click="showPassword" class="p-1 text-gray-600" />
          </div>

          <div class=" mt-4 flex flex-row items-center justify-center"> 
            <button type="submit" class="font-bold"> Signup</button>
          </div>
        </div>
      </form>
      
      <!-- <Button @click="confirm1()" icon="pi pi-check" label="Confirm"
      class="bg-red-600"
      ></Button> -->

      <button @click="googleSignIn" class="bg-bluegray-600 flex flex-row justify-evenly space-x-2 hover:bg-bluegray-400 border-bluegray-700">
          
          <span class="text-black font-bold hover:text-whiteSmoke">Sign up with your Gmail</span>
        </button>
     <button @click="login()" class="font-bold">Login</button>
    </main>
  </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import { useStore } from 'vuex';
import { ref } from 'vue';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import router from '../router';

export default{
  components: {
    BounceLoader
  },
  mounted () {
    this.loadingShow=true
    setTimeout(()=>{
      this.loadingShow=false
    }, 2000)
  },
  data () {
    return {
      loadingShow:true
    }
  },
  setup(){

    const registerForm = ref({})
    const store = useStore()
    const login = ()=>{
      store.dispatch('login', registerForm.value)
    }

    const register = () => {
      
      store.dispatch('register', registerForm.value)
    }

    function showPassword(){
      var toggle = document.getElementById("password")
      if(toggle.type === "password"){
        toggle.type = "text"
      }else{
        toggle.type = "password"
      }
    }
    
    function googleSignIn() {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    
    return router.push('/todo')
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
  })
}

    return{
      registerForm,
      register,
      login,
      googleSignIn,
      showPassword,
    }
  }
}
</script>

<style>

</style>
