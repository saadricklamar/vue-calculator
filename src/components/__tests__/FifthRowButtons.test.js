import { mount } from "@vue/test-utils";
import FifthRowButtons from "../FifthRowButtons/FifthRowButtons";

describe("FifthRowButtons", () => {
  const wrapper = mount(FifthRowButtons, {
    propsData: {
      displayBtnValue: jest.fn(),
      makeDecimal: jest.fn()
    }
  });
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
  it("should have the props of displayBtnValue", () => {
    expect(wrapper.props("displayBtnValue")).toBeTruthy();
  });
  it("should have the props of makeDecimal", () => {
    expect(wrapper.props("makeDecimal")).toBeTruthy();
  });
  it("should call displayBtnValue when 0 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.zero").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
  it("should call makeDecimal when . is clicked", () => {
    wrapper.vm.makeDecimal = jest.fn();
    wrapper.find("button.decimal").trigger("click");
    expect(wrapper.vm.makeDecimal).toHaveBeenCalled();
  });
});