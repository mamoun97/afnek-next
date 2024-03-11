import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCpIv0p-cZ3mnZya5JEyLNlvByTcujLa2Q",
    authDomain: "afnek-c045c.firebaseapp.com",
    projectId: "afnek-c045c",
    storageBucket: "afnek-c045c.appspot.com",
    messagingSenderId: "576023274527",
    appId: "1:576023274527:web:7d72c31a27d1aeb83be12a",
    measurementId: "G-75G241PGYE"
  };
// const firebaseConfig = {
//   apiKey: "AIzaSyDYa5dxFT3mUjqKVVgn5DIeYZZNFi64NT4",
//   authDomain: "afnek-next.firebaseapp.com",
//   projectId: "afnek-next",
//   storageBucket: "afnek-next.appspot.com",
//   messagingSenderId: "245222627248",
//   appId: "1:245222627248:web:13ce4ed8848727b0186875",
//   measurementId: "G-CNHSS7TZ6N"
// };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;