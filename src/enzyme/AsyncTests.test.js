import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import waitUntil from "async-wait-until";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import _ from "lodash";
import AsyncTests from "../AsyncTests";
import { List } from "../AsyncTests";

describe("AsyncTests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AsyncTests />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should handle async function - success", async done => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ name: "abc" }));
    const app = shallow(<AsyncTests />);
    app.setState({
      data: []
    });
    app.instance().asyncFunction();
    await waitUntil(() => {
      return !_.isEmpty(app.state("data"));
    });
    expect(app.state("data")).toEqual({ name: "abc" });
    done();
  });

  it("should handle async function - error", async done => {
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.reject({ error: "There was some error" })
      );
    const app = shallow(<AsyncTests />);
    app.setState({
      data: []
    });
    app.instance().asyncFunction();
    await waitUntil(() => {
      return !_.isEmpty(app.state("data"));
    });
    expect(app.state("data")).toEqual({ error: "There was some error" });
    done();
  });

  it("should handle async function - success wo async await", done => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ name: "abc" }));
    const app = shallow(<AsyncTests />);
    app.setState({
      data: []
    });
    app.instance().asyncFunction();
    waitUntil(() => {
      return !_.isEmpty(app.state("data"));
    }).then(() => {
      expect(app.state("data")).toEqual({ name: "abc" });
      done();
    });
  });

  it("should handle axios function - success", async done => {
    const mock = new MockAdapter(axios);
    mock.onGet(/.*/g).reply(200, {
      name: "abc"
    });
    const app = shallow(<AsyncTests />);
    app.setState({
      data: []
    });
    app.instance().axiosFn();
    await waitUntil(() => {
      return !_.isEmpty(app.state("data"));
    });
    expect(app.state("data")).toEqual({ name: "abc" });
    done();
  });

  it("should render the list", async done => {
    const mock = new MockAdapter(axios);
    mock.onGet(/.*/g).reply(200, [1, 2, 3]);
    const app = shallow(<AsyncTests />);
    app.setState({
      data: []
    });
    app.instance().axiosFn();
    await waitUntil(() => {
      return !_.isEmpty(app.state("data"));
    });
    expect(app.state("data")).toEqual([1, 2, 3]);
    app.instance().forceUpdate();
    expect(app.find(List)).toHaveLength(1);
    done();
  });
});
