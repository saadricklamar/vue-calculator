import { mount } from "@vue/test-utils";
import App from "../../App";


describe("App", () => {
  const wrapper = mount(App);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
  it("should set the display to 0 when AC is clicked", () => {
    wrapper.vm.clearDisplay = jest.fn();
    wrapper.find("button.ac").trigger("click");
    expect(wrapper.vm.counter).toBe(0);
  });
});