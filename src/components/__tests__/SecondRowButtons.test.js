import { mount } from "@vue/test-utils";
import SecondRowButtons from "../SecondRowButtons/SecondRowButtons";

describe("SecondRowButtons", () => {
  const wrapper = mount(SecondRowButtons, {
    propsData: {
      displayBtnValue: jest.fn()
    }
  });
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
  it("should have the props of displayBtnValue", () => {
    expect(wrapper.props("displayBtnValue")).toBeTruthy();
  });
  it("should call displayBtnValue when 7 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.seven").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
  it("should call displayBtnValue when 8 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.eight").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
  it("should call displayBtnValue when 9 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.nine").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
});
