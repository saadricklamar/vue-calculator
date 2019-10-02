import { mount } from "@vue/test-utils";
import Display from "../Display/Display";

describe("Display", () => {
  const wrapper = mount(Display);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});
