import React from "react";
import { shallow } from "enzyme";
import { ReduxTests } from "../ReduxTests";

describe("ReduxTests", () => {
  it("should call increment index on click of button", () => {
    // const spy = jest.spyOn(ReduxTests.prototype, 'incrementIndex');
    const spyProp = jest.fn();
    const component = shallow(<ReduxTests incrementIndex={spyProp} />);
    component.find("button").simulate("click");
    // expect(spy).toHaveBeenCalled();
    expect(spyProp).toHaveBeenCalled();
  });
});
