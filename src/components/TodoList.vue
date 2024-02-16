<template>
  <div class="todo-list">
    <div class="todo-content">
      <div v-for="task in updateTabList" :key="task.id" class="todo-li">
        <SingleTask
        :task ='task'
        >
        </SingleTask>
      </div>
      <div class="hr"></div>
    </div>
  </div>
</template>

<script>
import SingleTask from './SingleTask.vue';
import { mapGetters } from 'vuex'
export default {
  name: "todo-list",
  components: {
    SingleTask: SingleTask
  },

  methods: {
  },
  computed: {
    ...mapGetters({
      allTask: 'getAllTask'
    }),
    updateTabList() {
      let displayTask = []
      switch(this.$store.state.activeTab){
        case 'All':
          displayTask = this.allTask
          break
        case 'Active':
          displayTask = this.allTask.filter(item => !item.status)
          break
        case 'Completed':
          displayTask = this.allTask.filter(item => item.status)
          break
      }
      return displayTask
    },
  },
};
</script>

<style></style>
