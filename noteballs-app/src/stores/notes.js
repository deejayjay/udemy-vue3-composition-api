import { defineStore } from "pinia";
import { useToast } from 'vue-toast-notification';

// Toast
const $toast = useToast();
const toastOptions = {
  position: 'top',
  duration: 3000,
};

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: []
  }),
  actions: {
    addNote(newNoteContent) {
      if (newNoteContent.trim() === '') {
        return;
      }

      this.notes.unshift({
        id: crypto.randomUUID(),
        content: newNoteContent.trim()
      });

      $toast.success('The note has been added successfully!', toastOptions);
    },
    deleteNoteById(id) {
      this.notes = this.notes.filter(note => note.id !== id);
      $toast.success('The note was deleted successfully!', toastOptions);
    },
    updateNoteById(id, newNoteContent) {
      const note = this.notes.find(note => note.id === id);
      note.content = newNoteContent.trim();

      $toast.success('The note has been updated successfully!', toastOptions);
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        const note = state.notes.find(note => note.id === id);
        return note.content;
      }
    },
    totalNumberOfNotes: (state) => state.notes.length,
    totalNoOfCharacters: (state) => state.notes.reduce((total, currentNote) => total + currentNote.content.length, 0)
  }
});
