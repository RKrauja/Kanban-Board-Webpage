<script setup>
import TaskCategory from "@/components/TaskCategory.vue";
import { ref } from "vue";
import AppBar from "@/components/AppBar.vue";

let tasks = ref([
  [
    { id: 1, title: "Task 1", description: "Some cute description 1" },
    { id: 2, title: "Task 2", description: "Some cute description 2" },
    { id: 3, title: "Task 3", description: "Some cute description 3" },
  ],
  [
    { id: 4, title: "Task 1", description: "Some cute description 1" },
    { id: 5, title: "Task 2", description: "Some cute description 2" },
    { id: 6, title: "Task 3", description: "Some cute description 3" },
  ],
  [
    { id: 7, title: "Task 1", description: "Some cute description 1" },
    { id: 8, title: "Task 2", description: "Some cute description 2" },
    { id: 9, title: "Task 3", description: "Some cute description 3" },
  ],
  [
    { id: 10, title: "Task 1", description: "Some cute description 1" },
    { id: 11, title: "Task 2", description: "Some cute description 2" },
    { id: 12, title: "Task 3", description: "Some cute description 3" },
  ],
]);

const generateNewTaskId = () => {
  let maxId = 0;
  for (let i = 0; i < tasks.value.length; i++) {
    maxId = Math.max(maxId, ...tasks.value[i].map((task) => task.id));
  }
  return maxId + 1;
};

const handleNewTask = (categoryIndex, newTask) => {
  tasks.value[categoryIndex].push({
    id: generateNewTaskId() + 1,
    title: newTask.title,
    description: newTask.description,
  });
};

const handleUpdatedTask = (categoryIndex, updatedTask) => {
  const taskList = tasks.value[categoryIndex];
  const index = taskList.findIndex((task) => task.id === updatedTask.id);
  if (updatedTask.title === "") {
    taskList.splice(index, 1);
    return;
  }
  taskList[index] = updatedTask.title === "" ? null : updatedTask;
};

const handleTasksReorder = (categoryIndex, newTasks) => {
  tasks.value[categoryIndex] = newTasks;
};
</script>

<template>
  <v-app>
    <App-bar />
    <v-main class="bg-grey-lighten-4">
      <div class="bg-img">
        <v-container class="bg-white-darken-3 bg-opacity-85">
          <v-row>
            <TaskCategory
              :tasks="tasks[0]"
              header-color="bg-red-accent-1"
              title="Backlog"
              @new-task="(task) => handleNewTask(0, task)"
              @update-task="(task) => handleUpdatedTask(0, task)"
              @update:tasks="(newTasks) => handleTasksReorder(0, newTasks)"
            />
            <TaskCategory
              :tasks="tasks[1]"
              header-color="bg-yellow-accent-1"
              title="Doing"
              @new-task="(task) => handleNewTask(1, task)"
              @update-task="(task) => handleUpdatedTask(1, task)"
              @update:tasks="(newTasks) => handleTasksReorder(1, newTasks)"
            />
            <TaskCategory
              :tasks="tasks[2]"
              header-color="bg-green-accent-2"
              title="Review"
              @new-task="(task) => handleNewTask(2, task)"
              @update-task="(task) => handleUpdatedTask(2, task)"
              @update:tasks="(newTasks) => handleTasksReorder(2, newTasks)"
            />
            <TaskCategory
              :tasks="tasks[3]"
              header-color="bg-blue-accent-1"
              title="Done"
              @new-task="(task) => handleNewTask(3, task)"
              @update-task="(task) => handleUpdatedTask(3, task)"
              @update:tasks="(newTasks) => handleTasksReorder(3, newTasks)"
            />
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
<style scoped>
.bg-img {
  background:
    linear-gradient(rgba(115, 115, 115, 0.9), rgba(115, 115, 115, 0.9)),
    url("https://throughjuliaslens.com/wp-content/uploads/2018/06/Christiansborg5.jpg")
      center center / cover;
  min-height: 100vh;
  position: relative;
}
</style>
