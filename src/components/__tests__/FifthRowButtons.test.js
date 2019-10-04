import { mount } from "@vue/test-utils";
import FifthRowButtons from "../FifthRowButtons/FifthRowButtons";

describe("FifthRowButtons", () => {
  const wrapper = mount(FifthRowButtons);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});