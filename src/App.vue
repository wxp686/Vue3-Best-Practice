<!--
 * @Description: 
 * @Autor: wxp
 * @Date: 2021-12-22 14:30:35
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-23 10:25:37
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { onErrorCaptured } from "vue";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <button @click="$router.push('ceshi')">ceshi</button>
  <button @click="$router.push('HelloWorld')">HelloWorld</button>
  <button @click="$router.push('notwsdfsdf')">not</button>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
