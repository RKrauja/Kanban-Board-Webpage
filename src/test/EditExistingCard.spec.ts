import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import EditExistingCard from "@/components/EditExistingCard.vue";

describe("AddNewTaskBlock", () => {
  const vuetify = createVuetify();
  const wrapper = mount(EditExistingCard, {
    global: {
      plugins: [vuetify],
    },
    props: {
      title: "test title",
      description: "test description",
    },
  });
  it("can render", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("can cancel edit of a task", async () => {
    const [titleField, descriptionField] = wrapper.findAll(
      ".v-text-field input",
    );
    await titleField.setValue("edited title");
    await descriptionField.setValue("edited description");
    const cancelButton = wrapper.findAll(".v-btn")[1];
    await cancelButton.trigger("click");
    expect(wrapper.emitted("EditedTask")?.[0][0]).toEqual({
      title: "test title",
      description: "test description",
    });
  });
});
