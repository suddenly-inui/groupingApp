<script setup lang="ts">
import { auth } from "@/firebase/firebase"
import { db } from "@/firebase/firebase"

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, EmailAuthCredential } from "firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore"
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

let email = ref("")
let password = ref("")

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            router.push("/")
        })
        .catch((e) => {
            alert(e.message)
        });
}
</script>

<template>
    <form @submit.prevent="login">
        <div class="form-group">
            <label for="email">メールアドレス:</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="password">パスワード:</label>
            <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <button type="submit" class="btn btn-info">ログイン</button>
    </form>
    <RouterLink to="register">登録</RouterLink>
</template>