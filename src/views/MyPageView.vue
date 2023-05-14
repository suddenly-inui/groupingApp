<script setup lang="ts">
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { routerKey, useRoute, useRouter } from "vue-router";
import loading from "@/components/loading.vue";
import { onMounted, reactive, ref } from "vue";
import type { User } from "../types/user";
import { usersColRef } from "@/types/firestore";
import {gradeToStr} from "@/utils/utils"

const router = useRouter();

let login = ref(false);
let user = reactive<User>({
  uid: "",
  email: "",
  grade: "",
  username: "",
});

async function getUid(): Promise<void> {
  if (!login.value) {
    return;
  }
  let snap = await getDoc(doc(usersColRef, auth.currentUser!.uid));
  let data: string = snap.data()!.uid;
  user.uid = data;
}

async function getUserEmail() {
  if (!login.value) {
    return;
  }
  let snap = await getDoc(doc(usersColRef, auth.currentUser!.uid));
  let data: string = snap.data()!.email;
  user.email = data;
}

async function getUserGrade() {
  if (!login.value) {
    return;
  }
  let snap = await getDoc(doc(usersColRef, auth.currentUser!.uid));
  let data: string = snap.data()!.grade;
  user.grade = data;
}

async function getUserName() {
  if (!login.value) {
    return;
  }
  let snap = await getDoc(doc(usersColRef, auth.currentUser!.uid));
  let data: string = snap.data()!.username;
  user.username = data;
}

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      login.value = true;
      getUid();
      getUserEmail();
      getUserGrade();
      getUserName();
    } else {
      login.value = false;
      router.push("/");
    }
  });
});
</script>

<template>
  <div v-if="login">
    <div class="contents_container">
      <h1 class="title">MyPage</h1>
      <div class="box">
        <div>UID:</div>
        <div>{{ user.uid }}</div>
        <div>ユーザーネーム:</div>
        <div>{{ user.username }}</div>
        <div>メールアドレス:</div>
        <div>{{ user.email }}</div>
        <div>ポジション:</div>
        <div>{{ gradeToStr(user.grade) }}</div>
      </div>
    </div>
  </div>

  <div v-else>
    <loading />
  </div>
</template>

<style lang="scss" scoped>
.box{
  display: grid;
  grid-template-columns: 40% 60%;
}
</style>
