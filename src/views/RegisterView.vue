<script setup lang="ts">
import { auth } from "@/firebase/firebase"
import { db } from "@/firebase/firebase"

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore"
import { reactive } from "vue";
import { useRouter } from "vue-router";


const router = useRouter()


let userInfo = reactive({
    uid: "",
    email: "",
    password: "",
    username: "",
    grade: "",
    status: false
})

async function addUserInfo() {
    const docRef = await setDoc(doc(db, "users", userInfo.uid), {
        uid: userInfo.uid,
        username: userInfo.username,
        email: userInfo.email,
        grade: userInfo.grade,
    });
}

const registerUser = () => {
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
            userInfo.uid = userCredential.user.uid;
            addUserInfo()
            router.push("/")
        })
        .catch((e) => {
            alert(e.message)
        });
}
</script>

<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
            <div class="form-group">
                <label for="username">表示名</label>
                <input type="text" class="form-control" id="username" v-model="userInfo.username">
            </div>
            <div class="form-group">
                <input type="radio" id="option1" value="1" v-model="userInfo.grade" />
                <label for="option1">WIP/新人</label>
                <br>
                <input type="radio" id="option2" value="2" v-model="userInfo.grade" />
                <label for="option2">TERM</label>
                <br>
                <input type="radio" id="option3" value="3" v-model="userInfo.grade" />
                <label for="option3">GP</label>
                <br>
                <input type="radio" id="option4" value="4" v-model="userInfo.grade" />
                <label for="option4">院生以上</label>
                <br>
            </div>
            <div class="form-group">
                <label for="email">メールアドレス:</label>
                <input type="email" class="form-control" id="email" v-model="userInfo.email">
            </div>
            <div class="form-group">
                <label for="password">パスワード:</label>
                <input type="password" class="form-control" id="password" v-model="userInfo.password">
            </div>
            <button type="submit" class="btn btn-info">登録</button>
        </form>
        <RouterLink to="/">ログイン</RouterLink>
    </div>
</template>

<style scoped>
li {
    list-style: none
}
</style>