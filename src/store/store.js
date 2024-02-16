// src/store/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [],
    activeTab: 'All'
  },
  getters: {
   getAllTask(state) {
    return state.tasks || []
   }
  },
  mutations: {
    addNewTask(state, task) {
      state.tasks.push(task)
    },
    updateTask(state, taskObj) {
      let task = state.tasks.find(item => item.id === taskObj.id)
      task.title = taskObj.title
      task.status = taskObj.status
      task.editEnable = taskObj.editEnable
    },
    removeTask(state, id) {
      const newArray = state.tasks.filter(item => item.id != id)
      state.tasks = newArray
    },
    updateTabChange(state, label) {
      state.activeTab = label
    },
    updateCompleted(state, completedTasks) {
      state.tasks = completedTasks
    }
  },
  actions: {

  }
});

export default store;
