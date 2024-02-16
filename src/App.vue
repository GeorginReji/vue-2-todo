<template>
  <div id="app" :class="['main', theme]">
    <div class="top-banner flex-center">
      <div class="content">
        <h1>TO DO</h1>
        <div v-if="this.theme === 'theme1'" @click="updateTheme('theme2')">
          <img src="./assets/images/icon-sun.svg" alt="" />
        </div>
        <div v-else @click="updateTheme('theme1')">
          <img src="./assets/images/icon-moon.svg" alt="" />
        </div>
      </div>
      <div class="todo">
        <AddTask @getTask="setTask"> </AddTask>
        <TodoList
          :taskList="tasks"
          :activeTab="activeTab"
          @getTaskList="setTaskList"
        >
        </TodoList>

        <TodoFooter
          :taskList="tasks"
          @getTabChange="setTabchange"
          @getTaskList="setTaskList"
        >
        </TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  name: "App",
  components: {
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
  data() {
    return {
      theme: "theme1",
      tasks: [],
      activeTab: "All",
    };
  },
  methods: {
    setTask(newTask) {
      this.tasks.push({ ...newTask });
    },
    updateTheme(theme) {
      this.theme = theme;
    },
    setTaskList(taskData) {
      this.tasks = taskData;
    },
    setTabchange(currTab) {
      this.activeTab = currTab;
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.theme1 {
  --mainbgcolor: hsl(235, 21%, 11%);
  --textcolorprimary: hsl(0, 0%, 98%);
  --formbg: hsl(235, 24%, 19%);
  --textcolorsecondary: hsl(234, 11%, 52%);
  --bordercolor: hsl(233, 14%, 35%);
}
.theme2 {
  --mainbgcolor: hsl(236, 33%, 92%);
  --textcolorprimary: hsl(235, 19%, 35%);
  --formbg: hsl(0, 0%, 98%);
  --textcolorsecondary: hsl(233, 11%, 84%);
  --bordercolor: hsl(233, 14%, 35%);
}

.main {
  width: 100%;
  height: 100vh;
  background-color: var(--mainbgcolor);
}
.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-banner {
  width: 100%;
  height: 40vh;
  background: url(./assets/images/bg-desktop-dark.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.content {
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-top: 40vh;
  margin-bottom: 10px;
}
.content h1 {
  letter-spacing: 3px;
  color: hsl(0, 0%, 98%);
}
.content img {
  height: 34px;
}
.todo {
  width: 600px;
  max-height: 500px;
}
.form {
  width: 100%;
  height: 65px;
}
.form input {
  width: 100%;
  padding: 15px 30px;
  border-radius: 5px;
  background: var(--formbg);
  color: var(--textcolorprimary);
  letter-spacing: 1px;
  outline: none;
  border: none;
}
.edit-form {
  width: 100%;
  height: 15px;
}
.edit-form .editable-input {
  width: 100%;
  border-radius: 5px;
  background: var(--formbg);
  color: var(--textcolorprimary);
  letter-spacing: 1px;
  outline: none;
  border: none;
}
input::placeholder {
  color: var(--textcolorprimary);
  letter-spacing: 2px;
}
.todo-list {
  width: 100%;
  max-height: 100vh;
}
.todo-content {
  width: 100%;
  background-color: var(--mainbgcolor);
}
.todo-li {
  display: flex;
  background-color: var(--formbg);
  padding: 1rem 0.9rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-style: italic;
  font-size: 18px;
  align-items: center;
}
.todo-li p {
  width: 92%;
  color: var(--textcolorprimary);
}
.todo-li .inactive {
  color: var(--textcolorsecondary);
  text-decoration: line-through;
}
.todo-li .check {
  width: 20px;
  height: 20px;
  border: 1px solid var(--bordercolor);
  border-radius: 50%;
  display: grid;
  place-content: center;
  margin-right: 1rem;
  cursor: pointer;
}
.todo-li .check img {
  transform: scale(0);
  transition: all 0.3s ease;
}
.todo-li .close {
  background: transparent;
  border: none;
  outline: none;
  opacity: 0;
  transition: all 0.4s ease;
  cursor: pointer;
  padding-left: 10px;
}
.todo-li:hover .close {
  opacity: 1;
}
.todo-li .close img {
  color: var(--textcolorsecondary);
}
.hr {
  width: 100%;
  height: 0.9px;
  background-color: var(--bordercolor);
}
.todo-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--bordercolor);
  padding: 1rem 0.9rem;
  background-color: var(--formbg);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.todo-footer p {
  cursor: pointer;
}
.todo-footer .clear-all:hover {
  color: rgb(197, 16, 16);
}
.active-check {
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}
.active-check img {
  transform: scale(1) !important;
}
.choice {
  display: flex;
}
.choice p {
  padding: 0 5px;
}
</style>
