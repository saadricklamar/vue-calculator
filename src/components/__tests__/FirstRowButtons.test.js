import { mount } from "@vue/test-utils";
import FirstRowButtons from "../FirstRowButtons/FirstRowButtons";

describe("FirstRowButtons", () => {
  const wrapper = mount(FirstRowButtons, {
    propsData: {
      clearDisplay: jest.fn()
    }
  });
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
  it("should have the props of clearDisplay", () => {
    expect(wrapper.props('clearDisplay')).toBeTruthy();
  })
  it("should call clearDisplay when AC is clicked", () => {
    wrapper.vm.clearDisplay  = jest.fn();
    wrapper.find("button.ac").trigger("click");
    expect(wrapper.vm.clearDisplay).toHaveBeenCalled();
  });
});
