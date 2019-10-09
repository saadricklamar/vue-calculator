import { mount } from "@vue/test-utils";
import FirstRowButtons from "../FirstRowButtons/FirstRowButtons";

describe("FirstRowButtons", () => {
  const wrapper = mount(FirstRowButtons);
  wrapper.vm.$emit("clearDisplay");
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
  it("should call clearDisplay when AC is clicked", () => {
    wrapper.find("button.ac").trigger("click");
    expect(wrapper.emitted().clearDisplay).toBeTruthy();
  });
});
