import { mount } from "@vue/test-utils";
import App from "../../App";

describe("App", () => {
  const wrapper = mount(App);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});