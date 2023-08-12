import { defineStore } from "pinia";

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
    },
    deleteNoteById(id) {
      this.notes = this.notes.filter(note => note.id !== id);
    },
    updateNoteById(id, newNoteContent) {
      const note = this.notes.find(note => note.id === id);
      note.content = newNoteContent.trim();
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
