import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import KanbanGrid from "@/components/KanbanGrid.vue";

describe("KanbanGrid", () => {
  const vuetify = createVuetify();
  const wrapper = mount(KanbanGrid, {
    global: {
      plugins: [vuetify],
    },
  });

  it("can render", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("can add a new task to a category", async () => {
    const newTask = { title: "New Task", description: "New Description" };
    await wrapper.vm.handleNewTask(0, newTask);
    expect(wrapper.vm.tasks[0]).toContainEqual({
      id: expect.any(Number),
      title: "New Task",
      description: "New Description",
    });
  });

  it("can update a task in a category", async () => {
    const updatedTask = {
      id: 1,
      title: "Updated Task",
      description: "Updated Description",
    };
    await wrapper.vm.handleUpdatedTask(0, updatedTask);
    expect(wrapper.vm.tasks[0]).toContainEqual(updatedTask);
  });

  it("can reorder tasks in a category", async () => {
    const newTasks = [
      { id: 2, title: "Task 2", description: "Description 2" },
      { id: 1, title: "Task 1", description: "Description 1" },
    ];
    await wrapper.vm.handleTasksReorder(0, newTasks);
    expect(wrapper.vm.tasks[0]).toEqual(newTasks);
  });
});
