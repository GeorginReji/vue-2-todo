<template>
  <div class="form">
    <input
      type="text"
      placeholder="Create a new todo.."
      v-model="title"
      @keyup.enter="addTasks()"
    />
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      taskId: 1,
    };
  },
  methods: {
    addTasks() {
      if(!this.title.length){
        alert('Task is empty')
      }
      else {
        let newTask = {
          id: this.taskId,
          title: this.title,
          status: false,
          editEnable: false,
        };
        this.taskId++;
        this.title = "";
        this.$store.commit('addNewTask', newTask)
      }
    },
  },
};
</script>

<style></style>
