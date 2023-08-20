import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useToast } from "vue-toast-notification";

import { auth } from "../js/firebase.js";
import { useNotesStore } from "./notes";

// Toast Notifications
const $toast = useToast();
const toastOptions = {
  position: "top",
  duration: 3000
};

// Auth Store
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {}
  }),
  actions: {
    initAuth() {
      const notesStore = useNotesStore();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          console.log("User logged in", user);

          this.user.id = user.uid;
          this.user.email = user.email;

          notesStore.initializeDbRefs();

          this.router.push("/");
        } else {
          // User is signed out
          this.user = {};
          notesStore.clearNotes();
          console.log("User signed out");
          this.router.replace("/auth");
        }
      });
    },
    registerUser({ email, password }) {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          $toast.success("User registered successfully", toastOptions);
          console.log("User", user);
        })
        .catch((error) => {
          $toast.error(error.message, toastOptions);
          console.error(error.message);
        });
    },
    loginUser({ email, password }) {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          $toast.success("User logged in successfully", toastOptions);
        })
        .catch((error) => {
          $toast.error(error.message, toastOptions);
          console.error(error.message);
        });
    },
    logoutUser() {
      return signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("User", auth);
          console.log("User logged out successfully");
        })
        .catch((error) => {
          // An error happened.
          $toast.error(error.message, toastOptions);
          console.error(error.message);
        });
    }
  }
});
