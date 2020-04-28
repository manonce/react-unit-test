import React from "react";
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
import SnapShotTests from "../SnapShotTests";

it("renders correctly", () => {
  const app = shallow(<SnapShotTests/>);
  // Date.now = jest.fn(()=>1234)
  const tree = renderer.create(<SnapShotTests />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot({
  children: [ expect.any(String) ] });
  // expect(tree).toMatchSnapshot(<div
  //   className="App"
  // >
  //   {expect.any(String)}
  // </div>)
  // app.find('button').simulate('click');
  // expect(tree).toMatchSnapshot();
});
