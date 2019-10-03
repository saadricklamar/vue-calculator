import { mount } from "@vue/test-utils";
import SecondRowButtons from "../SecondRowButtons/SecondRowButtons";

describe("SecondRowButtons", () => {
  const wrapper = mount(SecondRowButtons);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});