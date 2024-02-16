<template>
  <div class="task-item">
    <div
      v-show="!task.editEnable"
      @click="updateStatus()"
      :class="['check', { 'active-check': task.status }]"
    >
      <img src="../assets/images/icon-check.svg" alt="" />
    </div>
    <p v-if="!task.editEnable" :class="{ inactive: task.status }">
      {{ task.title }}
    </p>
    <div v-else class="edit-form">
      <input
        class="editable-input"
        type="text"
        v-model="title"
        ref="inputFocus"
        @keyup.enter="updateTask(title)"
      />
    </div>
    <button class="close" @click="editEnabled()">
      <img src="../assets/images/edit_icon.svg" alt="" />
    </button>
    <button class="close">
      <img
        src="../assets/images/icon-cross.svg"
        alt=""
        @click="removeTask(task.id)"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "SingleTask",
  props: {
    task: Object,
  },
  data() {
    return {
      taskObj: this.task,
      title: this.task.title,
    };
  },
  methods: {
    updateTask(title) {
      let taskObj = this.task;
      taskObj.title = title;
      taskObj.editEnable = false;
      this.$store.commit('updateTask', taskObj)
    },
    updateStatus() {
      let taskObj = this.task;
      taskObj.status = !this.task.status;
      this.$store.commit('updateTask', taskObj)
    },
    editEnabled() {
      let taskObj = this.task;
      taskObj.editEnable = true
      // this.$refs.inputFocus.focus()
      this.$store.commit('updateTask', taskObj)
    },
    removeTask(id) {
      this.$store.commit('removeTask', id)
    },
  },
  mounted() {
    console.log("Task", this.task);
  },
};
</script>

<style>
.task-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
.todo-li .task-item .close {
  justify-content: flex-end;
}
</style>
