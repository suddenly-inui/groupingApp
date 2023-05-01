<template>
  <Header />
  <RouterView />
  
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/header.vue"

import { db, auth } from "@/firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";


</script>