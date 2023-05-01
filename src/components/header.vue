<script setup lang="ts">
import { auth } from "@/firebase/firebase"

import { onAuthStateChanged } from "firebase/auth";
import {onMounted, ref} from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

let login = ref(false)

const logout = () => {
    auth.signOut()
    router.push("/")
}

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
            if (user) {
                login.value = true
            } else {
                login.value = false
            }
        });
})

</script>

<template>
    <header>
        <h1 class="logo">
            <RouterLink to="/">Grouping App</RouterLink>
        </h1>
        <ul class="items">
            <li class="item">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="item">Coming soon...</li>
            <li>
                <input class="item search" type="search" name="search" placeholder="キーワードを入力">
            </li>
            <li class="item" v-if="!login">
                <RouterLink to="/login">ログイン</RouterLink>
            </li>
            <li class="item" v-if="!login">
                <RouterLink to="/register">登録</RouterLink>
            </li>
            <li class="item" v-if="login">
                <RouterLink to="mypage">マイページ</RouterLink>
            </li>
            <li class="item" v-if="login">
                <a class="logout" @click="logout()">ログアウト</a>
            </li>
        </ul>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
}

.logo {
    display: flex;
}

.items {
    display: flex;
    padding-left: 0;
    font-size: 20px;
    width: 100%;
    margin-top: 5px;
}

li {
    list-style: none;
}

.item:nth-of-type(2) {
    margin-right: auto;
}

.item:nth-of-type(4) {
    margin-left: auto;
}

.item {
    padding: 15px;
    font-size: 20px;
}

.search {
    border-top: none;
    border-left: none;
    border-right: none;
}

.search:focus{
    outline: none;
}

.logout {
    cursor: pointer;
}
</style>

