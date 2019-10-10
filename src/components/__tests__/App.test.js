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
  it("should turn a number into a decimal when . is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.decimal").trigger("click");
    expect(wrapper.vm.counter).toBe("0.");
  });
  it("should turn a number negative when +/- is clicked", () => {
    wrapper.vm.counter = 9;
    wrapper.find("button.plus-minus").trigger("click");
    expect(wrapper.vm.counter).toBe("-9");
  });
  it("should turn a negative number positive when +/- is clicked", () => {
    wrapper.vm.counter = -67;
    wrapper.find("button.plus-minus").trigger("click");
    expect(wrapper.vm.counter).toBe("67");
  });
  it("should display 1 when the button 1 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.one").trigger("click");
    expect(wrapper.vm.counter).toBe("1");
  });
  it("should display 2 when the button 2 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.two").trigger("click");
    expect(wrapper.vm.counter).toBe("2");
  });
  it("should display 3 when the button 3 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.three").trigger("click");
    expect(wrapper.vm.counter).toBe("3");
  });
  it("should display 4 when the button 4 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.four").trigger("click");
    expect(wrapper.vm.counter).toBe("4");
  });
  it("should display 5 when the button 5 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.five").trigger("click");
    expect(wrapper.vm.counter).toBe("5");
  });
  it("should display 6 when the button 6 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.six").trigger("click");
    expect(wrapper.vm.counter).toBe("6");
  });
  it("should display 7 when the button 7 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.seven").trigger("click");
    expect(wrapper.vm.counter).toBe("7");
  });
  it("should display 8 when the button 8 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.eight").trigger("click");
    expect(wrapper.vm.counter).toBe("8");
  });
  it("should display 9 when the button 9 is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.find("button.nine").trigger("click");
    expect(wrapper.vm.counter).toBe("9");
  });
});