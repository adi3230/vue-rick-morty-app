import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

Vue.use(Vuex)

const SET_CHARACTER_LIST = 'SET_CHARACTER_LIST';

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    SET_CHARACTER_LIST(state, characterList) {
      state.characters = characterList;
    },
  },
  actions: {
    async fetchCharacterList({ commit }) {
      const response = await axios.get('/character');
      console.log('result', response.data);
      if(Array.isArray(response.data.results)) {
        commit(SET_CHARACTER_LIST, response.data.results);
      }
    },
  },
  modules: {
  }
})
