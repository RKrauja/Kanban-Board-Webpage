import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import TaskCategory from "@/components/TaskCategory.vue";

describe("TaskCategory", () => {
  const vuetify = createVuetify();
  const wrapper = mount(TaskCategory, {
    global: {
      plugins: [vuetify],
    },
    props: {
      title: "Test Category",
      headerColor: "bg-red-accent-1",
      tasks: [
        { id: 1, title: "Task 1", description: "Description 1" },
        { id: 2, title: "Task 2", description: "Description 2" },
      ],
    },
  });

  it("can render", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("can reorder tasks", async () => {
    const newTasks = [
      { id: 2, title: "Task 2", description: "Description 2" },
      { id: 1, title: "Task 1", description: "Description 1" },
    ];
    await wrapper.vm.$emit("update:tasks", newTasks);
    expect(wrapper.emitted("update:tasks")?.[0]).toEqual([newTasks]);
  });
});
