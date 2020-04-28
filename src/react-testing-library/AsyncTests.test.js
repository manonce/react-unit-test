import React from "react";
import _ from "lodash";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { render, fireEvent, waitForDomChange } from "react-testing-library";
import AsyncTests from "../AsyncTests";

describe("Normal Tests", () => {
  it("should render the list", async (done) => {
    const mock = new MockAdapter(axios);
    mock.onGet(/.*/g).reply(200, {
      data: ["1", "2"]
    });
    const {container} = render(<AsyncTests />);
    fireEvent.click(container.querySelector("#async"), new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    const indexs = Array.from(document.querySelectorAll(".index2")).map(a=>a.firstChild.textContent)
    console.log("indexs", indexs);
    expect(indexs).toEqual(["1", "2"]);
    done()
  });
});
