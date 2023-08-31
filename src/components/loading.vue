<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full flex h-full">
        <div class="m-auto w-fit flex flex-col">
            <BounceLoader/>
            <b>Loading...</b>
        </div>
    </div>

</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import router from '../router.js'
export default {
    components: {
        BounceLoader
    },
    mounted () {
        setTimeout(() => {
      router.push('/todo'),
      console.log('Directed to home!')
    }, 2000);
    }
}
</script>

<style>

</style>