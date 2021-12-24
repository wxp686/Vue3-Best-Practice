<!--
 * @Description: 
 * @Autor: wxp
 * @Date: 2021-12-22 14:30:35
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-23 10:26:25
-->
<script lang="ts">
</script>
<script setup lang="ts">
import { ref ,shallowRef, triggerRef } from 'vue'

withDefaults(defineProps<{ msg: string }>(),{
  msg:'123'
})

const count = ref(0)
const color = 'red'

// const msg = '123'

const shallow = shallowRef({
  greet:'Hello,world'
})
const change = () => {
  shallow.value.greet = '123'
  setTimeout(()=>{
    triggerRef(shallow)
    shallow.value.greet = '456'
    shallow.value.greet = '789'
    triggerRef(shallow)
  },1000)
}


</script>

<template>
  <div>{{ msg }}</div>

  <div>{{shallow}}</div>
  <button @click="change">change</button>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped>
div {
  color: v-bind('color');
}
</style>
