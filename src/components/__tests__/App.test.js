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
  it("should not add another decimal if a number is already a decimal", () => {
    wrapper.vm.counter = "0.4";
    wrapper.find("button.decimal").trigger("click");
    expect(wrapper.vm.counter).toBe("0.4");
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
  it("should make isOperatorClicked truthy when the divide button is clicked", () => {
    wrapper.vm.isOperatorClicked = false;
    wrapper.find("button.divide").trigger("click");
    expect(wrapper.vm.isOperatorClicked).toBe(true);
  });
  it("should set counter to an empty string when the divide button is clicked", () => {
    wrapper.vm.counter = 198;
    wrapper.find("button.divide").trigger("click");
    expect(wrapper.vm.counter).toBe("");
  });
  it("should set operator to / when the divide button is clicked", () => {
    wrapper.vm.operator = "";
    wrapper.find("button.divide").trigger("click");
    expect(wrapper.vm.operator).toBe("/");
  });
  it("should make isOperatorClicked truthy when the multiply button is clicked", () => {
    wrapper.vm.isOperatorClicked = false;
    wrapper.find("button.multiply").trigger("click");
    expect(wrapper.vm.isOperatorClicked).toBe(true);
  });
  it("should set counter to an empty string when the multiply button is clicked", () => {
    wrapper.vm.counter = 9138;
    wrapper.find("button.multiply").trigger("click");
    expect(wrapper.vm.counter).toBe("");
  });
  it("should set operator to x when the multiply button is clicked", () => {
    wrapper.vm.operator = "";
    wrapper.find("button.multiply").trigger("click");
    expect(wrapper.vm.operator).toBe("x");
  });
  it("should make isOperatorClicked truthy when the subtract button is clicked", () => {
    wrapper.vm.isOperatorClicked = false;
    wrapper.find("button.subtract").trigger("click");
    expect(wrapper.vm.isOperatorClicked).toBe(true);
  });
  it("should set counter to an empty string when the subtract button is clicked", () => {
    wrapper.vm.counter = 1234;
    wrapper.find("button.subtract").trigger("click");
    expect(wrapper.vm.counter).toBe("");
  });
  it("should set operator to - when the subtract button is clicked", () => {
    wrapper.vm.operator = "";
    wrapper.find("button.subtract").trigger("click");
    expect(wrapper.vm.operator).toBe("-");
  });
  it("should make isOperatorClicked truthy when the add button is clicked", () => {
    wrapper.vm.isOperatorClicked = false;
    wrapper.find("button.add").trigger("click");
    expect(wrapper.vm.isOperatorClicked).toBe(true);
  });
  it("should set counter to an empty string when the add button is clicked", () => {
    wrapper.vm.counter = 4234;
    wrapper.find("button.add").trigger("click");
    expect(wrapper.vm.counter).toBe("");
  });
  it("should set operator to + when the add button is clicked", () => {
    wrapper.vm.operator = "";
    wrapper.find("button.add").trigger("click");
    expect(wrapper.vm.operator).toBe("+");
  });
  it("should return the division of two numbers when / is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.vm.num1 = 0;
    wrapper.vm.num2 = 0;
    wrapper.vm.operator = "";
    wrapper.find("button.divide").trigger("click");
    wrapper.vm.num1 = 9;
    wrapper.vm.num2 = 2;
    wrapper.vm.operator = "/";
    wrapper.find("button.equals").trigger("click");
    expect(wrapper.vm.counter).toBe(4.5);
  });
  it("should return the product of two numbers when x is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.vm.num1 = 0;
    wrapper.vm.num2 = 0;
    wrapper.vm.operator = "";
    wrapper.find("button.multiply").trigger("click");
    wrapper.vm.num1 = 21;
    wrapper.vm.num2 = 4;
    wrapper.vm.operator = "x";
    wrapper.find("button.equals").trigger("click");
    expect(wrapper.vm.counter).toBe(84);
  });
  it("should return the difference of two numbers when - is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.vm.num1 = 0;
    wrapper.vm.num2 = 0;
    wrapper.vm.operator = "";
    wrapper.find("button.subtract").trigger("click");
    wrapper.vm.num1 = 100;
    wrapper.vm.num2 = 37;
    wrapper.vm.operator = "-";
    wrapper.find("button.equals").trigger("click");
    expect(wrapper.vm.counter).toBe(63);
  });
  it("should return the sum of two numbers when + is clicked", () => {
    wrapper.vm.counter = 0;
    wrapper.vm.num1 = 0;
    wrapper.vm.num2 = 0;
    wrapper.vm.operator = "";
    wrapper.find("button.add").trigger("click");
    wrapper.vm.num1 = 54.5;
    wrapper.vm.num2 = 17;
    wrapper.vm.operator = "+";
    wrapper.find("button.equals").trigger("click");
    expect(wrapper.vm.counter).toBe(71.5);
  });
  it("should clear all calculations when Clear All Calculations is clicked", () => {
    wrapper.vm.recents = ["hi", "bye"];
    wrapper.find("button.clear-calcs").trigger("click");
    expect(wrapper.vm.recents).toStrictEqual([]);
  });
  it("should clear a specific calculation when delete is clicked", () => {
    wrapper.vm.recents = ["hi", "bye"];
    wrapper.find("button.clear-specific").trigger("click");
    expect(wrapper.vm.recents).toStrictEqual(["bye"]);
  });
});
