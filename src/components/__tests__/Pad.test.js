import { mount } from "@vue/test-utils";
import Pad from "../Pad/Pad";

describe("Pad", () => {
  const wrapper = mount(Pad);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});
