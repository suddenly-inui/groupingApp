<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/firebase"
import { doc, setDoc, updateDoc, arrayUnion, getDoc, collection, getDocs, type Primitive } from "firebase/firestore"
import roombox from "@/components/roombox.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

let login = ref(false)
let uid = ref("")
let rooms = ref(["room1"])
let newRoomName = ref("")

async function getRooms(): Promise<void> {
  let col = await getDocs(collection(db, "rooms"))
  let r: string[] = []
  col.forEach((doc) => {
    r.push(doc.id)
  })
  rooms.value = r
}

async function addRoom(): Promise<void> {
  await setDoc(doc(db, "rooms", newRoomName.value), {
    users: []
  }).then(() => {
    getRooms()
  }).catch((e) => {
    alert(e)
  })
}

async function joinRoom(name: string): Promise<void> {
  updateDoc(doc(db, "rooms", name), {
    users: arrayUnion(uid.value)
  })
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
  getRooms()
})
</script>

<template>
  <div>
    <h1>Home</h1>
    <div v-if="login">
      <input type="text" v-model="newRoomName">
      <button @click="addRoom">部屋作成</button>
      <div class="rooms" v-for="room in rooms" key="room">
        <roombox :roomname=room></roombox>
      </div>
    </div>
    <div v-else>
      <h1>ログインしてないよ</h1>
    </div>

  </div>
</template>

<style scoped></style>