<script setup lang="ts">
import { doc, getDoc } from "firebase/firestore"
import { db, auth } from "@/firebase/firebase"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { routerKey, useRoute, useRouter } from "vue-router";
import loading from "@/components/loading.vue"
import { onMounted, reactive, ref } from "vue";


const router = useRouter()

let login = ref(false)
let user = reactive({
    uid: "",
    email: "",
    grade: "",
    username: ""
})

async function getUid(): Promise<void> {
    if (login.value) {
        let snap = await getDoc(doc(db, "users", auth.currentUser!.uid))
        let data: string = snap.data()!.uid
        user.uid = data        
    }
}

async function getUserEmail() {
    if (login.value) {
        let snap = await getDoc(doc(db, "users", auth.currentUser!.uid))
        let data: string = snap.data()!.email
        user.email = data        
    }
}

async function getUserGrade() {
    if (login.value) {
        let snap = await getDoc(doc(db, "users", auth.currentUser!.uid))
        let data: string = snap.data()!.grade
        user.grade = data        
    }
}

async function getUserName() {
    if (login.value) {
        let snap = await getDoc(doc(db, "users", auth.currentUser!.uid))
        let data: string = snap.data()!.username
        user.username = data
    }
}

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            login.value = true;
            getUid()
            getUserEmail()
            getUserGrade()
            getUserName()
        }
        else {
            login.value = false;
            router.push("/")
        }
    });
})
</script>

<template>
    <div v-if="login">
        <h1>MyPage</h1>
        <p>{{ user.uid }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.grade }}</p>
    </div>

    <div v-else>
        <loading />
    </div>
</template>