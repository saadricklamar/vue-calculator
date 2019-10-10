import { mount } from "@vue/test-utils";
import FourthRowButtons from "../FourthRowButtons/FourthRowButtons";

describe("FourthRowButtons", () => {
  const wrapper = mount(FourthRowButtons, {
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
  it("should call displayBtnValue when 1 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.one").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
  it("should call displayBtnValue when 2 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.two").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
  it("should call displayBtnValue when 3 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.three").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
});