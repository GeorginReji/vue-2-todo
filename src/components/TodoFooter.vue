<template>
  <div class="todo-footer">
    <p>{{ tasks.filter((item) => !item.status).length }} items left</p>
    <div class="choice">
      <p
        v-for="(tab, index) in tabs"
        :key="index"
        @click="updateList(index, tab.label)"
        :style="{ color: tab.color }"
      >
        {{ tab.label }}
      </p>
    </div>
    <p class="clear-all" @click="clearCompleted()">Clear Completed</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "TodoFooter",
  data() {
    return {
      tabs: [
        { label: "All", color: "hsl(220, 98%, 61%)" },
        { label: "Active", color: "hsl(233, 14%, 35%)" },
        { label: "Completed", color: "hsl(233, 14%, 35%)" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      tasks: 'getAllTask'
    })
  },
  methods: {
    updateList(index, label) {
      this.$store.commit("updateTabChange", label);
      this.$set(this.tabs, index, {
        ...this.tabs[index],
        color: "hsl(220, 98%, 61%)",
      });
      this.tabs.forEach((tab, i) => {
        if (i !== index) {
          this.$set(this.tabs, i, { ...tab, color: "hsl(233, 14%, 35%)" });
        }
      });
    },
    clearCompleted() {
    console.log('tasks in footer', this.tasks);
      const pendingTasks = this.tasks.filter((item) => item.status === false);
      this.$store.commit("updateCompleted", pendingTasks);
    },
  },
};
</script>

<style></style>
