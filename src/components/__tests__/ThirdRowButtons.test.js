import { mount } from "@vue/test-utils";
import ThirdRowButtons from "../ThirdRowButtons/ThirdRowButtons";

describe("ThirdRowButtons", () => {
  const wrapper = mount(ThirdRowButtons, {
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
  it("should call displayBtnValue when 4 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.four").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
  it("should call displayBtnValue when 5 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.five").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
  it("should call displayBtnValue when 6 is clicked", () => {
    wrapper.vm.displayBtnValue = jest.fn();
    wrapper.find("button.six").trigger("click");
    expect(wrapper.vm.displayBtnValue).toHaveBeenCalled();
  });
});