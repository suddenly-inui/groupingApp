<script setup lang="ts">
import { auth } from "@/firebase/firebase"

import { onAuthStateChanged } from "firebase/auth";
import {onMounted, ref} from "vue"
import { useRouter } from "vue-router";
import input_box from "./input_box.vue"

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
    <div class="header_wrapper">
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
                    <input_box class="item" placeholder="部屋を検索" type="hidden"/>
                </li>
                <li class="item" v-if="!login">
                    <RouterLink to="/login">LogIn</RouterLink>
                </li>
                <li class="item" v-if="!login">
                    <RouterLink to="/register">Register</RouterLink>
                </li>
                <li class="item" v-if="login">
                    <RouterLink to="/mypage">MyPage</RouterLink>
                </li>
                <li class="item" v-if="login">
                    <a class="logout" @click="logout()">Logout</a>
                </li>
            </ul>
        </header>
    </div>
</template>

<style scoped lang="scss">
.header_wrapper{
    width: 100%;
    box-shadow: 0 1px 3px #0000001a;
    padding-bottom: 10px;
    header {
        max-width: 1280px;
        margin: 0 auto;
    }
}

.logo {
    display: flex;
    font-size: 2.5rem;
}

.items {
    display: flex;
    padding-left: 0;
    font-size: 1.5rem;
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
    font-size: 1.5rem;
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

