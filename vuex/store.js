import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//the root, initial state object
const state = {
  notes: [],
  activeNote: {}
}

//define the possible mutations that can be applied to our state
const mustations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

//create the Vuex isntance by combineing the state and the mustations objects
//then export the vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
})
