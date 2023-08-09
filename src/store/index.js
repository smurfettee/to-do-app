import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
    todoList: [],
    username: "",
    loggedIn: false,
    id: 0,
    filterUser: "",
    filterText: "",
  },
  getters: {
  },
  mutations: {
    addTodoList(state, data) {
      const copyData = JSON.parse(JSON.stringify(data));
      state.todoList.push(copyData);
    },

    changeUsername(state, data) {
      state.username = data;
    },

    loggedInState(state, data) {
      state.loggedIn = data;
    },

    changeUsernameFiltered(state, data) {
      state.filterUser = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
