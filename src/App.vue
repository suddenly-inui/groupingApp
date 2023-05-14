<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
  <Footer></Footer>
  
</template>

<style lang="scss" >
.container{
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100vh;
}

.contents_container{
  margin: 0 auto;
  margin-top: 20px;
  max-width: 500px;
}

.title{
  text-align: center;
}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/header.vue"

import { db, auth } from "@/firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Footer from './components/footer.vue';


</script>