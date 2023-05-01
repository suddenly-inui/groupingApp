<script setup lang="ts">
import { auth, db } from "@/firebase/firebase"
import { doc, getDoc, arrayRemove, updateDoc, arrayUnion, type DocumentData } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

let uid = ref("")
let login = ref(false)
let roomId = ref(route.params.id.toString())
let users = ref([""])
let groups = ref([{}])

const deleteUserFromRoom = () => {
    updateDoc(doc(db, "rooms", roomId.value), {
        users: arrayRemove(uid.value)
    })
}

async function getUsersInRoom(id: string) {
    let snap = await getDoc(doc(db, "rooms", id))

    let data = [""]
    try {
        data = snap.data()!.users
    } catch (e) {
        data = [""]
    }
    users.value = data
    return data
}

async function joinRoom(name: string): Promise<void> {
    updateDoc(doc(db, "rooms", name), {
        users: arrayUnion(uid.value)
    })
}

async function getUserInfo(uid: string) {
    if (login.value) {
        let snap = await getDoc(doc(db, "users", uid))
        let data = snap.data()!
        return data
    }
}

const make_groups = async (g: number) => {
    let usersInfo: DocumentData[] = []
    let uids = await getUsersInRoom(roomId.value)
    uids = [
        "4Xj7DtB2ptQFxWyNNXowpqAqFN62",
        "Bz792Zx1h3kpu5cOGSx9",
        "FlR3A4ViHSParupM2osA",
        "NtdnUwuhgq1pTW2cSjqa",
        "Qo7GNSvgT6TguBUAjiwG",
        "UFdoftbZ9DQ7xChAvAtVenp9kum2",
        "YnPbHnHULuvbORUJN27I",
        "fbCZBIanJZLTngHtqqkF",
        "iuUbz8luF6Sb3652u0Jz",
        "n1rnoHe80N9pdJzfBe3M",
        "q8romO0zEQJxh5qVdfkO",
        "scNFllIsaH47XTgQ0MBJ",
        "ws11j2LQawVGnO88feB3",
    ]

    for (const i of uids) {
        let ui = await getUserInfo(i)
        usersInfo.push(ui!)
    }

    //ここからシャッフル
    let wip = usersInfo.filter(user => user.grade == "1")
    let term = usersInfo.filter(user => user.grade == "2")
    let gp = usersInfo.filter(user => user.grade == "3")
    let upper = usersInfo.filter(user => user.grade == "4")


    const shuffle_divide = (arr: any[], sections: number) => {
        let length = arr.length
        arr.sort(() => Math.random() - 0.5)
        let n = Math.ceil(length / sections)

        let groups = []
        for (let i = 0; i < length; i += n) {
            groups.push(arr.slice(i, i + n))
        }
        return groups
    }

    wip = shuffle_divide(wip, g).sort(() => Math.random() - 0.5)
    term = shuffle_divide(term, g).sort(() => Math.random() - 0.5)
    gp = shuffle_divide(gp, g).sort(() => Math.random() - 0.5)
    upper = shuffle_divide(upper, g).sort(() => Math.random() - 0.5)

    let group: Object[] = []
    for (let i = 0; i < g; i++) {
        if (!wip[i]) {
            wip[i] = []
        }
        if (!term[i]) {
            term[i] = []
        }
        if (!gp[i]) {
            gp[i] = []
        }
        if (!upper[i]) {
            upper[i] = []
        }
        let g = wip[i].concat(term[i], gp[i], upper[i])
        group.push(g)
    }
    groups.value = group
    return group
}

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid.value = user.uid;
            login.value = true;
        }
        else {
            login.value = false;
        }
    });
    getUsersInRoom(roomId.value)
})
</script>

<template>
    <div v-if="login">
        <h1>{{ roomId }}</h1>
        <button @click="joinRoom(roomId); getUsersInRoom(roomId)">部屋に参加</button>
        <button @click=" deleteUserFromRoom(); getUsersInRoom(roomId) ">部屋から抜ける</button>
        <button @click=" make_groups(2) ">シャッフル</button>
        <div v-for="       u        in        users       " key="u">
            <ul>
                <li>{{ u }}</li>
            </ul>
        </div>
        <br>
        <div v-for="       u        in        groups       " key="u">
            <ul>
                <li v-for="   i    in    u   " key="i">{{ i.grade }}</li><br>
            </ul>
        </div>
    </div>
    <div v-else>
        ログインしてね
    </div>
</template>

<style></style>