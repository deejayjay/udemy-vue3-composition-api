import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "../js/firebase";

// Toast Notifications
const $toast = useToast();
const toastOptions = {
  position: "top",
  duration: 3000
};

// Get a reference to the notes collection
const notesCollectionRef = collection(db, "notes");

// Notes Store
export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [],
    notesLoaded: false
  }),
  actions: {
    // This action is used in App.vue to get all the notes from firestore
    getNotes() {
      this.notesLoaded = false;
      const q = query(notesCollectionRef, orderBy("timestamp", "desc"));
      onSnapshot(q, (querySnapshot) => {
        const notesFromDb = [];

        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            lastModifiedDate: new Date(doc.data().timestamp.seconds * 1000)
          };

          notesFromDb.push(note);
        });
        this.notes = notesFromDb;
        this.notesLoaded = true;
      });
    },
    addNote(newNoteContent) {
      if (newNoteContent.trim() === "") {
        return;
      }

      // Add note to firestore & display toast notification if successful
      addDoc(notesCollectionRef, {
        content: newNoteContent.trim(),
        timestamp: serverTimestamp()
      })
        .then(() => {
          $toast.success("The note has been added successfully!", toastOptions);
        })
        .catch((error) => {
          $toast.error(error.message, toastOptions);
        });
    },
    deleteNoteById(id) {
      deleteDoc(doc(notesCollectionRef, id))
        .then(() => {
          $toast.success("The note was deleted successfully!", toastOptions);
        })
        .catch((error) => {
          $toast.error(error.message, toastOptions);
        });
    },
    updateNoteById(id, newNoteContent) {
      // Update the document in firestore & display toast notification if successful
      updateDoc(doc(notesCollectionRef, id), {
        content: newNoteContent.trim(),
        timestamp: serverTimestamp()
      })
        .then(() => {
          $toast.success(
            "The note has been updated successfully!",
            toastOptions
          );
        })
        .catch((error) => {
          $toast.error(error.message, toastOptions);
        });
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        const note = state.notes.find((note) => note.id === id);
        return note.content;
      };
    },
    totalNumberOfNotes: (state) => state.notes.length,
    totalNoOfCharacters: (state) =>
      state.notes.reduce(
        (total, currentNote) => total + currentNote.content.length,
        0
      )
  }
});
