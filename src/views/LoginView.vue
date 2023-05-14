<script setup lang="ts">
import MyButton from "@/components/myButton.vue";
import { auth } from "@/firebase/firebase";
import { db } from "@/firebase/firebase";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  EmailAuthCredential,
} from "firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import myButton from "@/components/myButton.vue";

const router = useRouter();

let email = ref("");
let password = ref("");

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push("/");
    })
    .catch((e) => {
      alert(e.message);
    });
};
</script>

<template>
  <div class="contents_container">
    <h1 class="title">LogIn</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="メールアドレス"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="パスワード"
        />
      </div>
      <myButton type="submit" class="btn-info">ログイン</myButton>
    </form>
    <p>OR</p>
    <RouterLink to="register">会員登録</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.contents_container {
  text-align: center;
}

.title {
  margin-bottom: 20px;
}
input {
  font-size: 1rem;
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
  border-radius: none;
}

.btn-info{
  width: 80%;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
