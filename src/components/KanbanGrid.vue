<script lang="ts" setup>
import TaskCategory from "@/components/TaskCategory.vue";
import { ref, defineExpose } from "vue";
import AppBar from "@/components/AppBar.vue";
import { NewTask, Task } from "@/types/task";

const tasks = ref<Task[][]>([
  [
    {
      id: 1,
      title: "Fix sleep schedule",
      description: "Start going to bed before 1am",
    },
    {
      id: 2,
      title: "Buy curtains",
      description: "Buy new curtains for the apartment",
    },
    {
      id: 3,
      title: "Learn how to change a bike tire",
      description: "Learn this to save money in Denmark",
    },
  ],
  [
    { id: 4, title: "Finish Uni", description: "Get a bachelors degree" },
    { id: 5, title: "Get a job", description: "Get a job as a programmer" },
    {
      id: 6,
      title: "Go to basketball practice",
      description: "Find a basketball team",
    },
  ],
  [
    { id: 7, title: "Math homework", description: "Submit Math homework" },
    {
      id: 8,
      title: "Kanban board",
      description: "Create a kanban board in Vue",
    },
    {
      id: 9,
      title: "Chemistry assignment",
      description: "Carbon cycle assignment",
    },
  ],
  [
    {
      id: 10,
      title: "Finish high school",
      description: "Finish high school with a good grade",
    },
    {
      id: 11,
      title: "Get into University",
      description: "get into a modern university",
    },
    {
      id: 12,
      title: "Make mom proud",
      description: "Give her a son to be proud of",
    },
  ],
]);

const generateNewTaskId = (): number => {
  let maxId = 0;
  for (let i = 0; i < tasks.value.length; i++) {
    maxId = Math.max(maxId, ...tasks.value[i].map((task) => task.id));
  }
  return maxId + 1;
};

const handleNewTask = (categoryIndex: number, newTask: NewTask): void => {
  tasks.value[categoryIndex].push({
    id: generateNewTaskId(),
    title: newTask.title,
    description: newTask.description,
  });
};

const handleUpdatedTask = (categoryIndex: number, updatedTask: Task): void => {
  const taskList = tasks.value[categoryIndex];
  const index = taskList.findIndex((task) => task.id === updatedTask.id);
  if (updatedTask.title === "") {
    taskList.splice(index, 1);
    return;
  }
  taskList[index] = updatedTask;
};

const handleTasksReorder = (categoryIndex: number, newTasks: Task[]): void => {
  tasks.value[categoryIndex] = newTasks;
};
defineExpose({
  tasks,
  handleNewTask,
  handleUpdatedTask,
  handleTasksReorder,
});
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
}
</style>
