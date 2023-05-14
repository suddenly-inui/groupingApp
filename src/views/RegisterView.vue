<script setup lang="ts">
import { auth } from "@/firebase/firebase"
import { db } from "@/firebase/firebase"
import { usersColRef } from "@/types/firestore";
import type { UserInfo } from "@/types/user";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore"
import { reactive } from "vue";
import { useRouter } from "vue-router";
import myButton from "@/components/myButton.vue";


const router = useRouter()

let userInfo = reactive<UserInfo>({
    uid: "",
    email: "",
    password: "",
    username: "",
    grade: "",
    status: false
})

async function addUserInfo() {
    const docRef = await setDoc(doc(usersColRef, userInfo.uid), {
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
    <div class="contents_container">
        <h1 class="title">Register</h1>
        <form @submit.prevent="registerUser">
            <div class="form-group">
                <p>ユーザー名</p>
                <input type="text" class="form-control" id="username" v-model="userInfo.username" placeholder="username">
            </div>
            <div class="form-group radio">
                <p>ポジション</p>
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
                <p>メールアドレス</p>
                <input type="email" class="form-control" id="email" v-model="userInfo.email" placeholder="group@example.com">
            </div>
            <div class="form-group">
                <p>パスワード</p>
                <input type="password" class="form-control" id="password" v-model="userInfo.password" placeholder="password">
            </div>
            <myButton type="submit" class="btn btn-info">登録</myButton>
        </form>
        <p class="or">OR</p>
        <RouterLink class="login" to="/login">ログイン</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
li {
    list-style: none
}

.form-group{
    margin-bottom: 30px;
}

input{
    display: block;
    font-size: 1rem;
    padding: 5px;
    width: 80%;
}

.radio{
    input{
        width: auto;
        display: inline;
        margin-left: 15px;
    }
}

.btn{
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
}

.or{
    text-align: center;
    margin-bottom: 10px;
}

.login{
    display: block;
    text-align: center;
}
</style>