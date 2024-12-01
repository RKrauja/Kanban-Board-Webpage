import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import AddNewTaskBlock from "../components/AddNewTaskBlock.vue";

describe("AddNewTaskBlock", () => {
  const vuetify = createVuetify();
  const wrapper = mount(AddNewTaskBlock, {
    global: {
      plugins: [vuetify],
    },
  });
  it("can render", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("can add a new task", async () => {
    const [titleField, descriptionField] = wrapper.findAll(
      ".v-text-field input",
    );
    await titleField.setValue("Test Task");
    await descriptionField.setValue("Test Description");
    const addButton = wrapper.findAll(".v-btn")[0];
    await addButton.trigger("click");
    expect(wrapper.emitted("NewTask")?.[0]).toEqual([
      { title: "Test Task", description: "Test Description" },
    ]);
    expect((titleField.element as HTMLInputElement).value).toBe("");
    expect((descriptionField.element as HTMLInputElement).value).toBe("");
  });
  it("can cancel addition of a new task", async () => {
    const [titleField, descriptionField] = wrapper.findAll(
      ".v-text-field input",
    );
    await titleField.setValue("Test Task");
    await descriptionField.setValue("Test Description");
    const cancelButton = wrapper.findAll(".v-btn")[1];
    await cancelButton.trigger("click");
    expect((titleField.element as HTMLInputElement).value).toBe("");
    expect((descriptionField.element as HTMLInputElement).value).toBe("");
  });
  it("can identify task without a title", async () => {
    const [titleField, descriptionField] = wrapper.findAll(
      ".v-text-field input",
    );
    await titleField.setValue("");
    await descriptionField.setValue("Test Description");
    const addButton = wrapper.findAll(".v-btn")[1];
    await addButton.trigger("click");
    expect((titleField.element as HTMLInputElement).value).toBe("");
    expect((descriptionField.element as HTMLInputElement).value).toBe("");
  });
});
