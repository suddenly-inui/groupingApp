<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/firebase"
import { doc, setDoc, updateDoc, arrayUnion, getDoc, collection, getDocs, type Primitive } from "firebase/firestore"
import roombox from "@/components/roombox.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { roomsColRef } from "@/types/firestore";
import myButton from "../components/myButton.vue"
import input_box from "@/components/input_box.vue";

const router = useRouter()

let login = ref(false)
let uid = ref("")
let rooms = ref<string[]>([])
let newRoomName = ref("")

async function getRooms(): Promise<void> {
  let col = await getDocs(roomsColRef)
  let r: string[] = []
  col.forEach((doc) => {
    r.push(doc.id)
  })
  rooms.value = r
}

async function addRoom(): Promise<void> {
  if(!newRoomName.value){
    alert("部屋名を入力してください")
    return
  }
  await setDoc(doc(roomsColRef, newRoomName.value), {
    users: []
  }).then(() => {
    getRooms()
  }).catch((e) => {
    alert(e)
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
    <h1 class="title">Home</h1>
    <div class="contents_container">
      <div v-if="login">
        <div class="input_wrapper">
          <input_box class="input" type="text" v-model="newRoomName" placeholder="部屋名を入力"/>
        <myButton @click="addRoom" class="button">部屋作成</myButton>
      </div>
      <div class="rooms_wrapper">
        <div class="rooms" v-for="room in rooms" key="room">
          <roombox :roomname=room></roombox>
        </div>
      </div>
      </div>
      <div v-else>
        <h1>ログインしてないよ</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input_wrapper{
  display: flex;
  justify-content: space-between;

  .input{
    flex-grow: 1;
    margin: 0 5px;
    font-size: 2rem;
  }

  .button{
    margin: 0;
  }
}

.rooms_wrapper{
  margin-top: 40px;
}
</style>