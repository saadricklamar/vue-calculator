import { mount } from "@vue/test-utils";
import App from "../../App";

describe("App", () => {
  const wrapper = mount(App, {
    propsData: {
      counter: 0
    }
  });
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
  it("counter is zero by default", () => {
    expect(wrapper.vm.counter).toBe(0);
  });
  it("should set the display to 0 when AC is clicked", () => {
    wrapper.vm.counter = 74;
    wrapper.find("button.ac").trigger("click");
    expect(wrapper.vm.counter).toBe(0);
  });
  it("should turn a number into a percent when % is clicked", () => {
    wrapper.vm.counter = 6;
    wrapper.find("button.percent").trigger("click");
    expect(wrapper.vm.counter).toBe(0.06);
  });
});
