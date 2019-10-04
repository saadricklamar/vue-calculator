import { mount } from "@vue/test-utils";
import FourthRowButtons from "../FourthRowButtons/FourthRowButtons";

describe("FourthRowButtons", () => {
  const wrapper = mount(FourthRowButtons);
  it("should match the snapshot", () => {
    expect(wrapper.isVueInstance()).toMatchSnapshot();
  });
});