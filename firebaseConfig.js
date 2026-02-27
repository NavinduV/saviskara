// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage,ref,uploadString,getDownloadURL,uploadBytes} from 'firebase/storage'
import uuid4 from 'uuid4'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)

export const UploadFile = async (file) => {
  let filename = uuid4()
  let res = ""
  console.log(filename);
  const storageRef = ref(storage, `papers/${filename}.pdf`);
  await uploadBytes(storageRef, file).then(async(snapshot) => {
      await getDownloadURL(snapshot.ref).then(async(url)=>{
          res = url
      })
    })
  return res
}