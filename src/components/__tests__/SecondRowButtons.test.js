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
});