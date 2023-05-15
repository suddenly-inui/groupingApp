<script setup lang="ts">
import { auth, db } from "@/firebase/firebase";
import {
  doc,
  getDoc,
  arrayRemove,
  updateDoc,
  arrayUnion,
  type DocumentData,
  collection,
  type CollectionReference,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { shuffle_divide, gradeToStr } from "../utils/utils";
import { roomsColRef, usersColRef } from "../types/firestore";
import myButton from "@/components/myButton.vue";
import input_box from "@/components/input_box.vue";
import ShuffleButton from "@/components/shuffleButton.vue";
import type { User } from "@/types/user";

const route = useRoute();
const router = useRouter();

let uid = ref("");
let login = ref(false);
let roomId = ref(route.params.id.toString());

let room_members_uid = ref<string[]>([]);
let usersinfo = ref<User[]>([]);

let groups = ref<DocumentData[][]>([]);
let group_num = ref<number>(2);

const getUserInfos = async (uids: string[]) => {
  if (!login.value) {
    router.push("/");
  }

  usersinfo.value = [];
  let v = [];

  for (let u of uids) {
    let snap = await getDoc(doc(usersColRef, u));
    let info = snap.data()!;

    v.push(info);
  }
  usersinfo.value = v;
  return usersinfo.value;
};

const getUserInfo = async (uid: string) => {
  if (!login.value) {
    router.push("/");
  }
  let snap = await getDoc(doc(usersColRef, uid));
  let data = snap.data()!;
  return data;
};

const deleteUserFromRoom = () => {
  updateDoc(doc(roomsColRef, roomId.value), {
    users: arrayRemove(uid.value),
  });
};

async function getUsersInRoom(id: string) {
  let snap = await getDoc(doc(roomsColRef, id));

  const data = snap.data();
  if (!data) {
    throw Error("data not found");
  }
  room_members_uid.value = data.users;

  return data.users;
}

async function joinRoom(name: string): Promise<void> {
  updateDoc(doc(roomsColRef, name), {
    users: arrayUnion(uid.value),
  });
}

const makeGroups = async (g: number) => {
  let usersInfo: DocumentData[] = [];

  for (const i of room_members_uid.value) {
    let ui = await getUserInfo(i);
    usersInfo.push(ui!);
  }

  let wip: User[] = usersinfo.value.filter((user) => user.grade == "1");
  let term: User[] = usersinfo.value.filter((user) => user.grade == "2");
  let gp: User[] = usersinfo.value.filter((user) => user.grade == "3");
  let upper: User[] = usersinfo.value.filter((user) => user.grade == "4");

  let wip_group = shuffle_divide(wip, g).sort(() => Math.random() - 0.5);
  let term_group = shuffle_divide(term, g).sort(() => Math.random() - 0.5);
  let gp_group = shuffle_divide(gp, g).sort(() => Math.random() - 0.5);
  let upper_group = shuffle_divide(upper, g).sort(() => Math.random() - 0.5);

  //デバッグ終わったらUsers[]に修正
  let group: User[][] = [];
  for (let i = 0; i < g; i++) {
    if (!wip_group[i]) {
      wip_group[i] = [];
    }
    if (!term_group[i]) {
      term_group[i] = [];
    }
    if (!gp_group[i]) {
      gp_group[i] = [];
    }
    if (!upper_group[i]) {
      upper_group[i] = [];
    }
    let g = wip_group[i].concat(term_group[i], gp_group[i], upper_group[i]);
    group.push(g);
  }
  groups.value = group;
  for (let i of groups.value) {
    i.sort((a, b) => {
      if (a.grade === b.grade) return 0;
      return a.grade < b.grade ? 1 : -1;
    });
  }

  //console.log(group);

  return groups.value;
};

const add = () => {
  group_num.value++;
};

const sub = () => {
  group_num.value--;
};

watch(group_num, () => {
  if (group_num.value <= 0) {
    group_num.value = 1;
  }
});

watch(room_members_uid, () => {
  getUserInfos(room_members_uid.value);
});

watch(usersinfo, () => {
  usersinfo.value = usersinfo.value.sort((a, b) => {
    if (a.grade === b.grade) return 0;
    return a.grade < b.grade ? 1 : -1;
  });
});

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid.value = user.uid;
      login.value = true;
    } else {
      login.value = false;
    }
  });
  getUsersInRoom(roomId.value).then(() => {
    getUserInfos(room_members_uid.value);
  });
});
</script>

<template>
  <div v-if="login">
    <h1 class="title">{{ roomId }}</h1>
    <div class="contents_container">
      <div class="top_buttons">
        <myButton
          class="button"
          @click="
            joinRoom(roomId);
            getUsersInRoom(roomId);
          "
          >部屋に参加</myButton
        >
        <myButton
          class="button"
          @click="
            deleteUserFromRoom();
            getUsersInRoom(roomId);
          "
          >部屋から抜ける</myButton
        >
      </div>
      <div class="shuffle_buttons">
        <ShuffleButton
          class="button"
          @shuffle="makeGroups(group_num)"
          @add="add"
          @sub="sub"
          >SHUFFLE INTO <span>{{ group_num }}</span> PAIRS</ShuffleButton
        >
      </div>
      <h2>MEMBER</h2>
      <div class="users_wrapper">
        <div class="users">
          <div v-for="u in usersinfo" key="u" class="items">
            <p class="username">{{ u.username }}</p>
            <p class="grade">{{ gradeToStr(u.grade) }}</p>
          </div>
        </div>
      </div>

      <h2>Groups</h2>
      <div class="groups_wrapper">
        <ul v-for="u in groups" key="u" class="groups">
          <li v-for="i in u" key="i">{{ i.username }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>ログインしてね</div>
</template>

<style lang="scss" scoped>
.top_buttons {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  .button {
    margin: 0 auto;
  }
}

.shuffle_buttons {
  width: 100%;
  display: flex;
  justify-content: center;

  .button {
    font-size: 1.5rem;
    margin: 0 auto;

    span {
      font-weight: bold;
    }
  }
}

.users li {
  margin-left: 20px;
}

.users {
  .items {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  p {
    display: inline;
  }
}

.groups_wrapper {
  display: flex;
  justify-content: center;

  .groups {
    border: 3px solid $sub_color;
    border-radius: 5%;
    margin: 10px;
    width: 50%;
    text-align: center;
  }
}
</style>
