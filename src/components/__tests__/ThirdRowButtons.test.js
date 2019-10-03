import { mount } from "@vue/test-utils";
import ThirdRowButtons from "../ThirdRowButtons/ThirdRowButtons";

describe("ThirdRowButtons", () => {
  const wrapper = mount(ThirdRowButtons);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});