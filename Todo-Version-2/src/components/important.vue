<template>
  <div class=" m-auto text-slate-900 pt-3 md:m-0 md:h-ht9 h-ht9 overflow-hidden">
    <div class="rounded-md py-2 border-blue-300 flex flex-col border-2 rounded-m px-2 pb-3">
        <p class=" text-sm font-bold text-center">Important Tasks</p>
    </div>
    <div class="flex my-5 ">
      <h5 class=" m-auto text-center my-1 font-semibold text-xs">You have {{ total }} important tasks </h5>
    </div>
  <ul class="flex flex-wrap py-5 px-1 rounded-md border-blue-300 border-2 h-ht6 overflow-y-scroll ">
    <li v-for="(item, index) in fav" :key="item" class="m-auto">

      <!-- popup needed to be inside the items list to access the specific item from the computed property -->
      <Transition name="fade">
        <div v-show="isPop" id="pop" class="w-40 z-50 h-14 bg-slate-200 border-4 p-2 border-blue-400 absolute top-32 left-1/3 rounded-xl shadow-md shadow-slate-500">
          <div class="relative m-auto text-center text-xs font-bold">
            <p>{{ favPop.toUpperCase() }} unmarked as Important  <font-awesome-icon class="text-sm drop-shadow-lg " icon="fa-solid fa-star" /></p>
          </div>
        </div>
      </Transition>
      <div class="rounded-lg border-2 border-blue-300 shadow-md transition w-56 pb-2 mb-4 md:w-60">
          <div class=" mx-1 flex justify-between">
            <p class=" w-4/12 text-center px-1 my-2 text-xs font-bold uppercase">{{ item.task }}</p>
            <div @click="remove(item, index)" class=" mr-1 pt-1 cursor-pointer">
              <font-awesome-icon class="text-lg drop-shadow-lg hover:text-xl transition-all" icon="fa-solid fa-star" />
            </div>
          </div>  
        
          <textarea disabled v-model=" item.descrip" class="outline-none ml-2 border-0 resize-none bg-slate-200 md:ml-2 pt-1 rounded-md w-11/12 h-36 text-sm indent-1 font-mono"></textarea>
        </div>
    </li>
  </ul>
  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    methods: {
      
        remove(item, index){
          this.favPop = item.task


            this.isPop = true

          //setTimeout to hide the popup after 2.5sec
            setTimeout(()=>{
              this.isPop = false
            }, 1500) // clear the popup in 1.5secs

            //setTimeout to remove the item after the popup disappeared
          setTimeout(()=>{
            this.$store.state.fav = this.$store.state.fav.filter((item, i) => i != index)
          }, 1800) // remove item from favourite after popup disappear
            
        }
    },
    computed: {
      ...mapState({
        fav:'fav'
      }),
        total(){
            if (this.$store.state.fav.length == 0) {
                return 'no'
            }
            else{
            return this.$store.state.fav.length
            }
        }
    },
    data () {
        return {
           isPop:false,
           favPop:''
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