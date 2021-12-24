<template>
<div>
 ceshi2--{{a.forEach(item=>item())}}
 <button @click="clickk">click-{{aaa111}}</button>
 </div>
</template>
 
<script lang="ts" setup>
import { ref,onErrorCaptured, onMounted ,h, getCurrentInstance} from "vue"
let a = ref(new Array())
// const render = function () {
//   return h('h1', {}, 'Some title')
// }
let aaa111 = 123
const clickk = () =>{
    a.value = [Date.now()]
    // render()
}
// export default {
//   data(){
//     return {
//       a:[],
//       aaa111: 123
//     }
//   },
//   mounted(){
//     console.log(this.$el.offsetHeight)
//   },
//   methods:{
//     clickk() {
//       this.a = 123
//       // render()
//     }
//   }
// }
</script>
 
<style lang="scss" scoped>
 
</style>