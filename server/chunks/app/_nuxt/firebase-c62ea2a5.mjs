import { d as defineStore } from '../server.mjs';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const useStore = defineStore("store", {
  state: () => ({
    current_page: "Home"
  })
});
const firebaseConfig = {
  apiKey: "AIzaSyANYvEQk6rkElioG2W9thb6I0WPrFQsNYY",
  authDomain: "portfolio-4c322.firebaseapp.com",
  projectId: "portfolio-4c322",
  storageBucket: "portfolio-4c322.appspot.com",
  messagingSenderId: "507944843880",
  appId: "1:507944843880:web:16cad0898ac8b9372859dd"
};
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export { firestoreDB as f, useStore as u };
//# sourceMappingURL=firebase-c62ea2a5.mjs.map
