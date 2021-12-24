<!--
 * @Description:
 * @Autor: wxp
 * @Date: 2021-12-22 16:43:04
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-23 14:12:52
-->
<template>
  <div>
    <div style="margin-top:20px">ceshi</div>
    {{aaa}}
    <div @click="add1">外{{count}}</div>
    <div @click="add2">setup{{count2}}</div>
    <div @click="c=[Date.now()]"><span>绿色</span> </div>
    <div>{{c.map(item=>item())}}</div>
    <Ceshi2 v-show="visible"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent ,defineAsyncComponent, toRaw, isReactive, isProxy, isRef} from 'vue'
import { mapMutations } from 'vuex'
import { useStore } from '../store'
export default defineComponent({
  components:{
    Ceshi2: defineAsyncComponent(() => import('../components/ceshi2.vue'))
  },
  setup(){
    const store = useStore()
    const count2 = computed(() => store.state.ceshi.count)
    return {
      ...mapMutations({
        add2:'ceshi/add'
      }),
      count2
    }
  }, 

  data() {
    return {
      aaa: 'red',
      b: '123',
      visible: true,
      c: new Array()
    }
  },
  mounted(){
    // let xhr = new XMLHttpRequest()
    // xhr.onreadystatechange = () =>{
    //   if(xhr.readyState===4 && xhr.status==200){
    //     console.log(xhr.responseText)
    //   }
    // }
    // xhr.open('GET','/api/code/banners?blocks=111&topic=2')
    setTimeout(() => {
        this.$http.get('/code/banners?blocks=111&topic=2').then(res=>{
          console.log(res)
        })
    }, 5000);
  },
  computed:{
      count() {
        return this.$store.state.ceshi.count
      }
  },
  methods:{
    add1(){
      this.$store.commit('ceshi/add')
    }
  }
})
</script>

<style lang="scss">
div{
  color: v-bind('aaa');
  span {
    color:green
  }
}
</style>