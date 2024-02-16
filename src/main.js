import Vue from 'vue'
import App from './App.vue'

// import './assets/main.css'
import store  from "./store/store";


import AddTask from "./components/AddTask.vue";
Vue.component('AddTask', AddTask)

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
