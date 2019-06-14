import React from "react";
import { shallow } from "enzyme";
import Timers from "../Timers";

describe("settimeout fn", () => {
  it("should increment index by 1 after 1 second (using advanceTimersByTime)", () => {
    const component = shallow(<Timers />);
    jest.useFakeTimers();
    expect(component.state("index")).toEqual(0);
    component.instance().setTimeoutFn();
    jest.advanceTimersByTime(1000);
    expect(component.state("index")).toEqual(1);
    jest.useRealTimers();
  });

  it("should increment index by 1 after 1 second (using runAllTimers)", () => {
    const component = shallow(<Timers />);
    jest.useFakeTimers();
    expect(component.state("index")).toEqual(0);
    component.instance().setTimeoutFn();
    jest.runAllTimers(); // you can also use run.runOnlyPendingTimers()
    expect(component.state("index")).toEqual(1);
    jest.useRealTimers();
  });
});

describe("setinterval fn", () => {
  it("should increment index by 1 after 1 second (using advanceTimersByTime)", () => {
    const component = shallow(<Timers />);
    jest.useFakeTimers();
    expect(component.state("index")).toEqual(0);
    component.instance().setIntervalFn();
    jest.advanceTimersByTime(1000);
    expect(component.state("index")).toEqual(1);
    jest.useRealTimers();
  });

  it("should increment index by 1 after 1 second (using runOnlyPendingTimers)", () => {
    const component = shallow(<Timers />);
    jest.useFakeTimers();
    expect(component.state("index")).toEqual(0);
    component.instance().setIntervalFn();
    jest.runOnlyPendingTimers(); // using runAllTimers will be error as setInterval never
    // finishes. So it will be infinite loop.
    expect(component.state("index")).toEqual(1);
    jest.useRealTimers();
  });
});
