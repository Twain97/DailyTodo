<template>
  <div class=" m-auto text-slate-900 pt-3 md:m-0 md:h-ht9 h-ht9 overflow-hidden">
    <div class="rounded-md py-2 border-blue-300 flex flex-col border-2 rounded-m px-2 pb-3">
        <p class=" text-sm font-bold text-center">Completed Tasks</p>
    </div>

    <div class="flex my-5 ">
        <h5 class=" m-auto text-center my-1 font-semibold text-xs">You have {{ total }} completed tasks </h5>
        <button type="button" 
        class="m-auto outline-none border-2 border-blue-300 shadow-md w-28 py-1 font-bold rounded-md text-sm"
        @click="clear()"
        >Clear All</button>
    </div>
  <ul class="flex flex-wrap py-5 px-1 rounded-md border-blue-300 border-2 h-ht6 overflow-y-scroll ">
    <li v-for="item in completed" :key="item" class="m-auto">
      <div class="rounded-lg border-2 border-blue-300 shadow-md transition w-56 pb-2 mb-4 md:w-60">
          <div class=" mx-1 flex justify-center">
            <p class=" w-4/12 text-center px-1 my-2 text-sm font-bold uppercase">{{ item.task }}</p>
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
        clear(){
            var msg = "Do you want to clear all?"
            if (this.$store.state.completed.length != 0) {

              if( confirm(msg)== true ){
                this.$store.dispatch('clearCompleted')
              }
            }
        }
    },
    computed: {
      ...mapState({
        completed:'completed'
      }),
      total(){
            if (this.$store.state.completed.length == 0) {
                return 'no'
            }
            else{
            return this.$store.state.completed.length
            }
      }
    },
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>