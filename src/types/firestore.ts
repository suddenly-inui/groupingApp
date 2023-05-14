import { collection, type CollectionReference } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const roomsColRef = collection(
    db,
    "rooms"
  ) as CollectionReference<{
    users:string[]
  }>;

export const usersColRef = collection(
  db,
  "users"
) as CollectionReference<{
  email: string,
  uid: string,
  grade: string,
  username: string
}>;