import { mount } from "@vue/test-utils";
import FirstRowButtons from "../FirstRowButtons/FirstRowButtons";

describe("FirstRowButtons", () => {
  const wrapper = mount(FirstRowButtons);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});