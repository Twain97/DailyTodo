<template>
  <div class=" m-auto text-slate-900 pt-3 md:m-0 md:h-ht9 h-ht9 overflow-hidden">

  <h2 class="text-xs font-semibold text-gray-600 mb-4 ml-6">Hi {{ name }}, What are we doing today?</h2>

  <form name="TaskAndDetails" @submit.prevent="add()" class="rounded-md border-blue-300 flex flex-col border-2 rounded-m px-2 pb-3">
    <div class="flex flex-row justify-center m-auto ">
      <input class="outline-none bg-slate-200 border-2 shadow-md h-6 w-2/5 m-3 text-xs font-bold rounded-md indent-1" 
        name="Task" v-model.trim.lazy="newTask" placeholder="Task"/>
      <input class=" outline-none bg-slate-200 border-2 shadow-md h-6 w-2/5 m-3 text-xs font-bold rounded-md indent-1" 
        name="Details" v-model.trim.lazy="newDescrip" placeholder="Details"/>
    </div>
    
    <button  class="border-2 border-blue-300 shadow-md w-2/6 m-auto hover:w-2/5 transition-all font-semibold rounded-md text-sm" type="submit">ADD</button>
    
  </form>

  <div class="flex my-5 ">
        <h5 class=" m-auto text-center my-1 font-semibold text-xs">You have {{ total }} tasks </h5>
        <button type="button" :disabled="disable"
        class="m-auto outline-none border-2 border-blue-300 shadow-md w-28 hover:w-32 hover:-mt-1 transition-all py-1 font-bold rounded-md text-sm"
        @click="clear()"
        >Clear All</button>
    </div>
     <!-- Favourite popup -->
      <Transition name="fade" class="md:mx-56">
        <div v-show="FavPop" id="pop" class="w-40  h-14 bg-slate-200 border-4 p-2 border-blue-400 absolute top-32 left-1/3 rounded-xl shadow-md shadow-slate-500 ">
          <div class="relative m-auto text-center text-xs font-bold">
            <p><span class="first-letter:uppercase">{{ sltdItem }}</span> marked as important  <font-awesome-icon class="text-sm drop-shadow-lg" icon="fa-solid fa-star" /></p>
          </div>
        </div>
      </Transition>
      <!-- Completed popup-->
      <Transition name="fade" class="md:mx-56">
        <div v-show="compPop" id="pop" class="w-40  h-14 bg-slate-200 border-4 p-2 border-blue-400 absolute top-32 left-1/3 rounded-xl shadow-md shadow-slate-500">
          <div class="relative m-auto text-center text-xs font-bold">
            <p><span class="first-letter:uppercase">{{ sltdItem }}</span> has been Completed <font-awesome-icon @click="addComplete(item, index)"
                  class="text-lg transition-all drop-shadow-lg" icon="fa-solid fa-check" /></p>
          </div>
        </div>
      </Transition>

  <ul class="flex flex-wrap py-5 px-1 rounded-md border-blue-300 border-2 h-ht6 overflow-x-scroll ">
    <li v-for="(item, index) in todo" :key="item.index" class="m-auto">

      <!-- pass the item as parameter into the function to perform action on that specific item -->
      
      <!-- to use the @double tap event you must install vue3-touch-event -->
      <!-- run 'npm install vue3-touch-events' -->
      <div
      class="rounded-lg border-2 border-blue-300 shadow-md transition w-56 pb-2 mb-4 md:w-60">
          <div class=" mx-1 flex justify-between">
            <p class=" w-4/12 text-center px-1 my-2 text-sm font-semibold first-letter:uppercase">{{ item.task }}</p>
            <div  class="-mr-3 flex space-x-2">
              <font-awesome-icon @click="addFavorite(item)"
              class="text-lg hover:text-2xl transition-all drop-shadow-lg mr-1 pt-1 cursor-pointer" 
              icon="fa-solid fa-star" />

              <font-awesome-icon @click="addComplete(item, index)"
              class="text-lg hover:text-2xl transition-all drop-shadow-lg mr-1 pt-1 cursor-pointer" 
              icon="fa-solid fa-check" />

              <font-awesome-icon @click="remove(index)"
              class="text-lg hover:text-2xl transition-all drop-shadow-lg pt-1 -mt-4 cursor-pointer" 
              icon="fa-solid fa-xmark-circle" />
            </div>
          </div>  
        
          <textarea disabled v-model=" item.descrip" class="outline-none ml-2 border-0 resize-none bg-slate-200 md:ml-2 pt-1 rounded-md w-11/12 h-36 text-sm indent-1 font-mono"></textarea>
        
        </div>
    </li>
  </ul>
  
</div>
</template>

<script>
import { mapState} from 'vuex'
import { getAuth } from 'firebase/auth'
export default {
    mounted () {
      setTimeout(()=>{
        const getUser = getAuth().currentUser.email
        const userBracRemov = getUser.split("@", String(1))
        this.name = String(userBracRemov)
      }, 20)
      
    },
    methods: {
    //  add user input function
      add(){
        if (this.newTask != "" && this.newDescrip != "") {

        // create the object to push the newTask and newDescrip and store as items
        const items=
        {task:this.newTask, descrip:this.newDescrip}

        // call the action from the store and dispatch item as the payload
        this.$store.dispatch('addTodo', items)        
      
        this.newTask=""
        this.newDescrip=""
      } 
      else {
        alert('please fill in the Task and Description')
        this.newTask=""
        this.newDescrip=""
      }
       
      },
      // function to add selected item to complete
      addComplete(item, index){

        // set the selected item (sltdItem) task name in the popup

        this.sltdItem = item.task

        // create a popup action that last for 1.5secs to notify user of item added to the favourite

        this.compPop = true;
  
        setTimeout(()=>{
          this.compPop = false
        }, 1500) // close the popup at 1.5secs

        // pass the item as the payload to push to the completed array
       this.$store.dispatch('addCompleted', item)

      // then remove the item form the list of todo
        setTimeout(() => {
          this.$store.state.todo = this.$store.state.todo.filter((item,i)=> i != index)
        }, 2500);
      },

      // function to add to favourite
      addFavorite(item){

        // set the selected item (sltdItem) task name in the popup

        this.sltdItem = item.task
        
        // create a popup action that last for 1.5secs to notify user of item added to the favourite

          this.FavPop = true;
        
        setTimeout(()=>{
          this.FavPop = false
        }, 1500) // close the popup at 1.5secs

        this.$store.dispatch('addFav', item)
      },

      // function to remove the selected item
      remove(index){
        //refer to the todo in the store state and filter the todo
        this.$store.state.todo = this.$store.state.todo.filter((item, i) => i != index)
      },

      // function to clear all todo
      clear(){
        var msg = "Do you want to clear all?"
        // refer to the todo in the store state
        //if not empty, ask to confirm if confirm, clear all
          if (this.$store.state.todo.length != 0) {
            if (confirm(msg) == true) {
              this.$store.dispatch('clearTodo')
          }
        }
      }
    },
    // to return all item in todo
    computed: {
      ...mapState({
        todo:'todo',
      }),

      // return total number of items in todo
      total(){
        if (this.todo.length == 0) {
          return "no"
        }
        else{
          return this.todo.length
        }
      }
    },
    
    data () {
      return {
        name:"",
        newTask:"",
        newDescrip:"",
        display:true,
        disable:false,
        todoOpt:false,
        FavPop:false,
        compPop:false,
        sltdItem:''
      }
    }
}

</script>

<style>


.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>